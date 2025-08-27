import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import event from "../../../public/img/event.png";
import "./ManageEvent.css";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import EventList from "../../component/EvemtList/EventList";
const Image_Upload_Token = import.meta.env.VITE_Image_Upload_Token;
const ManageEvent = () => {
  const [images, setImages] = useState([]);
  const [uploadData, setUploadData] = useState(false);
  const [eventData, setEvenData] = useState({
    title: "",
    details: "",
    condition: "",
    discount: "",
  });

  const isEventData = () => {
    return (
      eventData.title.trim() &&
      eventData.details.trim() &&
      eventData.condition.trim() &&
      eventData.discount.trim()
    );
  };

  const handelEvent = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const details = from.details.value;
    const condition = from.condition.value;
    const discount = from.discount.value;
    const eventData = { title, details, condition, discount };
    setUploadData(true);
    console.log(eventData);

    try {
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Upload_Token}`;
      const uploadImage = await Promise.all(
        images.map(async (imageObj) => {
          const imageData = new FormData();
          imageData.append("image", imageObj.file);
          const response = await fetch(img_hosting_url, {
            method: "POST",
            body: imageData,
          });
          const result = await response.json();
          if (result.success) {
            return result.data.url;
          } else {
            throw new Error("image upload fail");
          }
        })
      );
      const finalEventData = {
        ...eventData,
        eventImage: uploadImage,
      };
      const res = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(finalEventData),
      });
      const data = await res.json();
      if (data.insertedId || data?.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setImages([]);
        setEvenData({
          title: "",
          details: "",
          condition: "",
          discount: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
      console.error("Error while uploading product:", error);
    } finally {
        setUploadData(false);
    }
  };
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const maxNumber = 69;

  return (
    <div className="evenMain">
      <h1>Manage Event</h1>
      <form action="" onSubmit={handelEvent}>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div
              className={
                images?.length > 0
                  ? "upload__image-wrapper hasImages"
                  : "upload__image-wrapper"
              }
            >
              <p
                className={images?.length > 0 ? "againAdd" : "picAddBtn"}
                onClick={onImageUpload}
                {...dragProps}
              >
                Add Event Picture
              </p>
              {imageList.map((image, index) => (
                <div key={index} className="even_image-item">
                  <img src={image["data_url"]} alt="" />
                  <div className="event-image-item__btn-wrapper">
                    <p onClick={() => onImageRemove(index)}>
                      <RxCross2 style={{ paddingTop: "5px" }} />
                    </p>
                  </div>
                </div>
              ))}

              {images?.length > 0 ? (
                <div>
                  <button
                    className="removeEventPicBtn"
                    onClick={onImageRemoveAll}
                  >
                    Remove all images
                  </button>
                  <div></div>
                </div>
              ) : (
                <div className="emptyEvent">
                  <EventList/>
                </div>
              )}
            </div>
          )}
        </ImageUploading>
        {images?.length > 0 ? (
          <div>
            <h1>Event description</h1>
            <div>
              <label>
                Event title<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                type="text"
                name="title"
                id=""
                className="eventInput"
                onChange={(e) =>
                  setEvenData({ ...eventData, title: e.target.value })
                }
              />
            </div>
            <div>
              <label>
                Event details<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <textarea
                className="eventDetailsArea"
                name="details"
                onChange={(e) =>
                  setEvenData({ ...eventData, details: e.target.value })
                }
                id=""
              />
            </div>
            <div>
              <label>
                Event condition<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="eventInput"
                type="text"
                name="condition"
                onChange={(e) =>
                  setEvenData({ ...eventData, condition: e.target.value })
                }
                id=""
              />
            </div>
            <div>
              <label>
                Discount<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="eventInput"
                type="text"
                name="discount"
                onChange={(e) =>
                  setEvenData({ ...eventData, discount: e.target.value })
                }
                id=""
              />
            </div>
            {isEventData() ? (
              <div>
                <input
                  className="eventSubmitBtn"
                  disabled={!isEventData()}
                  type="submit"
                  value="Add Event"
                />
              </div>
            ) : (
              <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
                Please fill all required fields before submitting.
              </p>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </form>
      <div>
        <h1 className={uploadData ? "loading" : "hold"}>is loading ...</h1>
      </div>
    </div>
  );
};

export default ManageEvent;

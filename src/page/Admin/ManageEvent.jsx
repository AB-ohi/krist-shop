import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import event from "../../../public/img/event.png";
import "./ManageEvent.css";
import { RxCross2 } from "react-icons/rx";

const ManageEvent = () => {
  const [images, setImages] = useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const maxNumber = 69;

  return (
    <div className="evenMain">
      <h1>Manage Event</h1>
      <form action="">
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
          <div className={images?.length > 0 ? "upload__image-wrapper hasImages" : "upload__image-wrapper"}>
            <p
              className={images?.length>0?"againAdd":"picAddBtn"}
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
                <img src={event} alt="" />
                <div></div>
              </div>
            )}
          </div>
        )}
      </ImageUploading>
      {
        images?.length> 0?(
            <div>
                <h1>Event description</h1>
                <div>
                    <label>Event title</label>
                <input type="text" name="title" id="" />
                </div>
                <div>
                    <label>Event details</label>
                <input type="text" name="details" id="" />
                </div>
                <div>
                    <label>Event condition</label>
                <input type="text" name="condition" id="" />
                </div>
                <div>
                    <label>Discount</label>
                <input type="text" name="discount" id="" />
                </div>

            </div>
        ):(
            <div>

            </div>
        )
      }
      
      </form>
    </div>
  );
};

export default ManageEvent;

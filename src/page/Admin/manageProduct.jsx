import React from "react";
import "./manageProduct.css";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
import addProduct from "../../../public/img/addProduct.gif";
const ManageProduct = () => {
  const [images, setImages] = React.useState([]);
  console.log(images);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="manage_product_body">
      <h1>Add New Product</h1>
      <div className="productUpArea">
        <div style={{ width: "50%" }}>
          <div>
            <p style={{ fontSize: "20px", marginBottom: "4px" }}>
              product Images{" "}
            </p>
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
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    className="imgSelectBtn"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select your product
                  </button>

                  <div>
                    <div className="imgArea">
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img
                            style={{ width: "100px", borderRadius: "8px" }}
                              src={image["data_url"]}
                            alt=""
                            width="100"
                          />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageRemove(index)}>
                              <RxCross2 style={{ paddingTop: "5px" }} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {imageList?.length > 0 ? (
                    <button
                      className="removeAllImgBtn"
                      onClick={onImageRemoveAll}
                    >
                      Remove all images
                    </button>
                  ) : (
                    <div>
                      <img
                        style={{ width: "50%", margin: "auto" }}
                        src={addProduct}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              )}
            </ImageUploading>
          </div>
          <div>
            {images?.length > 0 ? (
              <div>
                <p style={{ marginTop: "10px", fontSize: "20px" }}>
                  shopping and Delivery
                </p>
                <div
                  style={{
                    border: "1px solid rgb(187, 158, 254)",
                    borderRadius: "8px",
                    padding: "5px",
                  }}
                >
                  <p style={{ color: " rgb(99, 60, 192)" }}>Items Weight</p>
                  <div className="product_weight">
                  <input pattern="[0-9]*" onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, '');
              }}type="text" name="product_weight" id="" />
                  <select
                    id="unit"
                  >
                    <option value="kg">kg</option>
                    <option value="gm">gm</option>
                  </select>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div>
          {images?.length > 0 ? (
            <div className="productDescription">
              <h2>Description</h2>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ManageProduct;

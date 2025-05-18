import React from "react";
import "./manageProduct.css";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
import addProduct from "../../../public/img/addProduct.gif";
import { TbCoinTaka } from "react-icons/tb";
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
                <p style={{ marginTop: "20px", fontSize: "20px" }}>
                  shopping and Delivery
                </p>
                <div
                  style={{
                    border: "1px solid rgb(187, 158, 254)",
                    borderRadius: "8px",
                    padding: "15px",
                  }}
                >
                  <p style={{ color: " rgb(99, 60, 192)" }}>Items Weight</p>
                  <div className="product_weight">
                    <input
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                      }}
                      type="text"
                      name="product_weight"
                      id=""
                      required
                      placeholder="0.0"
                    />
                    <select id="unit">
                      <option value="kg">kg</option>
                      <option value="gm">gm</option>
                    </select>
                  </div>
                  <div style={{ marginTop: "20px", marginBottom: "5px" }}>
                    <p style={{ color: "gray" }}>
                      Package Size (The package you use to ship your product)
                    </p>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div>
                        <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                          Length
                        </p>
                        <div className="product_size">
                          <input
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9.]/g,
                                ""
                              );
                            }}
                            type="text"
                            name="length"
                            id=""
                            placeholder="0.0"
                          />
                          <p>in</p>
                        </div>
                      </div>
                      <div>
                        <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                          Height
                        </p>
                        <div className="product_size">
                          <input
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9.]/g,
                                ""
                              );
                            }}
                            type="text"
                            name="height"
                            id=""
                            placeholder="0.0"
                          />
                          <p>in</p>
                        </div>
                      </div>
                      <div>
                        <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                          Width
                        </p>
                        <div className="product_size">
                          <input
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9.]/g,
                                ""
                              );
                            }}
                            type="text"
                            name="width"
                            id=""
                            placeholder="0.0"
                          />
                          <p>in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ marginTop: "10px", fontSize: "20px" }}>Pricing</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "space-between",
                      border: "1px solid rgb(187, 158, 254)",
                      borderRadius: "8px",
                      padding: "15px",
                    }}
                  >
                    <div className="price_fled">
                      <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                        price
                      </p>
                      <div className="price_main">
                        <TbCoinTaka
                          style={{ color: "rgba(100, 60, 192, 0.62)" }}
                        />
                        <input
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9.]/g,
                              ""
                            );
                          }}
                          type="text"
                          name="main_price"
                          id=""
                          className="product_price_fled"
                        />
                      </div>
                    </div>
                    <div>
                      <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                        Compare at price
                      </p>
                      <div className="price_main">
                        <TbCoinTaka
                          style={{ color: " rgba(100, 60, 192, 0.62)" }}
                        />
                        <input
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9.]/g,
                              ""
                            );
                          }}
                          type="text"
                          name="compare_price"
                          id=""
                          className="product_price_fled"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div style={{ width: "50%" }}>
          {images?.length > 0 ? (
            <div className="productDescription">
              <div>
                <p style={{ fontSize: "20px", marginBottom: "4px" }}>
                  Description
                </p>
                <div className="Description_area">
                  <p>Product Name</p>
                  <input
                    style={{
                      width: "50%",
                      border: "none",
                      backgroundColor: "#eae1ff",
                    }}
                    type="text"
                    name="product_name"
                    placeholder="Item name"
                    id=""
                    required
                  />
                  <p>Item Description</p>
                  <textarea
                    className="product_detail_area"
                    name="product_detail"
                    placeholder="Write here..."
                  ></textarea>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "20px", marginBottom: "4px" }}>
                  Category
                </p>
                <div className="Description_area">
                  <p>Category</p>
                  <select
                    name="category"
                    style={{
                      width: "90%",
                      border: "none",
                      padding: "10px",
                      backgroundColor: "#eae1ff",
                    }}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="footwear">Footwear</option>
                    <option value="kids">Kids</option>
                    <option value="bfwear">B&F Wear</option>
                    <option value="western">Western Wear</option>
                  </select>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "20px", marginBottom: "4px" }}>
                  Inventory
                </p>
                <div className="Description_area">
                  <p>Quantity</p>
                  <input
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9.]/g,"");
                    }}
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "#eae1ff",
                    }}
                    type="text"
                    name="quantity"
                    id=""
                  />
                </div>
              </div>
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

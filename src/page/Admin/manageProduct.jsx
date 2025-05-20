import React, { useState } from "react";
import "./manageProduct.css";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
import addProduct from "../../../public/img/addProduct.gif";
import { TbCoinTaka } from "react-icons/tb";
const ManageProduct = () => {
  const [images, setImages] = useState([]);
  const [formData,setFormData]= useState({
    product_weight:'',
    length:'',
    width:'',
    main_price:'',
    product_name:'',
    category:'',
    quantity:'',
    selling_type:''
  })
  const isFormValue = () =>{
    return(
      formData.product_weight.trim()&&
      formData.length.trim()&&
      formData.width.trim()&&
      formData.main_price.trim()&&
      formData.product_name.trim()&&
      formData.category.trim()&&
      formData.quantity.trim()&&
      formData.selling_type.trim()&&
      images.length > 0
    )
  }
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="manage_product_body">
      <h1>Add New Product</h1>
      <form className="productUpArea">
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
                <div className="upload__image-wrapper">
                  <p
                    style={isDragging ? { color: "red", } : undefined}
                    className="imgSelectBtn"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select your product
                  </p>

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
                  <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                    Items Weight<span style={{ color: "red" }}>*</span>
                  </p>
                  <div className="product_weight">
                    <input
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                      }}
                      onChange={(e)=>setFormData({...formData, product_weight:e.target.value})}
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
                          Length<span style={{ color: "red" }}>*</span>
                        </p>
                        <div className="product_size">
                          <input
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9.]/g,
                                ""
                              );
                            }}
                            onChange={(e)=>setFormData({...formData, length:e.target.value})}
                            type="text"
                            name="length"
                            id=""
                            required
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
                          Width<span style={{ color: "red" }}>*</span>
                        </p>
                        <div className="product_size">
                          <input
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9.]/g,
                                ""
                              );
                            }}
                            onChange={(e)=>setFormData({...formData, width:e.target.value})}
                            type="text"
                            name="width"
                            id=""
                            required
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
                        price<span style={{ color: "red" }}>*</span>
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
                          onChange={(e)=>setFormData({...formData, main_price:e.target.value})}
                          type="text"
                          name="main_price"
                          id=""
                          placeholder="0.0"
                          required
                          className="product_price_fled"
                        />
                      </div>
                    </div>
                    <div>
                      <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                        Compare at price (Optional)
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
                          placeholder="0.0"
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
                  <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                    Product Name<span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    style={{
                      width: "50%",
                      border: "none",
                      backgroundColor: "#eae1ff",
                    }}
                    onChange={(e)=>setFormData({...formData, product_name:e.target.value})}
                    type="text"
                    name="product_name"
                    placeholder="Item name"
                    id=""
                    required
                  />
                  <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                    Item Description<span style={{ color: "red" }}>*</span>
                  </p>
                  <textarea
                    className="product_detail_area"
                    name="product_detail"
                    placeholder="Write here..."
                    required
                  ></textarea>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "20px", marginBottom: "4px" }}>
                  Category
                </p>
                <div className="Description_area">
                  <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                    Category<span style={{ color: "red" }}>*</span>
                  </p>
                  <select
                    name="category"
                    onChange={(e)=>setFormData({...formData, category: e.target.value})}
                    value={formData.category}
                    style={{
                      width: "90%",
                      border: "none",
                      padding: "10px",
                      backgroundColor: "#eae1ff",
                      outline: "none",
                      borderRadius: "5px",
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
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "4px",
                    marginTop: "20px",
                  }}
                >
                  Inventory
                </p>
                <div className="inventory">
                  <div>
                    <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                      Quantity<span style={{color:'red'}}>*</span>
                    </p>
                    <input
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                      }}
                      onChange={(e)=>setFormData({...formData, quantity:e.target.value})}
                      style={{
                        outline: "none",
                        border: "none",
                        backgroundColor: "#eae1ff",
                      }}
                      type="number"
                      name="quantity"
                      placeholder="0"
                      id=""
                      required
                    />
                  </div>
                  <div>
                    <p style={{ color: " rgba(100, 60, 192, 0.62)" }}>
                      SKU(optional)
                    </p>
                    <input
                      style={{
                        outline: "none",
                        border: "none",
                        backgroundColor: "#eae1ff",
                      }}
                      type="text"
                      name="SKU"
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "4px",
                    marginTop: "20px",
                  }}
                >
                  Selling Type<span style={{color:'red'}}>*</span>
                </p>
                <div className="selling_type_fled">
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    <input
                    onChange={(e)=>setFormData({...formData, selling_type: e.target.value})}
                      type="radio"
                      name="selling_type"
                      value="in-store"
                      required
                    />
                    &nbsp; In-store selling only
                  </label>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    <input type="radio" name="selling_type" value="online" />
                    &nbsp; Online selling only
                  </label>
                  <label style={{ display: "block" }}>
                    <input type="radio" name="selling_type" value="both" />
                    &nbsp; Available both in-store and online
                  </label>
                </div>
                <div>
                  <input type="submit" value="Add Product" />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
};
export default ManageProduct;

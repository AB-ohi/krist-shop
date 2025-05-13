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

              <div className="imgArea">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      style={{ width: "200px" }}
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
              {imageList?.length > 0 ? (
                <button className="removeAllImgBtn" onClick={onImageRemoveAll}>
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
        <div>
        {images?.length > 0 ? 
        <div className="productDescription">
            <h2>Description</h2>
        </div> : <div></div>}
        </div>
      </div>
    </div>
  );
};
export default ManageProduct;

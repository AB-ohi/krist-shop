import React from "react";
import "./manageProduct.css";
import ImageUploading from "react-images-uploading";
import { RxCross2 } from "react-icons/rx";
const ManageProduct = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="manage_product_body">
      <h1>Upload product</h1>
      <div>
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
                  <img style={{width:'240px'}} src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageRemove(index)}><RxCross2 style={{paddingTop:'5px'}}/></button>
                  </div>
                </div>
              ))}
              </div>
            {
                imageList?.length > 0?(<button onClick={onImageRemoveAll}>Remove all images</button>):(<div></div>)
            }
              
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};
export default ManageProduct;

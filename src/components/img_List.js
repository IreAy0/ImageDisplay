import React from "react";
import './imglist.css';
import ImageCard from './imageCard'
const imgList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
    );
  
  });
  return <div className="image-list"> {images} </div>;
};
export default imgList;



  // (<div key={image.id} className="ui four cards">

    //     <div className="card">
    //         <div className="image">
    //             <img src={image.urls.small} alt={image.description} />
    //             </div>
    //         <div className="content">
    //             <a href="/" className="header">{image.user.username}</a>

    //             <div className="description">
    //                 {image.description}
    //             </div>
    //         </div>
    //     </div>
    // </div>);
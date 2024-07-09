import React from "react";
import { useDispatch } from "react-redux";
import Heading from "../molecules/Heading";
import { removeItemFromWishlist } from "../../../Redux/slice/wishListSlice"
import "./wishlist.css";

const WishListCard = ({ data }) => {
  const { img, address, projectName, price, id } = data;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItemFromWishlist(id));
  };

  return (
<div className="col-md-12 my-1 d-flex justify-content-center ">
      <div className="row side-bar-main m-0 p-0">
        <div className="col-md-5 col-md-5  side-bar-container">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-7 col-md-7  pt-2 sideInfoContainer">
          <Heading
            text={projectName}
            fontSize="0.75rem"
            color="#E5750F"
            lineHeight="1rem"
            showLine="1"
            className="col-md-12"
          />
          <Heading text={`₹ ${price}`} fontSize="0.75rem" color="#888" />
          <Heading text={address} fontSize="0.75rem" color="#000" />
          <button onClick={handleDelete} className="btn btn-link delete-button">
            <i className="bi bi-trash"></i> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;

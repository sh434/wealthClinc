import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addItemToWishlist, removeItemFromWishlist } from "../../../Redux/slice/wishListSlice";
import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import { formatIndianCurrency } from "../../../helpers/helper";
import fireFlame from "../../../assets/fireFlame.jpg";
import { wishListBtnColorStyle } from "./../../styles/globalStyle";
import styles from "./card.module.css";

import axios from "axios";

const Card = ({ cardData }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);

  const { Project_Name, Min_Price, Max_Price, Address, img, cityName, propertyId } = cardData;
  const minPrice = formatIndianCurrency(Min_Price);
  const maxPrice = formatIndianCurrency(Max_Price);

  const [name, city, type, price, details] = [
    Project_Name,
    cityName,
    "Residential",
    minPrice + " - ₹ " + maxPrice,
    Address,
  ];
  const dispatch = useDispatch();

  const handleWishList = (e) => {
    e.preventDefault();
    if (!isFavourite) {
      dispatch(
        addItemToWishlist({
          id: propertyId,
          img: img,
          price: `${minPrice} - ${maxPrice} `,
          address: Address,
          projectName: Project_Name,
          city: cityName,
        })
      );
    } else {
      dispatch(removeItemFromWishlist(propertyId));
    }
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/ratings`);
        console.log("Rating data:", response.data);
        const ratingsData = response.data.data; 
        if (ratingsData && ratingsData.length > 0) {
          const totalStars = ratingsData.reduce((acc, rating) => acc + rating.attributes.star, 0);
          const averageRating = totalStars / ratingsData.length;
          setRating(averageRating.toFixed(2));
        } else {
          console.warn("No rating data found.");
        }
      } catch (error) {
        console.error("Error fetching the rating", error);
      }
    };

    fetchRating();
  }, [propertyId]);

  
  return (
    <div className={styles.card1}>
      <div className={styles.imgDiv}>
        <div className={styles.favouriteBtn} onClick={handleWishList}>
          {isFavourite ? (
            <FaHeart style={wishListBtnColorStyle} />
          ) : (
            <FaRegHeart style={wishListBtnColorStyle} />
          )}
        </div>
        <img alt="img" src={img} />
        <div className={styles.signatureContainer}>
          <img className={styles.fireFlame} alt="flame" src={fireFlame} />
        </div>
      </div>
      <div
        className="fw-bold d-flex justify-content-between"
        style={{ color: "#212529" }}
      >
        <div className="text-wrap">
          {name} | <span>{city}</span>
        </div>
        <div >
        <i className="bi bi-star c-gray d-none d-md-block"></i>: {rating}
        </div>
      </div>
      <div className="c-gray text-wrap" style={{ color: "#333" }}>
        {details}
      </div>
      <div className="">
        <div className="col-md-5 text-wrap">
          <div className="c-gray" style={{ color: "#333" }}>
            {type}
          </div>
          <div className="fw-bold" style={{ color: "#212529" }}>
            ₹ {price}
          </div>
        </div>
        <div className="col-md-12">
          <ButtonDarkBlue
            name="View More"
            className={styles.propertiesViewMoreBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

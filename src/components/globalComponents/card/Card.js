import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addItemToWishlist, removeItemFromWishlist } from "../../../Redux/slice/wishListSlice";
import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import { formatIndianCurrency } from "../../../helpers/helper";
import fireFlame from "../../../assets/fireFlame.jpg";
import { wishListBtnColorStyle } from "./../../styles/globalStyle";
import styles from "./card.module.css";
import { getFullUrlLocal } from "../../../assets/constants/apiUrls";
import { fetchViewData } from "../../../helpers/FetchView";
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

  // useEffect(() => {
  //   const fetchRating = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:1337/api/ratings`);
  //       const ratingsData = response.data.data;
  //       if (ratingsData && ratingsData.length > 0) {
  //         const totalStars = ratingsData.reduce((acc, rating) => acc + rating.attributes.star, 0);
  //         const averageRating = totalStars / ratingsData.length;
  //         setRating(averageRating.toFixed(2));
  //       } else {
  //         console.warn("No rating data found.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching the rating", error);
  //     }
  //   };

  //   fetchRating();
  // }, [propertyId]);

  const getIPAddress = async () => {
    try {
      // Fetch IP address using axios
      const response = await axios.get('https://api.ipify.org?format=json');
      // Access the IP from response.data
      return response.data.ip;
    } catch (error) {
      console.error("Failed to fetch IP address:", error);
      return null;
    }
  };



  //     if (hasRated) {
  //       toast.error("You have already rated for this property.");
  //       return;
  //     }
  //     const submitRatingResponse = await axios.post("http://localhost:1337/api/ratings", {
  //       data: {
  //         propertyId: propertyId,
  //         star: newRating,
  //         ipAddress: ipAddress,
  //       }
  //     });

  //     console.log("Rating submitted successfully:", submitRatingResponse.data);
  //     setRating(newRating);
  //     setHasRated(true);
  //     toast.success("Rating submitted successfully!");
  //   } catch (error) {
  //     console.error("Error submitting rating:", error);
  //     toast.error("Error submitting rating. Please try again.");
  //   }
  // };
  const handleViewMore = async (projectId) => {
    const ipAddress = await getIPAddress();
    if (!ipAddress) {
      console.error("Unable to fetch IP address");
      return;
    }
  
    try {
      const existingIpAddresses = await fetchViewData(projectId);
      console.log(existingIpAddresses, "Existing IP addresses");
      if (!existingIpAddresses.includes(ipAddress)) {
        existingIpAddresses.push(ipAddress);
        const updatedIpAddressesString = existingIpAddresses.join(',');
        
        const fullUrl = getFullUrlLocal('/api/views');
         await axios.post(fullUrl, {
          data: {
            projectId: String(projectId),
            ipAddress: updatedIpAddressesString,
          },
        });
  
        const viewCount = existingIpAddresses.length;
    
      } else {
        console.log('IP address already exists. Current view count:', existingIpAddresses.length);
      }
    } catch (error) {
      console.error("Failed to update view data:", error.response ? error.response.data : error.message);
    }
  };




  return (
    <div className={styles.card1}>
      <div className={styles.imgDiv} onClick={() => handleViewMore(propertyId)}>
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

          />
        </div>
      </div>
    </div>
  );
};

export default Card;

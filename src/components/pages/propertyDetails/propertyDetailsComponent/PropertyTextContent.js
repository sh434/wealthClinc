import { IoBedOutline } from "react-icons/io5";
import Heading from "../../../globalComponents/molecules/Heading";
import { formatIndianCurrency } from "../../../../helpers/helper";
import { EMPTY_OBJECT } from "../../../../assets/constants/index";
import "./propertyTextContent.css";
import CallBackPopUpForm from "../../../globalComponents/CallBackPopUpForm";
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PropertyTextContent = ({ propertyDetail }) => {
  const { Project_Name, Min_Price, Max_Price, Project_Disclaimer, Address, projectId } = propertyDetail || EMPTY_OBJECT;

  const maxPrice = formatIndianCurrency(Max_Price);
  const minPrice = formatIndianCurrency(Min_Price);

  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const ipAddressResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipAddressResponse.data.ip;
        setIpAddress(ipAddress);

        const ratingResponse = await axios.get(`http://localhost:1337/api/ratings?filters[ipAddress][$eq]=${ipAddress}`);
        if (ratingResponse.data.data.length > 0) {
          const storedRating = parseFloat(localStorage.getItem('rating'));
          setRating(storedRating || ratingResponse.data.data[0].attributes.star);
          setHasRated(true);
        } else {
          setHasRated(false);
        }
      } catch (error) {
        console.error("Error fetching IP address or checking rating:", error);
      }
    };

    fetchIpAddress();
  }, [projectId]);

  useEffect(() => {
    const fetchViewCount = async () => {
        const viewCountResponse = await axios.get(`http://localhost:1337/api/views?filters[projectId][$eq]=${projectId}`);
        const view = viewCountResponse.data?.data[0]?.attributes.view;
        setViewCount(view);
    };
    fetchViewCount();
}, [projectId]);

  useEffect(() => {
    if (hasRated) {
      localStorage.setItem('rating', rating.toString());
    }
  }, [rating, hasRated]);

  const handleRating = async (newRating) => {
    try {
      if (hasRated) {
        toast.error("You have already rated for this property.");
        return;
      }
      const submitRatingResponse = await axios.post("http://localhost:1337/api/ratings", {
        data: {
          propertyId: projectId,
          star: newRating,
          ipAddress: ipAddress,
        }
      });

      console.log("Rating submitted successfully:", submitRatingResponse.data);
      setRating(newRating);
      setHasRated(true);
      toast.success("Rating submitted successfully!");
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("Error submitting rating. Please try again.");
    }
  };

  const handleCallBackPopUpBtn = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 propertyTextContent-container">
      <div className="card-main-head">{Project_Name}</div>

      <p className="card-city-sec-1">
        <IoBedOutline /> {Address}
      </p>

      <p className="card-city-price-1">
        ₹ {minPrice} - ₹ {maxPrice}
      </p>

      <p className="city-details-desc">
        <Heading
          text={Project_Disclaimer}
          color={"444"}
          fontSize=".75rem"
          lineHeight="1.2rem"
          showLine="3"
        />
      </p>

      <div>
        <ReactStars
          count={5}
          value={rating}
          onChange={handleRating}
          size={24}
          activeColor={hasRated ? "#cccccc" : "#ffd700"}
          isHalf={false}
          edit={!hasRated}
        />
      </div>

      <div className="row properties-card-btn-container">
        <button className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 whatsapp-btn ">
          <span className="mx-2 text-white-8">{viewCount} Views</span>
          <i className="bi bi-eye"></i>
        </button>

        <button className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 phone-btn ">
          <span className="mx-2 text-white-8">0 Enquiries</span>
          <i className="bi bi-headphones"></i>
        </button>
        <button className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 phone-btn 2 my-3" onClick={handleCallBackPopUpBtn}>
          <span className="mx-2 text-white-8">Get a call back</span>
          <i className="fa-solid fa-phone-flip"></i>
        </button>
      </div>

      {isOpen && (
        <CallBackPopUpForm isOpen={isOpen} onClose={handleCallBackPopUpBtn} />
      )}

      <ToastContainer />
    </div>
  );
};

export default PropertyTextContent;

import { useDispatch } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../../../Redux/slice/wishListSlice";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { FaRupeeSign, FaHeart } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import CustomLink from "../../../CustomLink";
import Heading from "../../../globalComponents/molecules/Heading";
import CallBackPopUpForm from "../../../globalComponents/CallBackPopUpForm";

// import { IMG_1 } from "../../../../assets/IMG";
import { slugFormat } from "../../../../services/slug";
import { generatePropertyDetailsURL } from "./../../../../helpers/getRedirectUrl";
import { formatIndianCurrency } from "../../../../helpers/helper";
import { wishListBtnColorStyle } from "./../../../styles/globalStyle";
import { shareContent } from "../../../../services/shareContentSlug";
import "react-toastify/dist/ReactToastify.css";
import "./propertyCard.css";

export const PropertyCard = ({ propertyInfo, cityName }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleShareClick = async (URL) => {
    const websiteLink = slugFormat(URL);
    const shareMessage = `Hey 👋,
    \nCheckout this property`;
    const title = "Wealth Clinic";

    await shareContent(title, shareMessage, websiteLink);
  };

  const {
    Slug_Url,
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
  } = propertyInfo?.attributes;
  const img = Image?.data[0]?.attributes?.url;

  const propertyId = propertyInfo?.id;
  const configurations = Project_Configuration.split(" | ");
  const maxPrice = formatIndianCurrency(Max_Price);
  const minPrice = formatIndianCurrency(Min_Price);

  const handleWishList = (e) => {
    e.preventDefault();
    if (!isFavorite) {
      dispatch(
        addItemToWishlist({
          id: propertyId,
          img: img,
          price: `${minPrice} - ${maxPrice} `,
          address: Address,
          projectName: Project_Name,
          city: "Delhi",
        })
      );
      // toast.success("Property Added In WishList");
      // if (!toast.isActive(13, "friendRequest")) {
      //   console.log("first time running");
      //   toast("User does not exist", {
      //     position: "bottom-right",
      //     autoClose: false,
      //     closeOnClick: true,
      //     draggable: false,
      //     type: "error",
      //     toastId: 13,
      //   });
      // }
    } else {
      dispatch(removeItemFromWishlist(propertyId));
      // toast.error("Property Removed From WishList");
    }

    setIsFavorite(!isFavorite);
  };
  const handleCallBackPopUpBtn = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="property-card">
      <CustomLink
        to={generatePropertyDetailsURL(cityName, Slug_Url)}
        state={{ propertyId }}
      >
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="city-image-card h-100 p-0 m-0">
              <img className="card-city-img" src={img} alt="" />
            </div>
          </div>

          <div className="col-lg-7 col-md-7  col-sm-7">
            <div className="card-main-head">
              <span>
                {Project_Name} <RiAttachment2 />
              </span>
              <div className="d-flex">
                <div
                  className="shareIcon mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShareClick(
                      generatePropertyDetailsURL(cityName, Project_Name)
                    );
                  }}
                >
                  <FaRegShareFromSquare />
                </div>
                <div className="wishListIcon" onClick={handleWishList}>
                  {isFavorite ? (
                    <FaHeart style={wishListBtnColorStyle} />
                  ) : (
                    <CiHeart style={wishListBtnColorStyle} />
                  )}
                </div>
              </div>
            </div>
            <p className="card-city-sec-1">
              <IoBedOutline />

              {Address}
            </p>
            <p className="card-city-price-1">
              <FaRupeeSign />
              {minPrice} - {maxPrice}
            </p>
            <hr></hr>
            <div>
              {configurations?.map((item, idx) => (
                <TagBtn key={idx} text={item} />
              ))}
            </div>
            <hr></hr>
            <p className="city-details-desc">
              <Heading
                text={Project_Disclaimer}
                color={"444"}
                fontSize=".75rem"
              />
            </p>

            <div class="row  properties-card-btn-container">
              <button
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 col-2 whatsapp-btn"
                onClick={handleCallBackPopUpBtn}
              >
                <i class="fa-brands fa-whatsapp"></i>
              </button>
              <button class="col-lg-6 col-md-6 col-sm-6 col-xs-7 mx-3  col-6 properties-detail">
                <CustomLink
                  to={generatePropertyDetailsURL(cityName, Project_Name)}
                  state={{ propertyId }}
                >
                  See Full details
                </CustomLink>
              </button>
              <button
                class="col-lg-2 col-md-2 col-sm-2 col-xs-1 col-2 phone-btn"
                onClick={handleCallBackPopUpBtn}
              >
                <i class="fa-solid fa-phone-flip"></i>
              </button>
            </div>
          </div>
        </div>
      </CustomLink>

      {/* <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* srt position of this toaster in middle in bootm side  */}
      {isOpen && (
        <CallBackPopUpForm isOpen={isOpen} onClose={handleCallBackPopUpBtn} />
      )}
    </div>
  );
};

export default PropertyCard;

function TagBtn({ text }) {
  return (
    <button class="btn btn-sm btn-shadow-card btn-tab-font">{text}</button>
  );
}

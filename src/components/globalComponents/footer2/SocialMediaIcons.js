import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { EMPTY_OBJECT } from "../../../assets/constants";
import "./socialMediaIcons.css";

const SocialMediaIcons = () => {
  const url = getFullUrl(API_URL.SOCIAL_MEDIA_ICONS);
  const [socialIcons, error, isLoading] = useApiFetcher(url);
  if (error) <div>{error.message}</div>;
  if (isLoading) <div>Loading....</div>;

  const {
    Facebook_URL = "",
    Instagram_URL = "",
    Twitter_URL = "",
    Linkdin_URL = "",
    YouTube_URL = "",
    WhatsApp_URL = "",
  } = socialIcons?.attributes || EMPTY_OBJECT;

  return (
    <div>
      <Link to={Facebook_URL} className="socialIconsFooter">
        <FaSquareFacebook />
      </Link>
      <Link to={WhatsApp_URL} className="socialIconsFooter">
        <FaWhatsappSquare />
      </Link>
      <Link to={Twitter_URL} className="socialIconsFooter">
        <FaSquareTwitter />
      </Link>
      <Link to={Instagram_URL} className="socialIconsFooter">
        <FaInstagramSquare />
      </Link>
      <Link to={Linkdin_URL} className="socialIconsFooter">
        <FaLinkedin />
      </Link>
      <Link to={YouTube_URL} className="socialIconsFooter">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;

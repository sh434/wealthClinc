import URL, { URL_PARAMS } from "../../../assets/constants/url";
import CustomLink from "../../CustomLink/CustomLink";

const HeaderBtn = (props) => {
  const { className, text } = props;
  return (
    <div style={{ width: "100px !important" }}>
      <CustomLink to={`/${text}`} className={className}>
        {text}
      </CustomLink>
    </div>
  );
};

export default HeaderBtn;

export const FindPropertyDropDownBtn = (props) => {
  const { className, text } = props;
  return (
    <div style={{ width: "100px !important", color: "#fff" }}>
      <CustomLink
        to={`${URL.SEARCH}?${URL_PARAMS.PROPERTY_TYPE}=${text}`}
        className={`${className} del-underLine`}
      >
        {text}
      </CustomLink>
    </div>
  );
};

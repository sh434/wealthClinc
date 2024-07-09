import { useState } from "react";
import HeaderBtn from "../headerBtn/HeaderBtn";

import "../../globalComponents/header/header.css";
import "./dropDown.css";
import "../header/header.css";

const NestedDropDown = ({
  selectType,
  data,
  children,
  styleMenu,
  styleBtn,
  text,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [value, setValue] = useState(text);

  const handleBtn = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleItemClick = (item) => {
    setValue(item);
    setIsDropDownOpen(false);
  };

  return (
    <div className="customDropDown">
      <button
        className="fw-bold d-flex justify-content-between"
        onClick={handleBtn}
        style={styleBtn}
      >
        <span>{value}</span>
        <div>
          <i
            className={`fa fa-chevron-right icon  ${isDropDownOpen && "open"}`}
          ></i>
        </div>
      </button>

      <div
        style={styleMenu}
        className={`${
          isDropDownOpen ? "dropDown-MenuList_active" : "dropDown-MenuList"
        }`}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="MenuItem"
            onClick={() => handleItemClick(item.title)}
          >
            {item?.title}
            {item?.submenu && (
              <NestedDropDown
                data={item.submenu}
                selectType={selectType}
                styleMenu={styleMenu}
                styleBtn={styleBtn}
                text={text}
                children={
                  <HeaderBtn
                    className={"navbar-brand"}
                    style={{
                      border: "8px solid red !important",
                      width: "100%",
                    }}
                  />
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedDropDown;

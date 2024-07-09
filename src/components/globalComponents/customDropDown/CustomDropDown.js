// import { dropDownSlice } from "./../../../Redux/dropDownSlice";
import { cloneElement, useState } from "react";
import "./dropDown.css";

const CustomDropDown = ({
  selectType,
  data,
  children,
  styleMenu,
  styleBtn,
  text,
  isDropDownOpen,
  setIsDropDownOpen,
  dropDownValueKeyName,
  setDropDownValue,
  ...props
}) => {
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [value, setValue] = useState(text);
  const [timeoutId, setTimeoutId] = useState(null);

  // const handleOpenDropDown = () => {
  //   clearTimeout(timeoutId);
  //   setIsDropDownOpen(true);
  // };
  const handleBtn = () => {
    clearTimeout(timeoutId);
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleCloseDropDown = () => {
    if (isDropDownOpen)
      return setTimeoutId(setTimeout(() => setIsDropDownOpen(false), 250));
  };

  return (
    <div
      className="customDropDown"
      onMouseLeave={handleCloseDropDown}
      {...props}
    >
      <button
        className="fw-bold d-flex justify-content-between"
        // onMouseEnter={handleOpenDropDown}
        // onMouseLeave={handleCloseDropDown}
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
        onMouseEnter={() => clearTimeout(timeoutId)}
        // onMouseLeave={handleCloseDropDown}
        style={styleMenu}
        className={`${
          isDropDownOpen ? "dropDown-MenuList_active" : "dropDown-MenuList"
        }`}
      >
        {data?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="MenuItem"
              onClick={
                selectType === "enabled"
                  ? function updateDropDownValue() {
                      return setValue(item);
                    }
                  : () =>
                      setDropDownValue
                        ? getSelectedBtnValue(
                            setDropDownValue,
                            dropDownValueKeyName,
                            item
                          )
                        : null
              }
            >
              {/* {item} */}
              {/* {children?children({data:item}):item} */}
              {children ? cloneElement(children, { text: item }) : item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDropDown;

// -----------------------------------------------------

function delItemFromArr(arrayKey, item) {
  return arrayKey.filter((ele) => ele !== item);
}

function getSelectedBtnValue(setDropDownValue, dropDownValueKeyName, item) {
  const updatePrevState = (prevState) => {
    if (Array.isArray(prevState[dropDownValueKeyName])) {
      const arrayKey = prevState[dropDownValueKeyName];
      const updatedArr = arrayKey.includes(item)
        ? delItemFromArr(arrayKey, item)
        : [...arrayKey, item];

      return {
        ...prevState,
        [dropDownValueKeyName]: updatedArr,
      };
    }

    return { ...prevState, [dropDownValueKeyName]: item };
  };
  return setDropDownValue(updatePrevState);
}

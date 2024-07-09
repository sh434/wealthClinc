import { useState } from "react";
import "./DropDownBtn.css";

const data = [
  { id: 0, label: "Noida" },
  { id: 1, label: "Delhi" },
  { id: 2, label: "New Delhi" },
  { id: 3, label: "Bhopal" },
  { id: 4, label: "Delhi" },
];

const DropdownBtn = (props) => {
  const { text, setOpen, isOpen } = props;
  // const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (ID) => {
    selectedItem === ID ? setSelectedItem(null) : setSelectedItem(ID);
  };

  return (
    <div className="dropdown ">
      <div
        className="dropdown-header py-2 d-flex justify-content-center align-item-center fw-bold "
        onClick={toggleDropdown}
      >
        {selectedItem ? (
          items.find((item) => item.id === selectedItem).label
        ) : (
          <span className="mx-4 text-lg-center">{text}</span>
        )}
        <i className={`fa fa-chevron-right icon  ${isOpen && "open"}`}></i>
      </div>

      <div className={`dropdown-body  ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id === selectedItem && "selected"
              }`}
            ></span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownBtn;

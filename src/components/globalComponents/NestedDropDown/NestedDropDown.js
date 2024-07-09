import React, { useState } from "react";
import "./nestedDropDown.css";

const NestedDropDown = () => {
  return (
    <nav>
      <ul>
        <DropdownItem label="Find Property">
          <DropdownItem label="Residential">
            <DropdownItem label="Metadata" />
            <DropdownItem label="Text Fundamentals" />
            <DropdownItem label="Hyperlinks" />
          </DropdownItem>
          <DropdownItem label="Commercial">
            <DropdownItem label="Metadata" />
            <DropdownItem label="Text Fundamentals" />
            <DropdownItem label="Hyperlinks" />
          </DropdownItem>
        </DropdownItem>
      </ul>
    </nav>
  );
};

export default NestedDropDown;

const DropdownItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <span className="dropdown-label" onClick={toggleDropdown}>
        {label}
      </span>
      {isOpen && <ul>{children}</ul>}
    </li>
  );
};

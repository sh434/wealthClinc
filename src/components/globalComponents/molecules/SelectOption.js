import { useState } from "react";
import styles from "./molecules.module.css";

const SelectOption = ({ id, data, style, className, selectText }) => {
  const [selectOption, setSelectOption] = useState("");

  return (
    <div className={`${styles.customSelect} `}>
      <select
        id={id}
        value={selectOption}
        style={style}
        className={className}
        onChange={(event) => {
          setSelectOption(event.target.value);
        }}
      >
        {selectOption ? selectOption : <option value="">{selectText}</option>}
        {data.map((ele, idx) => (
          <option value={ele} key={idx}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;

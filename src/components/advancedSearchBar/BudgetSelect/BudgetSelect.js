import { useState } from "react";

import { formatIndianCurrency } from "./../../../helpers/helper";
import { BUDGET_OPTIONS } from "../../../assets/constants/budget";
import "./budgetSelect.css";

const BudgetSelect = ({ getBudget: sendBudget }) => {
  const [openBudget, setOpenBudget] = useState(false);
  const [openPriceList, setOpenPriceList] = useState({
    minPriceList: false,
    maxPriceList: false,
  });
  const [selectBudget, setSelectBudget] = useState({
    minBudget: 0,
    maxBudget: 0,
  });

  if (sendBudget) {
    sendBudget(selectBudget);
  }

  const handleCloseBudgetList = () => {
    setTimeout(() => setOpenBudget(false), 300);
  };

  const handleInputField = (e) => {
    const { name, value } = e.target;
    return setSelectBudget({ ...selectBudget, [name]: value });
  };

  const handleSelectBudgetList = (option) =>
    setSelectBudget((prevState) => {
      if (openPriceList.minPriceList) {
        return { ...prevState, minBudget: option };
      }
      if (openPriceList.maxPriceList) {
        return { ...prevState, maxBudget: option };
      }
      return prevState;
    });

  const filteredBudgetOptions = BUDGET_OPTIONS.filter((option) => {
    const { minPriceList, maxPriceList } = openPriceList;
    const { minBudget, maxBudget } = selectBudget;

    // if (maxBudget && minBudget) {
    //   console.log(minBudget, maxBudget);
    //   return option >= minBudget && option <= maxBudget;
    // }
    if (minPriceList && maxBudget) {
      return option < selectBudget.maxBudget;
    }
    if (maxPriceList && minBudget) {
      return option > selectBudget.minBudget;
    }
    return true;
  });

  return (
    <div className="budgetParent" onMouseLeave={handleCloseBudgetList}>
      <div className="budgetBtn" onClick={() => setOpenBudget(!openBudget)}>
        Select Budget
        <div>
          <i
            className={`fa fa-chevron-right icon  ${
              openBudget && "budgetOpen"
            }`}
          ></i>
        </div>
      </div>

      {openBudget && (
        <div className="budgetList">
          <div className="d-flex">
            <input
              autoComplete="off"
              placeholder="Min"
              name="minBudget"
              className="budgetInput"
              value={formatIndianCurrency(selectBudget.minBudget)}
              onChange={handleInputField}
              onClick={() =>
                setOpenPriceList({
                  minPriceList: !openPriceList.minPriceList,
                  maxPriceList: false,
                })
              }
            />

            <input
              autoComplete="off"
              placeholder="Max"
              name="maxBudget"
              className="budgetInput"
              value={formatIndianCurrency(selectBudget.maxBudget)}
              onChange={handleInputField}
              onClick={() =>
                setOpenPriceList({
                  minPriceList: false,
                  maxPriceList: !openPriceList.maxPriceList,
                })
              }
            />
          </div>

          {(openPriceList.minPriceList || openPriceList.maxPriceList) && (
            <div
              className={`budgetPriceList ${
                openPriceList.maxPriceList ? "activeMaxPriceList" : ""
              }`}
            >
              {filteredBudgetOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="budgetPriceBtn"
                  onClick={() => handleSelectBudgetList(option)}
                >
                  {formatIndianCurrency(option)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BudgetSelect;

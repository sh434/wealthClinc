import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";

import TextBg from "../../../globalComponents/molecules/TextBg";
import CareerFormPopUp from "./CareerFormPopUp";

import { SORTED_BY_CAREER } from "../../../../assets/constants/filters";
import { CAREER_POSITIONS } from "./../../../../assets/constants/career";
import "./position.css";

const Position = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({});

  const [isCareerFormOpen, setIsCareerFormOpen] = useState(false);
  const handleJobForm = () => setIsCareerFormOpen(!isCareerFormOpen);

  const filteredPositions =
    filter === SORTED_BY_CAREER.ALL
      ? CAREER_POSITIONS
      : CAREER_POSITIONS.filter((position) => position.title.includes(filter));

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <TextBg text={"JOIN US"} fontWeight={900} fontSize="4rem" />
      <div className="container">
        <div className="row">
          <div className="filterTabs">
            <button onClick={() => setFilter("All")}>All</button>
            <button
              onClick={() =>
                setFilter(SORTED_BY_CAREER.BUSINESS_DEVELOPMENT_EXECUTIVE)
              }
            >
              Business Development Executive
            </button>
            <button
              onClick={() =>
                setFilter(SORTED_BY_CAREER.ASSOCIATE_VICE_PRESIDENT)
              }
            >
              Associate Vice President
            </button>
            <button
              onClick={() =>
                setFilter(SORTED_BY_CAREER.SR_BUSINESS_DEVELOPMENT_EXECUTIVE)
              }
            >
              Sr Business Development Executive
            </button>
            <button
              onClick={() => setFilter(SORTED_BY_CAREER.ASSISTANT_MANAGER)}
            >
              Assistant Manager
            </button>
            <button onClick={() => setFilter(SORTED_BY_CAREER.TELE_CALLER)}>
              Tele Caller
            </button>
          </div>
          <div className="careerFormContainer">
            {filteredPositions.map((position, index) => (
              <div className="col-md-4 misnoryGrid" key={index}>
                <div className="joinUsCard">
                  <p className="positionTitle">{position.title}</p>
                  <p className="positionLocation">
                    <span>
                      <CiLocationOn className="locationIcons" />
                    </span>{" "}
                    {position.location}
                  </p>
                  <ol className="fullPositionDesc">
                    {expanded[index]
                      ? position.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))
                      : position.description
                          .slice(0, 2)
                          .map((desc, idx) => <li key={idx}>{desc}</li>)}
                  </ol>
                  {position.description.length > 2 && (
                    <button
                      className="readMoreButton"
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <div className="setAllButton">
                    <div className="FulltimeStyle">
                      <IoIosTimer /> Full Time
                    </div>

                    <div className="applyButton" onClick={handleJobForm}>
                      Apply <MdOutlineArrowOutward className="ArrowButton" />
                    </div>

                    {isCareerFormOpen && (
                      <CareerFormPopUp
                        isOpen={isCareerFormOpen}
                        onClose={handleJobForm}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;

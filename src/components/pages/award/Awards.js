import React, { useState } from "react";
import useApiFetcher from "../../../hooks/useApiFetcher";
import TextBg from "../../globalComponents/molecules/TextBg";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import "./awardComponents/awardsCard.css";

const url = getFullUrl(`${API_URL.AWARDS}${API_URL.POPULATE}`);


const Awards = () => {
  const [heading, setHeading] = useState('Awards and Recognitions');
  const [activeTab, setActiveTab] = useState("company");

  const [awards, error, isLoading] = useApiFetcher(url);
  console.log(awards, "awards object");

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  // Check if awards exist and extract images safely
  const companyImages = awards?.[0]?.attributes?.Award_Image?.data || []; // Ensure this is an array

  console.log(companyImages, "company images");

  const images = Array.isArray(companyImages)
    ? companyImages.map(image => image.attributes?.url) 
    : []; 
console.log(images,"ggggggggggggg")

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setHeading(tab === 'employee' ? 'Employee Achievements' : 'Company Achievements');
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="tab-class text-center">
          <div className="row g-4 py-4" style={{ justifyContent: "center" }}>
            <div className="col-md-4" style={{ backgroundColor: "rgb(11, 44, 61)" }}>
              <div className={`company-achievement ${activeTab === "company" ? "active" : ""}`} onClick={() => handleTabChange("company")}>
                <span>Company Achievements</span>
              </div>
            </div>

            <div className="col-md-4" style={{ backgroundColor: "rgb(239, 117, 15)", marginLeft: "5px" }}>
              <div className={`company-achievement ${activeTab === "employee" ? "active" : ""}`} onClick={() => handleTabChange("employee")}>
                <span>Employee Achievements</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <TextBg text={heading} fontSize="4.5rem" fontWeight="1000" />
          </div>
          <div className="row g-4 py-5">
            {activeTab === "company" && images.map((url, index) => (
              <div key={index} className="col-md-4">
                <div className="rounded position-relative fruite-item">
                  <div className="fruite-img">
                    <img className="img-fluid w-100 rounded-top" src={url} alt={`Award ${index}`} />
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

export default Awards;





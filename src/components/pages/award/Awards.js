import React, { useState } from "react";
import useApiFetcher from "../../../hooks/useApiFetcher";
import TextBg from "../../globalComponents/molecules/TextBg";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { EMPTY_ARRAY } from "../../../assets/constants";

import "./awardComponents/awardsCard.css";

const Awards = () => {
  const [heading, setHeading] = useState('Awards and Recognitions');
  const [activeTab, setActiveTab] = useState("company");

  const companyUrl = getFullUrl(`${API_URL.AWARDS}${API_URL.POPULATE}`);

  const employeeUrl = getFullUrl(`${API_URL.EMPLOYEE_AWARDS}${API_URL.POPULATE}`);

  const [companyAwards, companyError, companyIsLoading] = useApiFetcher(companyUrl);
  const [employeeAwards, employeeError, employeeIsLoading] = useApiFetcher(employeeUrl);

  // Error handling
  if (companyError) return <div>Error loading company awards: {companyError.message}</div>;
  if (employeeError) return <div>Error loading employee awards: {employeeError.message}</div>;
  if (companyIsLoading || employeeIsLoading) return <div>Loading awards...</div>;

  // Process images
  const companyImages = companyAwards?.flatMap(award => award?.attributes?.Award_Image?.data) || EMPTY_ARRAY;
  const employeeImages = employeeAwards?.flatMap(award => award?.attributes?.Award_Image?.data) || EMPTY_ARRAY;

  const companyImageUrls = companyImages.map(image => `${image.attributes?.url}`);
  const employeeImageUrls = employeeImages.map(image => `${image.attributes?.url}`);

  const displayedImages = activeTab === "company" ? companyImageUrls : employeeImageUrls;

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setHeading(tab === 'employee' ? 'Employee Achievements' : 'Company Achievements');
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="tab-class text-center">
          <div className="row g-4 py-4 justify-content-center">
            <div className="col-md-4" style={{ backgroundColor: "rgb(11, 44, 61)" }}>
              <div
                className={`company-achievement ${activeTab === "company" ? "active" : ""}`}
                onClick={() => handleTabChange("company")}
              >
                <span>Company Achievements</span>
              </div>
            </div>
            <div className="col-md-4" style={{ backgroundColor: "rgb(239, 117, 15)", marginLeft: "5px" }}>
              <div
                className={`company-achievement ${activeTab === "employee" ? "active" : ""}`}
                onClick={() => handleTabChange("employee")}
              >
                <span>Employee Achievements</span>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <TextBg text={heading} fontSize="4.5rem" fontWeight="1000" />
          </div>
          <div className="row g-4 py-5 award-card" style={{ justifyContent: 'center' }}>
            {displayedImages.map((url, index) => (
              <div key={index} className="col-md-3">
                <div className="rounded position-relative award-item">
                  <div className="award-img">
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

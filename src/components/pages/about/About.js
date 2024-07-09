import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";
import AboutWC from "./aboutComponents/AboutWC";
import OurMission from "./aboutComponents/OurMission";
import OurVision from "./aboutComponents/OurVision";
// import NewFourPillars from "./../about/aboutComponents/NewFourPillars";
import OurTeamTitle from "./../ourTeam/ourTeamComponents/OurTeamTitle";
import TeamMembersCard from "./aboutComponents/TeamMembersCard";
import CircularCards from "./aboutComponents/CircularCards";

import useApiFetcher from "../../../hooks/useApiFetcher";
import useDeviceSize from "../../../hooks/useDeviceSize";
import { EMPTY_OBJECT } from "./../../../assets/constants/index";
import { EMPTY_ARRAY } from "../../../assets/constants";
import { getFullUrl, API_URL } from "../../../assets/constants/apiUrls";

const url = getFullUrl(`${API_URL.ABOUT_US}${API_URL.POPULATE}`);

const About = () => {
  const [aboutUs, error, isLoading] = useApiFetcher(url);
  const isMobile = useDeviceSize();

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const {
    Meta_Link = "",
    Meta_Description = "",
    Meta_Title = "",
    AboutUs_Heading = "",
    AboutUs_Description = EMPTY_ARRAY,
    AboutUs_Image,
    Our_Mission_Title = "",
    Our_Mission_Description = EMPTY_ARRAY,
    Our_Mission_Image,
    Our_Vision_Title = "",
    Our_Vision_Description = EMPTY_ARRAY,
    Our_Vision_Image,
  } = aboutUs?.attributes || EMPTY_OBJECT;

  return (
    <div>
      <MetaTagHelmet
        title={Meta_Title}
        description={Meta_Description}
        link={Meta_Link}
      />
      {isMobile ? (
        <div>
          <div className="row p-0 m-0">
            <AboutWC
              data={{ AboutUs_Heading, AboutUs_Description, AboutUs_Image }}
            />
            <OurMission
              data={{
                Our_Mission_Title,
                Our_Mission_Description,
                Our_Mission_Image,
              }}
            />
            <OurVision
              data={{
                Our_Vision_Title,
                Our_Vision_Description,
                Our_Vision_Image,
              }}
            />
            {/* <NewFourPillars /> */}
            <CircularCards />
          </div>
          <div className="container">
            <OurTeamTitle />
            <TeamMembersCard />
          </div>
        </div>
      ) : (
        <div className="about-desktop">
          <div className="container-fluid">
            <div className="row p-0 m-0">
              <AboutWC
                data={{ AboutUs_Heading, AboutUs_Description, AboutUs_Image }}
              />
              <OurMission
                data={{
                  Our_Mission_Title,
                  Our_Mission_Description,
                  Our_Mission_Image,
                }}
              />
              <OurVision
                data={{
                  Our_Vision_Title,
                  Our_Vision_Description,
                  Our_Vision_Image,
                }}
              />
              {/* <NewFourPillars /> */}
              <CircularCards />
            </div>
    
              <div className="container">
                <OurTeamTitle />
                <TeamMembersCard />
          
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default About;

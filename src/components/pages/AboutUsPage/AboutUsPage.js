import TeamMembersCard from "./AboutusComponents/TeamMembersCard";
import FourPillars from "./AboutusComponents/FourPillars";
import AboutSection from "./AboutusComponents/AboutSection";
import TextBg from "../../globalComponents/molecules/TextBg";
const AboutUsPage = () => {
  return (
    <div className="container-fluid">
      <TextBg text={"ABOUT"} fontWeight={900} fontSize="6rem" />
      <AboutSection />
      <FourPillars />
      <div className="container">
        <TeamMembersCard />
      </div>
    </div>
  );
};

export default AboutUsPage;

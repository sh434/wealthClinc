import ReadMore from "../../../globalComponents/molecules/ReadMore";
import Heading from "../../../globalComponents/molecules/Heading";

import useDeviceSize from "../../../../hooks/useDeviceSize";
import "./aboutWC.css";

const AboutWC = ({ data }) => {
  const { AboutUs_Heading, AboutUs_Description, AboutUs_Image } = data;
  const about_Image = AboutUs_Image?.data?.attributes?.url;

  const [title, description, img] = [
    AboutUs_Heading,
    AboutUs_Description,
    about_Image,
  ];

  const isMobile = useDeviceSize();

  const TitleHeading = (
    <Heading
      text={title}
      color={isMobile ? "#ef750f" : "#000"}
      fontWeight="700"
      fontSize={isMobile ? "1rem" : "1.5rem"}
      className="Wc-title"
    />
  );

  return (
    <div>
      {isMobile ? (
        <section className="p-0 m-0">
          <div className="row align-items-center about-mobile">
            <div className="col-12 mb-4">
              {isMobile ? TitleHeading : null}

              <center>
                <img className="Wc-mission img-fluid" alt="" src={img} />
              </center>
            </div>
            <div className="col-12">
              <div className="WcSecBg1 p-3">
                {isMobile ? null : <Heading TitleHeading />}
                <p className="Wcpara">
                  <ReadMore
                    ckEditorDescription={description}
                    lineHeight={isMobile ? "3.5rem" : "6rem"}
                    showLine="5"
                    btnStyle={{
                      color: "#72a081",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 mb-4 mb-md-0">
              <center>
                <img className="Wc-mission img-fluid" alt="" src={img} />
              </center>
            </div>
            <div className="col-md-5 col-12">
              <div className="WcSecBg1 p-3">
                <Heading
                  text={title}
                  color="#000"
                  fontWeight="700"
                  fontSize="36px"
                  className="Wc-title"
                />
                <p className="Wcpara">
                  <ReadMore
                    ckEditorDescription={description}
                    lineHeight={"19.5rem"}
                    showLine="5"
                    btnStyle={{
                      color: "#72a081",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutWC;

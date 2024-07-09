import { IoIosMailOpen } from "react-icons/io";
import { MdWifiCalling2 } from "react-icons/md";

import styles from "./addressCard.module.css";
import Heading from "../../../globalComponents/molecules/Heading";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const AddressCardNew = ({ data }) => {
  // const { name, address, hrPhone, email, enquiryPhone, background } = data;
  const { background } = data;
  const { main_heading, Address, Branch_Name, Contact, HR_Contact, Email } =
    data;

  const [address, name, enquiryPhone, hrPhone, email] = [
    Address,
    Branch_Name,
    Contact,
    HR_Contact,
    Email,
  ];

  const isMobile = useDeviceSize();

  return (
    <div className="col-md-4">
      <div
        className={styles.bgAdd}
        style={{
          background,
        }}
      >
        <Heading
          text={main_heading}
          fontWeight="600"
          fontSize={isMobile ? "1.25rem" : "2rem"}
          lineHeight={isMobile ? "1.75rem" : "2.5rem"}
          color="#EF750F"
          className="center-item"
        />

        <h3 className={styles.mainAddressHeading}>{name}</h3>
        <hr className={styles.borderNow} />
        <p className={styles.fullAddress}>{address}</p>
        {/* <center>
          <img className={styles.addressCardImg} alt="" src={imageUrl} />
        </center> */}
        <p className={styles.addressIconContainer}>
          <span>
            <p>
              <MdWifiCalling2 />{" "}
              <a className={styles.socialIconDeco} href={"tel:" + hrPhone}>
                HR : {hrPhone}
              </a>
            </p>
          </span>
          <span>
            <p>
              <IoIosMailOpen />{" "}
              <a className={styles.socialIconDeco} href={"mailto:" + email}>
                {email}
              </a>
            </p>
          </span>
          <span>
            <p>
              <MdWifiCalling2 />{" "}
              <a className={styles.socialIconDeco} href={"tel:" + enquiryPhone}>
                Enquiry : {enquiryPhone}
              </a>
            </p>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AddressCardNew;

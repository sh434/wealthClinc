import { IoIosMailOpen } from "react-icons/io";
import { MdWifiCalling2 } from "react-icons/md";

import styles from "./addressCard.module.css";

const AddressCard = ({ data }) => {
  const { name, address, imageUrl, hrPhone, email, enquiryPhone, background } =
    data;

  return (
    <div className="col-md-4">
      <div
        className={styles.bgAdd}
        style={{
          background,
        }}
      >
        <h3 className={styles.mainAddressHeading}>{name}</h3>
        <hr className={styles.borderNow} />
        <p className={styles.fullAddress}>{address}</p>
        <center>
          <img className={styles.addressCardImg} alt="" src={imageUrl} />
        </center>
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

export default AddressCard;

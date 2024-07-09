const copyRightStyle = {
  backgroundColor: "#000",
  fontSize: ".75rem",
  color: "#fff",
  border: "2px solid #000",
};

const CopyRightFooter = () => {
  return (
    <div className="" style={copyRightStyle}>
      <p className="gh text-center my-2 pt-1 col-md-12 text-center">
        Copyright 2024 ©{"    "}
        <a
          href="https://www.wealth-clinic.com/"
          className="del-underLine"
          style={{ color: "#ef750f" }}
        >
          Wealth Clinic{"   "}
        </a>
        . All Rights Reserved.
        <a
          className="del-underLine"
          href="https://www.adsrole.com/"
          style={{ color: "#fff", marginLeft: ".25rem" }}
        >
          Powered by AdsRole
        </a>
      </p>
      {/* <p
        className="text-center col-md-12 text-center"
        style={{ color: "#f3753" }}
      >
        <a
          className="del-underLine"
          href="https://www.adsrole.com/"
          style={{ color: "#fff" }}
        >
          Powered by AdsRole
        </a>
      </p> */}
    </div>
  );
};

export default CopyRightFooter;

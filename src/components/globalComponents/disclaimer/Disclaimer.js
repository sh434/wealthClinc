import "./disclaimer.css";

const Disclaimer = ({ onClickPolicy }) => {
  return (
    <div className="disclaimer-popup">
      <div className="disclaimer-content">
        {/* <button className="close-button" onClick={handleClose}>
              X
            </button> */}
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <p>
              This is a Cookies message. Please read and acknowledge before
              continuing.
              {/* Add your disclaimer content here */}
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <button className="acknowledge-button" onClick={onClickPolicy}>
              Accept Cookies
            </button>
          </div>
        </div>
        {/* <h2>Disclaimer</h2> */}
      </div>
    </div>
  );
};

export default Disclaimer;

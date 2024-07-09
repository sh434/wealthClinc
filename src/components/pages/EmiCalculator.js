const EmiCalculator = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                border: "1px solid #FFFFFF",
                width: "100%",
                height: "400px",
                marginTop: "90px",
              }}
            >
              <iframe
                style={{ border: "1px #FFFFFF none" }}
                src="https://emicalculator.net/widget/2.0/test.html"
                title="iFrame"
                width="100%"
                height="100%"
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;

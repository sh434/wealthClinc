import "./popUpMenu.css";
const PopUpMenu = () => {
  return (
    <div
      className="modal fade"
      id="fullMenuModal"
      tabIndex="-1"
      aria-labelledby="fullMenuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-menu">
              <div className="row">
                <div className="container">
                  <div className="col-md-12">
                    <div className="menuCardSec">
                      <p className="menuTags">
                        <a href="/">
                          <span className="menuTextStyle">Home</span>
                        </a>
                      </p>
                      <p className="menuTags">
                        <a href="/">
                          <span className="menuTextStyle">About Us</span>
                        </a>
                      </p>
                      <p className="menuTags">
                        <a href="/">
                          <span className="menuTextStyle">Services</span>
                        </a>
                      </p>
                      <p className="menuTags">
                        <a href="/">
                          <span className="menuTextStyle">Blogs</span>
                        </a>
                      </p>
                      <p className="menuTags">
                        <a href="/">
                          <span className="menuTextStyle">Contact</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMenu;

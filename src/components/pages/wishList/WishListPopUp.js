import { useSelector } from "react-redux";

import WishListCard from "../../globalComponents/WishListCard/WishListCard"

import "./wishlistPopUp.css";

const WishListPopUp = ({ onClose, onMouseLeft, ...props }) => {
  const wishListItem = useSelector((state) => state.wishlist.items);

  return (
    <>
      <div className="wishListPopUp" onMouseLeave={onMouseLeft} {...props}>
        <div className="wishListHeader">
          <span>Shortlisted Projects</span>
          <button onClick={onClose}>X</button>
        </div>

        <div className="px-3 wishListContainer ">
          {wishListItem?.map((wishCard, idx) => {
            return <WishListCard key={idx} data={wishCard} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WishListPopUp;

import PropTypes from "prop-types";

function FriendsListItem({ friendName, imageURL, lastMessage, active }) {
  return (
    <div
      className={`${
        active ? "bg-app_bg" : ""
      } flex flex-row items-center px-3 gap-x-2 text-white py-2`}
    >
      <div className="friend__img__wrapper overflow-hidden w-12 h-12 rounded-full ">
        <img
          src={imageURL}
          alt="Friend image"
          className={"w-full h-full object-contain"}
        />
      </div>
      <div className="friend__info flex flex-col text-white">
        <span className={"text-xl"}>{friendName}</span>
        <span className={"text-sm"}>{lastMessage}</span>
      </div>
    </div>
  );
}

FriendsListItem.propTypes = {
  friendName: PropTypes.string,
  imageURL: PropTypes.string,
  lastMessage: PropTypes.string,
  active: PropTypes.bool,
};
export default FriendsListItem;

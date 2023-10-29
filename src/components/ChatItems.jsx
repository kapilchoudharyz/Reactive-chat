import PropTypes from "prop-types";

function ChatItems({ sent = true, message }) {
  return (
    <div
      className={`w-full flex items-center ${
        sent ? "justify-end" : "justify-start"
      } `}
    >
      <div
        className={`max-w-[80%] min-w-[20%] rounded-3xl  px-3 py-3 ${
          sent ? "bg-btn_bg" : "bg-app_bg"
        }`}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}
ChatItems.propTypes = {
  sent: PropTypes.bool,
  message: PropTypes.string,
};

export default ChatItems;

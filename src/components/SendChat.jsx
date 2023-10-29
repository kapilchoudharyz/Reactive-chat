import { IoSend } from "react-icons/io5";

function SendChat() {
  return (
    <div
      className={
        "h-16 bg-app_bg flex flex-row items-center justify-between py-3 px-3 gap-x-3"
      }
    >
      <input
        type="text"
        placeholder={"Send a message"}
        className={
          "h-10 px-3 py-3 outline-0 w-full rounded-full placeholder:text-stone-600"
        }
      />
      <button className="send__btn__wrapper rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center p-3 focus:outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-blue-700">
        <IoSend style={{ color: "white" }} />
      </button>
    </div>
  );
}

export default SendChat;

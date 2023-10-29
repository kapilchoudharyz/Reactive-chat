import { BsThreeDotsVertical } from "react-icons/bs";

function ChatPageHeader() {
  return (
    <header
      className={
        "bg-app_bg shadow-sm shadow-app_bg px-4 py-3 flex flex-row justify-between items-center gap-x-4"
      }
    >
      <div className={"flex flex-row items-center gap-x-3"}>
        <div className="friend__img__wrapper overflow-hidden w-12 h-12 rounded-full ">
          <img
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Friend image"
            className={"w-full h-full object-contain"}
          />
        </div>
        <div className={"text-white text-lg"}>Kapil Choudhary</div>
      </div>
      <BsThreeDotsVertical style={{ color: "white", fontSize: "2rem" }} />
    </header>
  );
}

export default ChatPageHeader;

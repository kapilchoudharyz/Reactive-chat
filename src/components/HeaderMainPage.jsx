import { HiOutlineSearch } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

function HeaderMainPage() {
  return (
    <header>
      <div className="applogo bg-app_bg shadow-sm shadow-app_bg px-4 py-3 flex flex-row justify-between items-center">
        <div className={"text-sent_chat_col text-[16px] leading-5"}>
          The <br /> Reactive Chat
        </div>
        <div className="home__controls flex flex-row gap-x-6">
          <HiOutlineSearch style={{ color: "#f5e62e", fontSize: "2rem" }} />
          <BsThreeDotsVertical style={{ color: "#f5e62e", fontSize: "2rem" }} />
        </div>
      </div>
    </header>
  );
}

export default HeaderMainPage;

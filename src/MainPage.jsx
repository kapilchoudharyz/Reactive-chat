import HeaderMainPage from "./components/HeaderMainPage.jsx";
import FriendsList from "./components/FriendsList.jsx";

function MainPage() {
  return (
    <section
      className={"flex flex-col h-screen w-full bg-chat_bg text-chat_col  "}
    >
      <HeaderMainPage></HeaderMainPage>
      <FriendsList></FriendsList>
    </section>
  );
}

export default MainPage;

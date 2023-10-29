import ChatPageHeader from "./ChatPageHeader.jsx";
import Chats from "./Chats.jsx";
import SendChat from "./SendChat.jsx";

function ChatPage() {
  return (
    <section className={"flex flex-col h-screen"}>
      <ChatPageHeader></ChatPageHeader>
      <Chats></Chats>
      <SendChat></SendChat>
    </section>
  );
}

export default ChatPage;

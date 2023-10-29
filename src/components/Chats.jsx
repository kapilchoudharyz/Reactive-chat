import ChatItems from "./ChatItems.jsx";

function Chats() {
  return (
    <div
      className={
        "h-full bg-chat_bg flex flex-col gap-y-4 overflow-auto py-3 px-3"
      }
    >
      <ChatItems sent={true} message={"Hello"}></ChatItems>
      <ChatItems sent={false} message={"Hello"}></ChatItems>
      <ChatItems message={"What do you want"}></ChatItems>
      <ChatItems sent={false} message={"Nothing"}></ChatItems>
      <ChatItems message={"bye"}></ChatItems>
      <ChatItems sent={false} message={"bye"}></ChatItems>
    </div>
  );
}

export default Chats;

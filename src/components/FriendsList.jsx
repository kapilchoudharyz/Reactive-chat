import FriendsListItem from "./FriendsListItem.jsx";
import { useState } from "react";

function FriendsList() {
  // eslint-disable-next-line no-unused-vars
  const [activeFriend, setActiveFriend] = useState(0);

  const handleComponentClick = (index) => {
    if (activeFriend !== index) {
      setActiveFriend(index);
    }
  };
  return (
    <section className={" h-[100%] scroll-auto flex flex-col overflow-scroll "}>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
        active={activeFriend === 0}
        onClick={() => {
          handleComponentClick(0);
        }}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
        active={activeFriend === 1}
        onClick={() => {
          handleComponentClick(1);
        }}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
      <FriendsListItem
        friendName={"Nishant Choudhary"}
        imageURL={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        lastMessage={"Hello, How are you"}
      ></FriendsListItem>
    </section>
  );
}

export default FriendsList;

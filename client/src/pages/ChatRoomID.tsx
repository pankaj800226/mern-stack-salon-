import { useState } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";
import CharMesg from "./CharMesg";

const socket = io("http://localhost:8000");
const ChatRoomID = () => {
  const [username, setUserName] = useState<string>("");
  const [room, setRoomID] = useState<string>("");
  const [showChat, setShowChat] = useState(false);

  const handleJoinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      toast.success("Joined room");
      setShowChat(true);
    } else {
      toast.error("Please enter a username and a room");
    }
  };

  return (
    <div className="room_container">
      {!showChat ? (
        <>
          <div>
            <label>Your Name</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <label>Enter Room Id</label>
            <input type="text" onChange={(e) => setRoomID(e.target.value)} />
          </div>
          <button onClick={handleJoinRoom}>Send</button>
        </>
      ) : (
        <CharMesg socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default ChatRoomID;

import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";
import "./App.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState();
  const [username, setUsername] = useState("");

  const socketRef = useRef();
  const messagesEnd = useRef();

  // useEffect(() => {
  //   const fetchUsername = async () => {
  //     try {
  //       const response = await axios.get(`${host}/api/user`); // Thay đổi đường dẫn API để lấy tên người dùng từ MongoDB
  //       setUsername(response.data.username);
  //     } catch (error) {
  //       console.error("Error fetching username:", error);
  //     }
  //   };

  //   fetchUsername();

  //   socketRef.current = socketIOClient.connect(host);

  //   socketRef.current.on("getId", (data) => {
  //     setId(data);
  //   });

  //   socketRef.current.on("sendDataServer", (dataGot) => {
  //     setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
  //     scrollToBottom();
  //   });
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const saveUsername = await AsyncStorage.getItem("username");
        if (saveUsername) {
          setUsername(saveUsername);
        } else {
          console.log("Khong tim thay ten nguoi dung trong AsyncStorage");
        }
      } catch (err) {
        console.log("Loi khi lay ten nguoi dung ", err);
      }
    };

    fetchUsername();

    AsyncStorage.getItem("username").then((storedUsername) => {
      if (storedUsername && !id) {
        // Chỉ gán username khi không có id
        setUsername(storedUsername);
      }
    });
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });

    socketRef.current.on("sendDataServer", (dataGot) => {
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id,
        username: username,
        time: new Date().toLocaleString(),
        status: "sent ",
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${host}/api/chat`);
        setMess(response.data);
        scrollToBottom();
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map((m, index) => (
    <div
      key={index}
      className={`${
        m.username === username ? "your-message" : "other-people"
      } chat-item`}
    >
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  return (
    <div className="box-chat">
      <div className="usernameMSG"> {username}</div>

      <div className="box-chat_message">
        {renderMess}
        <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
      </div>

      <div className="send-box">
        <input
          value={message}
          onKeyDown={onEnterPress}
          onChange={handleChange}
          placeholder="Nhập tin nhắn ..."
        ></input>
        <button className="img" onClick={sendMessage}></button>
      </div>
    </div>
  );
}

export default App;

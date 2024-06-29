import { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
  const [chats, setChats] = useState([])

  // const fetchChats = async () => {
  //   const data = await axios.get("/api/chat");
  //   console.log(data)
  //   console.log('test')
  //   // setChats(data)
  // }

  // useEffect(() => {
  //   fetchChats();
  // }, [])

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/chats')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>hello
     {/* <h1>Data from the Backend:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default ChatPage
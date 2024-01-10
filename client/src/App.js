import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const host = window.location.host;
  console.log(host);
  let serverURL;

  if (host === "localhost:3000") {
    serverURL = "http://localhost:4000";
  } else {
    serverURL = "https://dukefb-server.onrender.com";
  }

  useEffect(() => {
    fetch(serverURL)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [serverURL]);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

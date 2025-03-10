import { useContext, useState } from "react";
import Provider, { dataProvider } from "./Provider";
import "./App.css";

function App() {
  const { status, setStatus } = useContext(dataProvider);
  const [text, setText] = useState("Please log in");
  return (
    <>
      <p>{text}</p>
      <button
        onClick={() => {
          setStatus(status === "Login" ? "Logout" : "Login");
          setText(
            text === "Please log in" ? "Welcome, User!" : "Please log in"
          );
        }}
      >
        {" "}
        {status}
      </button>
    </>
  );
}

export default App;

import "./App.css";
import ProfilePhoto from "./Component/ProfilePhoto"
import FullName from "./Component/FullName"
import Address from "./Component/Address"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">contact</a>
          </li>
        </ul>
      </nav>
      <div className="prof">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;

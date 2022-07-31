import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./Components/Contact_List/Contact_List";
import Login from "./Components/login/login";
import Signup from "./Components/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

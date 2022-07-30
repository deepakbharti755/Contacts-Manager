import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./Components/Contact_List/Contact_List";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

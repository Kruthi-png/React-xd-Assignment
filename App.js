import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="mobile-frame">
      <Router>
        <Routes>
          {/* 1st page */}
          <Route path="/" element={<Welcome />} />

          {/* 2nd page */}
          <Route path="/login" element={<Login />} />

          {/* 3rd page */}
          <Route path="/register" element={<Register />} />

          {/* 4th page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

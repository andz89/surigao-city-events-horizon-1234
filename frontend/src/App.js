import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Profile from "./pages/Profile";
import Private from "./component/Private";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="" element={<Private />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
        ;
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

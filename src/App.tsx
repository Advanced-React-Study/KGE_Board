import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JoinPage from "./pages/join/JoinPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

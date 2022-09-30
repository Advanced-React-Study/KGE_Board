import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JoinPage from "./pages/join/JoinPage";
import ListPage from "./pages/list/ListPage";
import LoginPage from "./pages/login/LoginPage";
import ViewWritingPage from "./pages/viewWritings/ViewWritingPage";
import WritingPage from "./pages/writing/WritingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/viewWritings" element={<ViewWritingPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

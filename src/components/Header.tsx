import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginState } from "../states/loginState";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  box-shadow: 0px 1px 5px 0.5px rgba(0, 0, 0, 0.05);
`;

const Circle = styled.p`
  font-size: 70px;
  margin: 0 0 13px 0;
  color: #ff9e77;
  cursor: pointer;
`;

const IsLoginSign = styled.p`
  color: #8b8b8b;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const onClickLoginSign = () => {
    if (isLogin) {
      alert("Logout");
      setIsLogin(false);
    }
    navigate("/");
  };

  return (
    <Layout>
      <Circle>●</Circle>
      <IsLoginSign onClick={onClickLoginSign}>
        {isLogin ? "LOGOUT" : "LOGIN"}
      </IsLoginSign>
    </Layout>
  );
};

export default Header;

import styled from "styled-components";

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
`;

const Header = () => {
  return (
    <Layout>
      <Circle>●</Circle>
      <IsLoginSign>Login</IsLoginSign>
    </Layout>
  );
};

export default Header;

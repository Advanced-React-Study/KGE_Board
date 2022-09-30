import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Layout = styled.div`
  padding: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ListPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HeaderContainer>
        <Button
          fontColor="white"
          onClick={() => {
            navigate("/writing");
          }}
        >
          Writing
        </Button>
      </HeaderContainer>
    </Layout>
  );
};

export default ListPage;

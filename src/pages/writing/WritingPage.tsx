import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
`;

const MainContainer = styled.div`
  display: flex;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0 0;
`;

const TitleInputWrapper = styled.div`
  & > ${Input} {
    width: 55vw;
  }
`;

const BodyTextArea = styled.textarea`
  width: 55vw;
  height: 300px;
  padding: 16px;
  resize: none;
  outline: none;
  border-radius: 6px;
  border: none;
  font-size: ${(props) => props.theme.fontSize.sm};
  background-color: ${(props) => props.theme.backgroundColor.lightgrey};
`;

const WritingText = styled.p`
  width: 70px;
`;

const WritingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <TitleContainer>
        <WritingText>TITLE</WritingText>
        <TitleInputWrapper>
          <Input />
        </TitleInputWrapper>
      </TitleContainer>

      <MainContainer>
        <WritingText>MAIN</WritingText>
        <BodyTextArea />
      </MainContainer>

      <FooterContainer>
        <Button fontColor="white">UPLOAD</Button>
      </FooterContainer>
    </Layout>
  );
};

export default WritingPage;

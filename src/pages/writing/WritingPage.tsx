import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

const OuterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
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

interface TextsTypes {
  title: string;
  main: string;
}

const WritingPage = () => {
  const navigate = useNavigate();

  const [texts, setTexts] = useState<TextsTypes>({
    title: "",
    main: "",
  });

  const { title, main } = texts;

  const onClickUploadButton = () => {
    console.log(texts);
    navigate("/list");
  };

  const onChangeText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <OuterLayout>
      <InnerLayout>
        <TitleContainer>
          <WritingText>TITLE</WritingText>
          <TitleInputWrapper>
            <Input value={title} name="title" onChange={onChangeText} />
          </TitleInputWrapper>
        </TitleContainer>

        <MainContainer>
          <WritingText>MAIN</WritingText>
          <BodyTextArea value={main} name="main" onChange={onChangeText} />
        </MainContainer>

        <FooterContainer>
          <Button fontColor="white" onClick={onClickUploadButton}>
            UPLOAD
          </Button>
        </FooterContainer>
      </InnerLayout>
    </OuterLayout>
  );
};

export default WritingPage;

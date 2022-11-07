import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postWriting, putWriting } from "../../api/CallingUser";
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

// const TitleTextShowContainer = styled.div`
//   width: 55vw;
//   height: 30px;
//   padding: 0 16px;
// `;

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

// const BodyTextShowContainer = styled.div`
//   width: 55vw;
//   height: 300px;
//   padding: 0 16px;
// `;

const WritingText = styled.p`
  width: 70px;
`;

interface TextsTypes {
  title: string;
  main: string;
}

const ViewWritingPage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state);

  const [texts, setTexts] = useState<TextsTypes>({
    title: state.title,
    main: state.content,
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { title, main } = texts;

  const onClickUploadButton = () => {
    if (title === "" || main === "") {
      alert("Please fill in all itmes");
      return;
    }

    const putWritingAPI = async () => {
      try {
        await putWriting(title, main, state.id);
        alert("Post edit complete");
        navigate("/list");
      } catch (err) {
        alert("error");
      }
    };

    putWritingAPI();
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
            {isEditMode ? (
              <Input value={title} name="title" onChange={onChangeText} />
            ) : (
              <Input
                value={title}
                name="title"
                onChange={onChangeText}
                readOnly
              />
            )}
          </TitleInputWrapper>
        </TitleContainer>

        <MainContainer>
          <WritingText>MAIN</WritingText>
          {isEditMode ? (
            <BodyTextArea value={main} name="main" onChange={onChangeText} />
          ) : (
            <BodyTextArea
              value={main}
              name="main"
              onChange={onChangeText}
              readOnly
            />
          )}
        </MainContainer>

        <FooterContainer>
          {isEditMode ? (
            <Button fontColor="white" onClick={onClickUploadButton}>
              UPLOAD
            </Button>
          ) : (
            <Button fontColor="white" onClick={() => setIsEditMode(true)}>
              EDIT
            </Button>
          )}
        </FooterContainer>
      </InnerLayout>
    </OuterLayout>
  );
};

export default ViewWritingPage;

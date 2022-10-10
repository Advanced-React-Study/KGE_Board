import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

const OuterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerLayout = styled.div`
  border: ${(props) => `1.5px solid ${props.theme.backgroundColor.lightgrey}`};
  border-radius: 6px;
  padding: 50px;
  margin: 100px 0 0 0;
`;

const InputsContainer = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;

const JoinButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0 0;
`;

const IDPWText = styled.p`
  width: 90px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  & > ${Input} {
    width: 220px;
  }
`;

const JoinPage = () => {
  const navigate = useNavigate();

  return (
    <OuterLayout>
      <InnerLayout>
        <InputsContainer>
          <IDPWText>NICKNAME</IDPWText>
          <InputWrapper>
            <Input />
          </InputWrapper>
        </InputsContainer>

        <InputsContainer>
          <IDPWText>ID</IDPWText>
          <InputWrapper>
            <Input />
          </InputWrapper>
        </InputsContainer>

        <InputsContainer>
          <IDPWText>PASSWORD</IDPWText>
          <InputWrapper>
            <Input />
          </InputWrapper>
        </InputsContainer>

        <JoinButtonContainer>
          <Button fontColor="white" hoverColor="orange">
            JOIN
          </Button>
        </JoinButtonContainer>
      </InnerLayout>
    </OuterLayout>
  );
};

export default JoinPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { memberList } from "../join/MemberList";

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

const SignupTextContainer = styled.div``;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0 0;
`;

const IDPWText = styled.p`
  width: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const SignUpText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.hoverColor.grey};
  text-decoration: underline;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  & > ${Input} {
    width: 220px;
  }
`;

interface InputsInterface {
  id: string;
  pw: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<InputsInterface>({ id: "", pw: "" });

  const { id, pw } = inputs;

  const onClickLoginButton = () => {
    memberList.map((item, index) => {
      if (item.id === id && item.pw === pw) alert("Login Success");
    });

    // 로그인 성공한 경우
    navigate("/list");
  };

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <OuterLayout>
      <InnerLayout>
        <InputsContainer>
          <IDPWText>ID</IDPWText>
          <InputWrapper>
            <Input name="id" value={id} onChange={onChangeInputs} />
          </InputWrapper>
        </InputsContainer>

        <InputsContainer>
          <IDPWText>PW</IDPWText>
          <InputWrapper>
            <Input name="pw" value={pw} onChange={onChangeInputs} />
          </InputWrapper>
        </InputsContainer>

        <SignupTextContainer>
          <SignUpText onClick={() => navigate("/join")}>Sign Up</SignUpText>
        </SignupTextContainer>

        <LoginButtonContainer>
          <Button
            fontColor="white"
            hoverColor="orange"
            onClick={onClickLoginButton}
          >
            LOGIN
          </Button>
        </LoginButtonContainer>
      </InnerLayout>
    </OuterLayout>
  );
};

export default LoginPage;

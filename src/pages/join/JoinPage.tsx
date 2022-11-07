import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postJoin } from "../../api/CallingUser";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { memberList } from "./MemberList";

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

interface UserInfoTypes {
  nickName: string;
  id: string;
  pw: string;
}

const JoinPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoTypes>({
    nickName: "",
    id: "",
    pw: "",
  });

  const { nickName, id, pw } = userInfo;

  // useCallback, useMemo 차이
  // useCallback -> 메모이제이션된 '함수'를 반환
  // useMemo -> 메모이제이션된 '값'을 반환

  const onClickJoinButton = () => {
    if (nickName === "" || id === "" || pw === "") {
      alert("Please fill in all items");
      return;
    }

    const postJoinAPI = async () => {
      try {
        await postJoin(id, pw, nickName);
        navigate("/");
      } catch (err) {
        alert("error");
      }
    };

    postJoinAPI();
  };

  const onChangeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <OuterLayout>
      <InnerLayout>
        <InputsContainer>
          <IDPWText>NICKNAME</IDPWText>
          <InputWrapper>
            <Input
              value={nickName}
              name="nickName"
              onChange={onChangeUserInfo}
            />
          </InputWrapper>
        </InputsContainer>

        <InputsContainer>
          <IDPWText>ID</IDPWText>
          <InputWrapper>
            <Input value={id} name="id" onChange={onChangeUserInfo} />
          </InputWrapper>
        </InputsContainer>

        <InputsContainer>
          <IDPWText>PASSWORD</IDPWText>
          <InputWrapper>
            <Input value={pw} name="pw" onChange={onChangeUserInfo} />
          </InputWrapper>
        </InputsContainer>

        <JoinButtonContainer>
          <Button
            fontColor="white"
            hoverColor="orange"
            onClick={onClickJoinButton}
          >
            JOIN
          </Button>
        </JoinButtonContainer>
      </InnerLayout>
    </OuterLayout>
  );
};

export default JoinPage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getList, getWriting } from "../../api/CallingUser";
import Button from "../../components/Button";

const Layout = styled.div`
  padding: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const EachContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: ${(props) =>
    `1px solid ${props.theme.backgroundColor.lightgrey}`};
  cursor: pointer;
`;

interface ListItemTypes {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

const ListPage = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<[]>([]);

  const onClickList = (id: string) => {
    const getWritingAPI = async (id: string) => {
      try {
        const response = await getWriting(id);
        navigate("/viewWritings", {
          state: {
            title: response.title,
            content: response.content,
            id: response.id,
          },
        });
      } catch (err) {
        alert("error");
      }
    };

    getWritingAPI(id);
  };

  const getListAPI = async () => {
    try {
      const response = await getList();
      setListData(response);
    } catch (err) {
      alert("error");
    }
  };

  useEffect(() => {
    getListAPI();
  }, []);

  return (
    <Layout>
      <HeaderContainer>
        <Button
          fontColor="white"
          onClick={() => {
            navigate("/writing");
          }}
        >
          WRITING
        </Button>
      </HeaderContainer>
      <ContentContainer>
        {listData.map((item: ListItemTypes) => (
          <EachContentContainer
            key={item.id}
            onClick={() => onClickList(item.id)}
          >
            <div>{item.title}</div>
            <div>{item.createdAt.slice(0, 10)}</div>
          </EachContentContainer>
        ))}
      </ContentContainer>
    </Layout>
  );
};

export default ListPage;

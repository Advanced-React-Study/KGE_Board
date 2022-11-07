import instance from "./core";

// 로그인 post
export const postLogin = async (id: string, pw: string) => {
  await instance.post("/user/login", {
    id,
    password: pw,
  });
};

// 회원가입 post
export const postJoin = async (id: string, pw: string, nickName: string) => {
  await instance.post("/user/register", {
    id,
    password: pw,
    name: nickName,
  });
};

// 게시글 등록 post
export const postWriting = async (title: string, main: string) => {
  await instance.post("/board", {
    title,
    content: main,
  });
};

// 전체 게시글 get
export const getList = async () => {
  const response = await instance.get("/board");
  return response.data.boards;
};

// 특정 게시글 get
export const getWriting = async (id: string) => {
  const response = await instance.get(`/board/${id}`);
  return response.data.board;
};

// 게시글 수정 put
export const putWriting = async (title: string, main: string, id: string) => {
  await instance.put(`/board/${id}`, {
    title,
    content: main,
  });
};

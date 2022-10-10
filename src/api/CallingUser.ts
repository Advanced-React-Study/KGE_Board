import instance from "./core";

export const postJoin = async (id: string, pw: string, nickName: string) => {
  await instance.post("/user/register", {});
};

export const postLogin = async () => {
  await instance.post("/user/login", {});
};

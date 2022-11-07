import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// 상태관리 라이브러리 특성상 새로고침하면 저장소에 저장된 상태가 삭제됨
// 이를 해결하기 위해 Recoil-persist 사용
const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

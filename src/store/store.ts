import { create } from "zustand";

interface SignUpFormStore {
  datas: string[];
  addDatas: (data: string) => void;
  clearDatas: () => void;
}

export const useSignUpFormStore = create<SignUpFormStore>((set) => ({
  datas: [],
  addDatas: (data) => set((state) => ({ datas: [...state.datas, data] })),
  clearDatas: () => set({ datas: [] }),
}));

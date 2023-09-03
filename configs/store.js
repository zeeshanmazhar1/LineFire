import create from 'zustand';

const useStore = create((set) => ({
  register: {
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
  setRegisterForm: (form) => set((state) => ({ register: form })),
  setLoginForm: (form) => set((state) => ({ login: form })),
}));

export default useStore;

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      name: 'Marklius',
      age: 63,
      email: 'marklius@gmail.com',
      height: 140,
      hair: true,
    },
  },
  reducers: {
    // state holds current info about state
    // action has payload key with data which was passed by
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {
        name: '',
        age: 0,
        email: '',
        height: 0,
        hair: false,
      };
    },
    updateHair: (state) => {
      state.value.hair = !state.value.hair;
    },
    changeName: (state, action) => {
      state.value.name = action.payload;
    },
  },
});

export const { login, logout, updateHair, changeName } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state,action) => {
      state.app = action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const seletChannelId = state => state.app.channelId;
export const seletChannelName = state => state.app.channelName;

export default appSlice.reducer;

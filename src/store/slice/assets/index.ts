import {createSlice} from "@reduxjs/toolkit";
import {getFavoriteAssets, getTopPriceData} from "../../thunks/assets";

const initialState: any = {
  assets: [],
  favoriteAssets: []
}

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload);
    })
    builder.addCase(getTopPriceData.fulfilled, (state, action) => {
      state.assets = action.payload;
    })
  }
})

export default assetsSlice.reducer;

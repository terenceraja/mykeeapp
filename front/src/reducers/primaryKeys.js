import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { idCrtaPTF: null, IdLigne: null },
};

export const keysSlice = createSlice({
  name: "keys",

  initialState,
  reducers: {
    addIdCrtaPTFToStore: (state, action) => {
      state.value.idCrtaPTF = action.payload;
    },

    addIdLigneToStore: (state, action) => {
      state.value.IdLigne = action.payload;
    },
  },
});

export const { addIdCrtaPTFToStore, addIdLigneToStore } = keysSlice.actions;
export default keysSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { IdCtraCli: null, IdCrtaPTF: null, IdLigne: null },
};

export const keysSlice = createSlice({
  name: "keys",

  initialState,
  reducers: {
    addIdCtraCliToStore: (state, action) => {
      state.value.IdCtraCli = action.payload;
    },
    addIdCtraPtfToStore: (state, action) => {
      state.value.IdCrtaPTF = action.payload;
    },

    addIdLigneToStore: (state, action) => {
      state.value.IdLigne = action.payload;
    },
  },
});

export const { addIdCtraPtfToStore, addIdLigneToStore, addIdCtraCliToStore } =
  keysSlice.actions;
export default keysSlice.reducer;

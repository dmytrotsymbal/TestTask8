import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [
      {
        id: new Date().toISOString(),
        title: "Title",
        description: "Description",
        complited: false,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        complited: false,
      });
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    completeItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          complited: !item.complited,
        };
      });
    },
  },
});

export const { addItem, deleteItem, completeItem } = itemSlice.actions;
export default itemSlice.reducer;

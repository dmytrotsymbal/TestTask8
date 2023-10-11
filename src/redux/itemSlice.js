import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [
      {
        id: new Date().toISOString(),
        title: "test1",
        description: "test1",
        complited: false,
      },
      {
        id: new Date().toISOString(),
        title: "test2",
        description: "test2",
        complited: true,
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

    changeItem: (state, action) => {
      const { id, title, description } = action.payload;
      const itemToChange = state.items.find((item) => item.id === id);

      if (itemToChange) {
        itemToChange.title = title;
        itemToChange.description = description;
      }
    },
  },
});

export const { addItem, deleteItem, completeItem, changeItem } =
  itemSlice.actions;
export default itemSlice.reducer;

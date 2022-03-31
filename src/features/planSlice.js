import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    plan: "",
  },
  reducers: {
    subscribed: (state, action) => {
      console.log({ action });
      state.plan = action.payload;
    },
  },
});

export const { subscribed } = planSlice.actions;

export const selectPlan = (state) => state.plan.plan;

export default planSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    doctor_name: "",
    interaction_type: "",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    materials: "",
    samples: "",
    sentiment: "",
    outcome: "",
    follow_up: "",
    summary: "",
  },
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },

    setFormData: (state, action) => {
      state.formData = action.payload;
    },

    resetForm: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const {
  updateField,
  setFormData,
  resetForm,
} = interactionSlice.actions;

export default interactionSlice.reducer;
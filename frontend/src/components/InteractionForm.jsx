import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  Alert,
  TextField,
  Typography,
} from "@mui/material";

import api from "../services/api";

import {
  updateField,
  resetForm,
} from "../store/interactionSlice";

import { useState } from "react";

function InteractionForm() {
  const dispatch = useDispatch();

  const formData = useSelector(
    (state) => state.interaction.formData
  );

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    dispatch(
      updateField({
        field: event.target.name,
        value: event.target.value,
      })
    );
  };

  const handleSubmit = async () => {
    try {
      await api.post("/interaction", formData);

      setSuccess(true);

      dispatch(resetForm());

    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <Box>

      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Log HCP Interaction
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Doctor Name"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Meeting Type"
            name="interaction_type"
            value={formData.interaction_type}
            onChange={handleChange}
          >
            <MenuItem value="Meeting">Meeting</MenuItem>
            <MenuItem value="Call">Call</MenuItem>
            <MenuItem value="Video Call">Video Call</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="time"
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            label="Attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={3}
            fullWidth
            label="Topics Discussed"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Materials Shared"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Samples Distributed"
            name="samples"
            value={formData.samples}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Sentiment"
            name="sentiment"
            value={formData.sentiment}
            onChange={handleChange}
          >
            <MenuItem value="Positive">Positive</MenuItem>
            <MenuItem value="Neutral">Neutral</MenuItem>
            <MenuItem value="Negative">Negative</MenuItem>
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Outcome"
            name="outcome"
            value={formData.outcome}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Follow Up"
            name="follow_up"
            value={formData.follow_up}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            multiline
            rows={3}
            fullWidth
            label="AI Summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Save Interaction
          </Button>
        </Grid>

      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">
          Interaction Saved Successfully
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
      >
        <Alert severity="error">
          Unable to save interaction
        </Alert>
      </Snackbar>

    </Box>
  );
}

export default InteractionForm;
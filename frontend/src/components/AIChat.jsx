import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import axios from "axios";

import { setFormData } from "../store/interactionSlice";

function AIChat() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const generateInteraction = async () => {
    if (!text.trim()) {
      alert("Please enter an interaction.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/ai/process",
        {
          text: text,
        }
      );

      console.log("AI Response:", response.data);

      // Store AI response in Redux
      dispatch(setFormData(response.data));

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        AI Assistant
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={2}
      >
        Describe your interaction naturally.
      </Typography>

      <TextField
        multiline
        rows={18}
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Example:

Met Dr Sharma today.

Discussed CardioX.

Doctor liked efficacy.

Shared brochure.

Requested samples.

Follow-up next Tuesday.`}
      />

      <Box mt={2}>
        <Button
          fullWidth
          variant="contained"
          onClick={generateInteraction}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Interaction"}
        </Button>
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">
          AI generated interaction successfully.
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
      >
        <Alert severity="error">
          Failed to generate interaction.
        </Alert>
      </Snackbar>
    </>
  );
}

export default AIChat;
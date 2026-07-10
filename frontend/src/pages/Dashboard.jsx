import { Container, Grid, Paper } from "@mui/material";
import Header from "../components/Header";
import InteractionForm from "../components/InteractionForm";
import AIChat from "../components/AIChat";

function Dashboard() {
  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>

          {/* Left Side - Interaction Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
              }}
            >
              <InteractionForm />
            </Paper>
          </Grid>

          {/* Right Side - AI Assistant */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                height: "100%",
                minHeight: "850px",
              }}
            >
              <AIChat />
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
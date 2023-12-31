import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

export default function Login() {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <Container maxWidth="sm">
        <Box textAlign="center" component="form">
          <Typography
            color={grey["700"]}
            fontWeight={700}
            variant="h5"
            gutterBottom
          >
            Login
          </Typography>
        </Box>
        <Stack p={2} spacing={2}>
          <TextField
            autoFocus
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            label="Email"
            size="small"
          />
          <TextField
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            label="Password"
            size="small"
          />
          <Button type="submit" variant="contained" disableElevation>
            Log in
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

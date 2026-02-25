import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          Coming Soon 🚀
        </Typography>

        <Typography color="text.secondary">
          This feature is under development.
        </Typography>

        <Link href="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back to Home</Button>
        </Link>
      </Stack>
    </Box>
  );
}

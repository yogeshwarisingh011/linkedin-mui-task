import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function FooterLinks() {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ fontSize: "12px" }}
          >
            Help Center | About | Privacy Policy
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ fontSize: "12px" }}
          >
            Community Guidelines | Cookies Policy
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ fontSize: "12px" }}
          >
            Career | Language | Copyright Policy
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "12px" }}
          >
            © Copyright 2026
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

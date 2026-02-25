import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function FooterLinks() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Typography variant="body2" color="text.secondary" align="center">
            Help Center | About | Privacy Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            Community Guidelines | Cookies Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            Career | Language | Copyright Policy
          </Typography>

          <Typography variant="body2" color="text.secondary">
            © Copyright 2026
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

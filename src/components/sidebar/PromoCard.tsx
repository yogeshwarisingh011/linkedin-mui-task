import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Button,
  Avatar,
} from "@mui/material";

export default function PromoCard() {
  return (
    <Card elevation={3}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar
            src="https://i.pravatar.cc/150"
            sx={{ width: 60, height: 60 }}
          />

          <Typography variant="h6" align="center">
            Track Time on Workwise
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            Pay only for the Hours worked
          </Typography>
        </Stack>
      </CardContent>

      <Divider />

      <Stack spacing={1} alignItems="center" py={2}>
        <Button variant="text">SIGN UP</Button>
        <Button variant="text">Learn More</Button>
      </Stack>
    </Card>
  );
}

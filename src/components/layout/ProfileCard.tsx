import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <Card elevation={3}>
      <Box
        sx={{
          height: 120,
          bgcolor: "primary.main",
        }}
      />

      <CardContent>
        <Stack spacing={1} alignItems="center" sx={{ mt: -8 }}>
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            sx={{
              width: 80,
              height: 80,
            }}
          />

          <Typography variant="h6">John Doe</Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            Graphic Designer at Self Employed
          </Typography>
        </Stack>
      </CardContent>

      <Divider />

      <Box textAlign="center" py={2}>
        <Typography variant="body2" color="text.secondary">
          Following
        </Typography>
        <Typography variant="h6">34</Typography>
      </Box>

      <Divider />

      <Box textAlign="center" py={2}>
        <Typography variant="body2" color="text.secondary">
          Followers
        </Typography>
        <Typography variant="h6">155</Typography>
      </Box>

      <Divider />

      <Box textAlign="center" py={2}>
        <Link href="/profile">
          <Button>View Profile</Button>
        </Link>
      </Box>
    </Card>
  );
}

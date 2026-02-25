import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
  Divider,
  Box,
} from "@mui/material";

type Props = {
  name: string;
  logo: string;
};

export default function CompanyCard({ name, logo }: Props) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar src={logo} sx={{ width: 70, height: 70 }} />

          <Typography variant="subtitle1">{name}</Typography>

          <Typography variant="body2" color="text.secondary">
            Establish Feb, 2004
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button variant="contained">Follow</Button>
            <Button variant="outlined">Message</Button>
          </Stack>
        </Stack>
      </CardContent>

      <Divider />

      <Box textAlign="center" py={2}>
        <Button>View Profile</Button>
      </Box>
    </Card>
  );
}

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

export default function PostCard() {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title="John Doe"
        subheader="Software Engineer"
      />

      <CardContent>
        <Typography variant="body1">
          This is a sample LinkedIn post using Material UI components.
        </Typography>
      </CardContent>
    </Card>
  );
}

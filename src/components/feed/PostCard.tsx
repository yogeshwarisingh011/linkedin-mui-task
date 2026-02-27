import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

export default function PostCard() {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardHeader
        avatar={<Avatar>Y</Avatar>}
        title="Yogeshwari Singh"
        subheader="Frontend Developer at XYZ Company"
      />

      <CardContent>
        <Typography variant="body1">
          This is a sample LinkedIn post using Material UI components.
        </Typography>
      </CardContent>
    </Card>
  );
}

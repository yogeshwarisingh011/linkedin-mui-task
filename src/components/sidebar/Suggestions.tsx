import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

const users = [
  { name: "Jessica William", role: "Graphic Designer" },
  { name: "John Doe", role: "PHP Developer" },
  { name: "Poonam", role: "Wordpress Developer" },
  { name: "Bill Gates", role: "C & C++ Developer" },
  { name: "Jessica William", role: "Graphic Designer" },
  { name: "John Doe", role: "PHP Developer" },
];

export default function Suggestions() {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardHeader
        title="People you may know"
        titleTypographyProps={{
          fontSize: 16,
          fontWeight: 600,
        }}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <Divider />

      <CardContent>
        <Stack spacing={2}>
          {users.map((user, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                <Stack>
                  <Typography variant="subtitle2">{user.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.role}
                  </Typography>
                </Stack>
              </Stack>

              <IconButton
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "primary.main",
                  borderRadius: 5,
                  color: "primary.main",
                  p: "4px",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          ))}

          <Button variant="text">View More</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

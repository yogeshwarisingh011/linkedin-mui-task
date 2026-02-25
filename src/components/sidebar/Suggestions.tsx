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
    <Card elevation={3}>
      <CardHeader
        title="Suggestions"
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

              <IconButton>
                <AddIcon />
              </IconButton>
            </Stack>
          ))}

          <Button variant="text">View More</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

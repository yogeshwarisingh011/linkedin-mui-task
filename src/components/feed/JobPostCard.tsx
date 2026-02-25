import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

type Props = {
  name: string;
  role: string;
  time: string;
  title: string;
  price: string;
  description: string;
  skills: string[];
};

export default function JobPostCard({
  name,
  role,
  time,
  title,
  price,
  description,
  skills,
}: Props) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src="https://i.pravatar.cc/150" />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={`${role} • ${time}`}
      />

      <CardContent>
        <Stack spacing={2}>
          <Typography variant="subtitle1">{title}</Typography>

          <Stack direction="row" spacing={2}>
            <Chip label="Full Time" />
            <Typography variant="subtitle2">{price}</Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </Stack>

          <Divider />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <FavoriteBorderIcon fontSize="small" />
                <Typography variant="body2">Like</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <ChatBubbleOutlineIcon fontSize="small" />
                <Typography variant="body2">Comment</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <VisibilityIcon fontSize="small" />
              <Typography variant="body2">Views</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

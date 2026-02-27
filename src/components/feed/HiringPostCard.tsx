"use client";

import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Button,
  Divider,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  name: string;
  role: string;
  time: string;
  description: string;
  image: string;
};

export default function HiringPostCard({
  name,
  role,
  time,
  description,
  image,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar src="/dummy-user.jpg" />

            <Stack spacing={0.3}>
              <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
                {name}
              </Typography>

              <Typography sx={{ fontSize: 13 }} color="text.secondary">
                {role} • {time}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            {isMobile ? (
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
                    color: "#fff",
                  },
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 5,
                  px: 2,
                }}
              >
                + Follow
              </Button>
            )}

            <IconButton size="small">
              <BookmarkBorderIcon fontSize="small" />
            </IconButton>

            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Box mt={2}>
          <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
            #Hiring for SpaceX
          </Typography>

          <Typography
            sx={{ fontSize: 14, lineHeight: 1.5 }}
            color="text.secondary"
          >
            {description}
          </Typography>
        </Box>
      </CardContent>

      <Box
        component="img"
        src={image}
        alt="post"
        sx={{
          width: "100%",
          height: 380,
          objectFit: "cover",
        }}
      />

      <CardContent>
        {/* Stats */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: 13 }} color="text.secondary">
            👍❤️👏 1,842
          </Typography>

          <Typography sx={{ fontSize: 13 }} color="text.secondary">
            13 comments • 9 reposts
          </Typography>
        </Stack>

        <Divider sx={{ my: 1.5 }} />

        <Stack direction="row" justifyContent="space-around">
          <Button
            startIcon={<ThumbUpOffAltIcon />}
            sx={{ textTransform: "none", color: "text.secondary" }}
          >
            Like
          </Button>

          <Button
            startIcon={<ChatBubbleOutlineIcon />}
            sx={{ textTransform: "none", color: "text.secondary" }}
          >
            Comment
          </Button>

          <Button
            startIcon={<RepeatIcon />}
            sx={{ textTransform: "none", color: "text.secondary" }}
          >
            Repost
          </Button>

          <Button
            startIcon={<SendIcon />}
            sx={{ textTransform: "none", color: "text.secondary" }}
          >
            Send
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

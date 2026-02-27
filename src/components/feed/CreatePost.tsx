"use client";

import {
  Card,
  CardContent,
  Avatar,
  Stack,
  Box,
  Typography,
  Button,
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";

export default function CreatePost() {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
        border: "1px solid #fdf9f9",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src="/images/dummy-user.jpg" />

            <Box
              sx={{
                flex: 1,
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: 10,
                px: 3,
                py: 1.5,
                cursor: "pointer",
              }}
            >
              <Typography color="text.secondary" fontWeight={500}>
                Start a post
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
            <Button startIcon={<VideocamIcon sx={{ color: "#2e7d32" }} />}>
              Video
            </Button>

            <Button startIcon={<ImageIcon sx={{ color: "#1565c0" }} />}>
              Photo
            </Button>

            <Button startIcon={<ArticleIcon sx={{ color: "#b71c1c" }} />}>
              Write article
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

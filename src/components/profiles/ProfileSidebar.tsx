import {
  Card,
  Box,
  Avatar,
  Typography,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import BrushIcon from "@mui/icons-material/Brush";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Suggestions from "../sidebar/Suggestions";

export default function ProfileSidebar() {
  const links = [
    { icon: <LanguageIcon />, text: "www.example.com" },
    { icon: <FacebookIcon />, text: "facebook.com/john" },
    { icon: <TwitterIcon />, text: "twitter.com/john" },
    { icon: <GoogleIcon />, text: "googleplus.com/john" },
    { icon: <BrushIcon />, text: "behance.com/john" },
    { icon: <PinterestIcon />, text: "pinterest.com/john" },
    { icon: <InstagramIcon />, text: "instagram.com/john" },
    { icon: <YouTubeIcon />, text: "youtube.com/john" },
  ];

  return (
    <>
      <Card>
        <Box
          sx={{
            height: 120,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Stack alignItems="center" sx={{ mt: -6 }}>
          <Avatar src="/dummy-user.jpg" sx={{ width: 120, height: 120 }} />
        </Stack>

        <Stack direction="row" justifyContent="space-around" sx={{ py: 2 }}>
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Following
            </Typography>
            <Typography variant="h6">34</Typography>
          </Box>

          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Followers
            </Typography>
            <Typography variant="h6">155</Typography>
          </Box>
        </Stack>

        <Divider />

        <List>
          {links.map((item, index) => (
            <Box key={index}>
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Card>
      <Box mt={3}>
        <Suggestions />
      </Box>
    </>
  );
}

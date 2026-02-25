"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Stack,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";

export default function Navbar() {
  type MenuItem = {
    text: string;
    icon: React.ReactNode;
    href: string;
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { text: "Home", icon: <HomeIcon />, href: "/" },
    { text: "Companies", icon: <BusinessIcon />, href: "/companies" },
    { text: "Projects", icon: <WorkIcon />, href: "/coming-soon" },
    { text: "Profiles", icon: <PeopleIcon />, href: "/companies" },
    { text: "Jobs", icon: <WorkIcon />, href: "/companies" },
    { text: "Messages", icon: <MailIcon />, href: "/coming-soon" },
    { text: "Notification", icon: <NotificationsIcon />, href: "/companies" },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {isMobile && (
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography variant="h6">W</Typography>

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "background.paper",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                <InputBase placeholder="Search..." />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Box>
            )}
          </Stack>

          {!isMobile && (
            <Stack direction="row" spacing={3} alignItems="center">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Stack alignItems="center">
                    {item.icon}
                    <Typography variant="caption">{item.text}</Typography>
                  </Stack>
                </Link>
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar src="https://i.pravatar.cc/150" />
            {!isMobile && <Typography variant="body2">John</Typography>}
          </Stack>
        </Toolbar>
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.paper",
              px: 2,
              py: 1,
            }}
          >
            <InputBase placeholder="Search..." sx={{ flex: 1 }} />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        )}
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

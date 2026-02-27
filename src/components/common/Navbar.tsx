"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Stack,
  Badge,
  Button,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "Profile", icon: <PersonIcon />, href: "/profile" },
    { label: "Jobs", icon: <WorkIcon />, href: "/jobs" },
    { label: "My Network", icon: <GroupsIcon />, href: "/network" },
    {
      label: "Notification",
      icon: (
        <Badge badgeContent={99} color="error">
          <NotificationsIcon />
        </Badge>
      ),
      href: "/notifications",
    },
    {
      label: "Messages",
      icon: (
        <Badge badgeContent={2} color="error">
          <MailIcon />
        </Badge>
      ),
      href: "/messages",
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #8c8c8c33",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo */}
            <Box
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.main",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="white" fontWeight={700}>
                in
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "action.hover",
                px: 2,
                py: 0.5,
                borderRadius: 2,
                width: { xs: "100%", md: 280 },
              }}
            >
              <SearchIcon fontSize="small" />
              <InputBase
                placeholder="Find people and companies..."
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>
          </Stack>

          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              {menu.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Stack
                      alignItems="center"
                      spacing={0.5}
                      sx={{
                        color: active ? "primary.main" : "text.secondary",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {item.icon}
                      <Typography variant="caption">{item.label}</Typography>
                    </Stack>
                  </Link>
                );
              })}
            </Stack>
          )}

          {!isMobile && (
            <Stack direction="row" spacing={2} alignItems="center">
              <Divider orientation="vertical" flexItem />

              <Stack alignItems="center" spacing={0.5}>
                <AppsIcon />
                <Typography variant="caption">For work</Typography>
              </Stack>

              <Button variant="outlined" size="small">
                Try Premium for free
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }}>
          <List>
            {menu.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(false)}
                >
                  <ListItemButton selected={active}>
                    <ListItemIcon
                      sx={{
                        color: active ? "primary.main" : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: active ? 600 : 400,
                        color: active ? "primary.main" : "inherit",
                      }}
                    />
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

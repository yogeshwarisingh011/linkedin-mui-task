"use client";

import {
  Card,
  Avatar,
  Typography,
  Stack,
  Box,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function ProfileCard() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
          borderRadius: "12px",
          p: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" spacing={2} alignItems="start">
            <Avatar
              src="/dummy-user.jpg"
              sx={{
                width: 56,
                height: 56,
                boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
              }}
            />

            <Box>
              <Typography fontWeight={600}>Yogeshwari Singh</Typography>
              <Typography variant="body2" color="text.secondary">
                Frontend Developer
              </Typography>
            </Box>
          </Stack>

          <IconButton onClick={() => setOpen(!open)}>
            <KeyboardArrowDownIcon
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </IconButton>
        </Stack>

        <Collapse in={open}>
          <Divider sx={{ my: 2 }} />

          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle2" fontWeight={600}>
                Previous Company
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Google • 2021 — Present
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" fontWeight={600}>
                Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                4 Years Product Design Experience
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
                Skills
              </Typography>

              <Typography variant="body2" color="text.secondary">
                React | Next.JS | Tailwind CSS | Redux | Web Development | Figma
              </Typography>
            </Box>
          </Stack>
        </Collapse>
      </Card>
    </>
  );
}

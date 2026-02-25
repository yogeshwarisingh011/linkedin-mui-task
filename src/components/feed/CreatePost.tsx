"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Post a Project");

  const handleOpen = (type: string) => {
    setTitle(type);
    setOpen(true);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar src="https://i.pravatar.cc/150" />

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => handleOpen("Post a Project")}
              >
                Post a Project
              </Button>

              <Button
                variant="contained"
                onClick={() => handleOpen("Post a Job")}
              >
                Post a Job
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            position: "relative",
          }}
        >
          {title}

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "inherit",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField fullWidth label="Title" />
            <TextField fullWidth label="Category" />
            <TextField fullWidth label="Skills" />

            <Stack direction="row" spacing={2}>
              <TextField fullWidth label="Min Price" />
              <TextField fullWidth label="Max Price" />
            </Stack>

            <TextField fullWidth label="Description" multiline rows={4} />

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="contained">Post</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

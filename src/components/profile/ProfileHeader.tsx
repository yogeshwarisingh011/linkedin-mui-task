import { Box } from "@mui/material";

export default function ProfileHeader() {
  return (
    <Box>
      <Box
        sx={{
          height: 250,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}

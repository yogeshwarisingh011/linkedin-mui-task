import { Box, Typography, Stack, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProfileInfoHeader() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600}>
        Yogeshwari Singh
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
        mt={1}
      >
        <Typography variant="body1" color="text.secondary">
          Frontend Developer | Freelancer
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarBorderIcon color="success" />
        </Stack>

        <Link href="#" underline="hover">
          Status
        </Link>
      </Stack>
    </Box>
  );
}

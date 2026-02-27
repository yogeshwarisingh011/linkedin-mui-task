import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const jobs = [
  "Senior Product Designer",
  "Senior UI / UX Designer",
  "Junior Seo Designer",
  "Senior PHP Designer",
  "Senior Developer Designer",
];

export default function TopJobs() {
  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardHeader
        title="Top Jobs"
        titleTypographyProps={{
          fontSize: 16,
          fontWeight: 600,
        }}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <Divider />

      <CardContent>
        <Stack spacing={2}>
          {jobs.map((job, index) => (
            <Stack key={index} spacing={0.5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle2" fontWeight={600}>
                  {job}
                </Typography>

                <Typography variant="subtitle2">$25/hr</Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

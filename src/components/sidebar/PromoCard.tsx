import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpeedIcon from "@mui/icons-material/Speed";

export default function PromoCard() {
  const items = [
    {
      icon: <StarBorderIcon color="action" />,
      label: "Hire Feed",
      isNew: true,
    },
    {
      icon: <LightbulbOutlinedIcon color="action" />,
      label: "Marketplace",
    },
    {
      icon: <AccessTimeIcon color="action" />,
      label: "Time Capsule",
    },
    {
      icon: <SpeedIcon color="action" />,
      label: "Resume Scoring",
    },
  ];

  return (
    <Card
      sx={{
        boxShadow: "0px 0px 0px 1px rgb(140 140 140 / 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" fontWeight={600}>
              The Must-Try Zone
            </Typography>

            <Chip label="New" size="small" color="primary" />
          </Stack>

          <Stack spacing={2}>
            {items.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                {item.icon}

                <Typography color="text.secondary">{item.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

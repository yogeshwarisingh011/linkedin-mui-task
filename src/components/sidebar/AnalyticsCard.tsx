"use client";

import { Card, CardContent, Stack, Typography, Divider } from "@mui/material";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

export default function AnalyticsCard() {
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
            <Stack direction="row" spacing={2} alignItems="center">
              <RemoveRedEyeOutlinedIcon color="action" />
              <Typography color="text.secondary">Profile viewer</Typography>
            </Stack>

            <Typography color="primary" fontWeight={600}>
              58
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" spacing={2} alignItems="center">
            <BarChartOutlinedIcon color="action" />
            <Typography color="text.secondary">View all analytics</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

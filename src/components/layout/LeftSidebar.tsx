import { Stack } from "@mui/material";
import Suggestions from "../sidebar/Suggestions";
import ProfileCard from "../sidebar/ProfileCard";
import AnalyticsCard from "../sidebar/AnalyticsCard";

export default function Sidebar() {
  return (
    <Stack spacing={2}>
      <ProfileCard />
      <AnalyticsCard />
      <Suggestions />
    </Stack>
  );
}

import { Stack } from "@mui/material";
import Suggestions from "../sidebar/Suggestions";
import FooterLinks from "../sidebar/FooterLinks";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  return (
    <Stack spacing={2}>
      <ProfileCard />
      <Suggestions />
      <FooterLinks />
    </Stack>
  );
}

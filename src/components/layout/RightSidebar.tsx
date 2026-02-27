import { Stack } from "@mui/material";
import PromoCard from "../sidebar/PromoCard";
import TopJobs from "../sidebar/TopJobs";
import FooterLinks from "../common/FooterLinks";

export default function RightSidebar() {
  return (
    <Stack spacing={2}>
      <PromoCard />
      <TopJobs />
      <FooterLinks />
    </Stack>
  );
}

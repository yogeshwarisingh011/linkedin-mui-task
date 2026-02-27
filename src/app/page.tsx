import CenterFeed from "@/components/layout/CenterFeed";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3, paddingBottom: "15rem" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <LeftSidebar />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <CenterFeed />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

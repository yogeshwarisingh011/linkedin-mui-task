import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Portfolio from "@/components/profilecomponent/Portfolio";

import ProfileInfoHeader from "@/components/profilecomponent/ProfileInfoHeader";
import PostCard from "@/components/feed/PostCard";
import HiringPostCard from "@/components/feed/HiringPostCard";
import ProfileSidebar from "@/components/profilecomponent/ProfileSidebar";

export default function ProfilePage() {
  const hiringPosts = [
    {
      name: "Elon Musk",
      role: "CEO of SpaceX",
      time: "36m ago",
      description:
        "At SpaceX, we don't just dream about the future — we build it. We're looking for the boldest engineers, designers, coders, and thinkers to join our mission.",
      image: "/images/hiring-img2.webp",
    },
    {
      name: "Satya Nadella",
      role: "CEO of Microsoft",
      time: "1h ago",
      description:
        "Microsoft is hiring passionate developers and designers to shape the future of AI and cloud computing. Join us and make an impact globally.",
      image: "/images/hiring-img.webp",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <ProfileSidebar />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <ProfileInfoHeader />
              </Grid>
              <Grid size={12}>
                <PostCard />
              </Grid>
              <Grid size={12}>
                {hiringPosts.map((post, index) => (
                  <Box key={index} mt={2}>
                    <HiringPostCard {...post} />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Portfolio />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

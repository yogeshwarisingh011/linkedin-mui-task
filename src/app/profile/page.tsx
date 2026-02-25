import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSection from "@/components/profile/ProfileInfoHeader";
import Portfolio from "@/components/profile/Portfolio";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileInfoHeader from "@/components/profile/ProfileInfoHeader";
import PostCard from "@/components/feed/PostCard";
import JobPostCard from "@/components/feed/JobPostCard";

export default function ProfilePage() {
  const posts = [
    {
      name: "John Doe",
      role: "Epic Coder",
      time: "3 min ago",
      title: "Senior Wordpress Developer",
      price: "$30 / hr",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      skills: ["HTML", "PHP", "CSS", "Javascript", "Wordpress"],
    },
    {
      name: "Jessica William",
      role: "UI Designer",
      time: "10 min ago",
      title: "Senior UI/UX Designer",
      price: "$25 / hr",
      description:
        "Aliquam luctus hendrerit metus, ut ullamcorper quam finibus.",
      skills: ["Figma", "UX", "Research", "Prototyping"],
    },
    {
      name: "Bill Gates",
      role: "Software Engineer",
      time: "1 hr ago",
      title: "Full Stack Developer",
      price: "$40 / hr",
      description: "Etiam id magna sit amet purus consequat tempor.",
      skills: ["React", "Node", "MongoDB", "API"],
    },
  ];
  return (
    <>
      <ProfileHeader />

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
                {posts.map((post, index) => (
                  <Box key={index} mt={2}>
                    <JobPostCard {...post} />
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

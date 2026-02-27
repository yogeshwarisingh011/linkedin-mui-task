import { Box, Stack } from "@mui/material";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import HiringPostCard from "./HiringPostCard";

const hiringPosts = [
  {
    name: "Elon Musk",
    role: "CEO of SpaceX",
    time: "36m ago",
    description:
      "At SpaceX, we don't just dream about the future — we build it. We're looking for the boldest engineers, designers, coders, and thinkers to join our mission.",
    image: "/hiring-img2.webp",
  },
  {
    name: "Satya Nadella",
    role: "CEO of Microsoft",
    time: "1h ago",
    description:
      "Microsoft is hiring passionate developers and designers to shape the future of AI and cloud computing. Join us and make an impact globally.",
    image: "/hiring-img.webp",
  },
];
export default function Feed() {
  return (
    <Stack spacing={2}>
      <CreatePost />
      <PostCard />
      {hiringPosts.map((post, index) => (
        <Box key={index} mt={2}>
          <HiringPostCard {...post} />
        </Box>
      ))}
    </Stack>
  );
}

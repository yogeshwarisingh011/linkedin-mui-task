import { Stack } from "@mui/material";
import CreatePost from "./CreatePost";
import JobPostCard from "./JobPostCard";
import PostCard from "./PostCard";

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
    description: "Aliquam luctus hendrerit metus, ut ullamcorper quam finibus.",
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

export default function Feed() {
  return (
    <Stack spacing={2}>
      <CreatePost />
      <PostCard />
      {posts.map((post, index) => (
        <JobPostCard key={index} {...post} />
      ))}
    </Stack>
  );
}

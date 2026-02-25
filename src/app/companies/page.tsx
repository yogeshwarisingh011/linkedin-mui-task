import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CompanyCard from "@/app/companies/CompanyCard";

const companies = [
  { name: "Facebook Inc.", logo: "/company-logo.png" },
  { name: "Google Inc.", logo: "/company-logo.png" },
  { name: "Pinterest", logo: "/company-logo.png" },
  { name: "Microsoft Inc.", logo: "/company-logo.png" },
  { name: "Line Inc.", logo: "/company-logo.png" },
  { name: "LinkedIn", logo: "/company-logo.png" },
  { name: "Apple Inc.", logo: "/company-logo.png" },
  { name: "Samsung Inc.", logo: "/company-logo.png" },
];

export default function CompaniesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 3, paddingBottom: "15rem" }}>
      <Box
        sx={{
          p: 2,
          mb: 3,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6">All Companies</Typography>
      </Box>

      <Grid container spacing={2}>
        {companies.map((company, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <CompanyCard {...company} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

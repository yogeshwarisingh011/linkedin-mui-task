import { Card, CardContent, Grid } from "@mui/material";

export default function Portfolio() {
  const items = Array.from({ length: 9 });

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          {items.map((_, i) => (
            <Grid size={{ xs: 4 }} key={i}>
              <img
                src={`https://picsum.photos/100?random=${i}`}
                style={{ width: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

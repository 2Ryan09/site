import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Container maxWidth="lg">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Hello :)
            </Typography>
            <Link href="/playground/chaser" color="secondary">
              Playground
            </Link>
            <br />
            <p>- RAW</p>
          </Box>
        </Container>
      </div>
    </main>
  );
}

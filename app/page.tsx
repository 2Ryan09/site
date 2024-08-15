import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <Image
            src="https://avatars.githubusercontent.com/u/22386684?v=4"
            alt="Vercel Logo"
            width={300}
            height={300}
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="h1" sx={{ mb: 2 }}>
            Ryan Allyn Waldheim
          </Typography>
        </Box>
      </Container>
    </main>
  );
}

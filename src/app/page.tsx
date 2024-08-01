import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "next/image";

import PlaygroundLink from "@/components/links";

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
            <Image
              src="https://avatars.githubusercontent.com/u/22386684?v=4"
              alt="Vercel Logo"
              width={100}
              height={100}
            />
            <PlaygroundLink />
            <br />
            <p>- RAW</p>
          </Box>
        </Container>
      </div>
    </main>
  );
}

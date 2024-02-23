// import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { fetchTopTracks } from "./api/fetchers";
import Tracks from "@/components/Tracks";

export default async function Index() {
  const tracks = await fetchTopTracks({ limit: 50 });

  return (
    // <NextUIProvider>
    <main className="dark text-foreground bg-background">
      <Header />
      <Search />
      <Tracks tracks={tracks} header="top tracks" />
    </main>
    // </NextUIProvider>
  );
}

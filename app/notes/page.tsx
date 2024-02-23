"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { fetchTopTracks } from "../api/fetchers";
import TrackListContainer from "../../components/Tracks";

export default async function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const supabase = createClient();
  const tracks = await fetchTopTracks({ limit: 50 });

  return (
    <>
      <div className="App">
        <TrackListContainer tracks={tracks} header="top tracks" />
      </div>
    </>
  );
}

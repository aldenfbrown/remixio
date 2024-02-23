"use client";
import { useState } from "react";
import { fetchTopTracks } from "../api/fetchers";
import TrackListContainer from "../../components/Tracks";

export default async function Tracks() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const tracks = await fetchTopTracks({ limit: 50 });

  return <TrackListContainer tracks={tracks} header="top tracks" />;
}

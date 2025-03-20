"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the SpotifyPreview component to ensure it only loads on the client
const SpotifyPreview = dynamic(() => import("./SpotifyPreview"), {
  ssr: false,
});

export default function ClientSpotify() {
  return <SpotifyPreview artistId="4qRI7BqjuKH3ulYQrEYnLa" />;
}

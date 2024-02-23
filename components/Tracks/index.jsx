"use client";

import React from "react";
import TrackListItem from "./item";

const TrackListContainer = ({ header, tracks }) => {
  return (
    <div className="track-list-container">
      {!!header && <h2>{header}</h2>}

      <ul>
        {tracks.map((track, index) => (
          <TrackListItem
            key={track.id}
            index={index}
            playlist={tracks}
            track={track}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrackListContainer;

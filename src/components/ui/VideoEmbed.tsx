"use client";

import { useState } from "react";

interface VideoEmbedProps {
  id: string;
  title?: string;
}

/**
 * Click-to-load YouTube facade. Shows the thumbnail + a play button and only
 * loads the (privacy-enhanced) iframe on click — keeps the page fast and
 * avoids loading YouTube on every visit.
 */
export default function VideoEmbed({ id, title = "Watch the video" }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden border-t-2 border-acid bg-ink shadow-2xl shadow-black/40 ring-1 ring-steel/20">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={title}
          className="group absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
        >
          <span className="absolute inset-0 bg-ink/55 transition-colors group-hover:bg-ink/40" />
          <span className="relative flex h-full items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-acid text-ink transition-transform group-hover:scale-110">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

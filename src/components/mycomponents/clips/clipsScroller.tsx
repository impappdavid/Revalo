import { Slider } from "@/components/ui/slider";
import { Heart, Volume, VolumeX } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const clips = [
  { id: 1, type: "video", src: "/test.mp4", likes: 1356, comments: 12, views: 10000, username: "Revalo", tags: ["foryou", "motivational", "lockin"] },
  { id: 2, type: "image", src: "/logo.png", likes: 13200, comments: 45, views: 18000, username: "Revalo", tags: ["foryou", "socialmedia", "clips"] },
];

// Helper function to get initial clip index from URL query
function getInitialClipIndex() {
  if (typeof window === "undefined") return 0;
  const params = new URLSearchParams(window.location.search);
  const clipParam = params.get("clip");
  if (!clipParam) return 0;
  const idx = clips.findIndex((clip) => clip.id.toString() === clipParam);
  return idx >= 0 ? idx : 0;
}

export default function ClipScroller() {
  // Initialize current clip index from URL on first render
  const [current, setCurrent] = useState(getInitialClipIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Volume state (0 to 1)
  const [volume, setVolume] = useState(0.3);
  // Mute state
  const [isMuted, setIsMuted] = useState(false);
  // Show slider only on hover
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Handle wheel scroll to switch clips
  function onWheel(e: React.WheelEvent) {
    if (e.deltaY > 10) {
      setCurrent((prev) => Math.min(prev + 1, clips.length - 1));
    } else if (e.deltaY < -10) {
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
  }

  // Toggle play/pause for current video
  function togglePlayPause() {
    const video = videoRefs.current[current];
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  }

  // Sync isPlaying state with video playing/paused events
  useEffect(() => {
    const video = videoRefs.current[current];
    if (!video) return;

    function handlePlay() {
      setIsPlaying(true);
    }
    function handlePause() {
      setIsPlaying(false);
    }

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [current]);

  // Pause all videos except current; Autoplay current
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.muted = isMuted;
        video.volume = volume;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
    // Removed setIsPlaying(false) here to prevent pause icon on volume change
  }, [current, isMuted, volume]);

  // Update video volume and mute state when changed or current clip changes
  useEffect(() => {
    const video = videoRefs.current[current];
    if (!video) return;
    video.muted = isMuted;
    video.volume = volume;
  }, [current, isMuted, volume]);

  // Toggle mute/unmute button
  function toggleMute() {
    if (isMuted) {
      setIsMuted(false);
      if (volume === 0) setVolume(0.3);
    } else {
      setIsMuted(true);
    }
  }

  const currentClip = clips[current];

  if (!currentClip) {
    return (
      <div className="flex items-center justify-center h-[900px] bg-black text-white text-lg">
        Clip not found!
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      className="w-full h-[900px] overflow-hidden relative rounded-lg bg-black"
    >
      {/* Volume control top-left */}
      <div
        className="absolute top-4 left-4 flex items-center justify-center gap-2 p-1 bg-opacity-40 rounded-full cursor-pointer z-50"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <button onClick={toggleMute} aria-label="Toggle Mute">
          {isMuted || volume === 0 ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume className="w-6 h-6 text-white" />
          )}
        </button>
        {showVolumeSlider && (
          <div className="w-24">
            <Slider
              max={1}
              step={0.01}
              value={isMuted ? [0] : [volume]}
              onValueChange={(val: number[]) => {
                const newVol = val[0];
                setVolume(newVol);
                setIsMuted(newVol === 0);
              }}
              aria-label="Volume"
            />
          </div>
        )}
      </div>

      {/* Clips */}
      {clips.map((clip, i) => (
        <div
          key={clip.id}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(${(i - current) * 100}%)` }}
        >
          {clip.type === "video" ? (
            <div className="relative w-full h-full">
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={clip.src}
                className="w-full h-full object-cover"
                playsInline
                preload="auto"
                muted={isMuted}
              />
              <button
                onClick={togglePlayPause}
                className={`absolute inset-0 flex items-center justify-center text-white bg-opacity-100 hover:bg-opacity-40 transition-opacity ${
                  isPlaying ? "bg-transparent" : "bg-black/20"
                }`}
              >
                {isPlaying && current === i ? (
                  <div></div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-20 h-20 fill-zinc-200/80"
                  >
                    <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                  </svg>
                )}
              </button>
            </div>
          ) : (
            <img
              src={clip.src}
              alt={`clip-${clip.id}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Likes, comments, views */}
      <div className="absolute bottom-24 right-4 flex flex-col gap-3 text-zinc-300">
        <div className="flex flex-col items-center group cursor-pointer">
          <img src="/logo.png" alt="" className="h-10 w-10 rounded-full" />
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="p-2 group-hover:bg-zinc-500/20 rounded-full transition-all duration-200 group-hover:text-red-500">
            <Heart className="w-7 h-7" />
          </div>
          <div className="text-xs">{currentClip.likes}</div>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="p-2 group-hover:bg-zinc-500/20 rounded-full transition-all duration-200 fill-zinc-300 group-hover:fill-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M3 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 7.04 21 8.16 21 10.4v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 18 16.84 18 14.6 18H7.414a1 1 0 0 0-.707.293l-2 2c-.63.63-1.707.184-1.707-.707zM9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs">{currentClip.comments}</div>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="p-2 group-hover:bg-zinc-500/20 rounded-full transition-all duration-200 stroke-zinc-300 group-hover:stroke-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 17.98V9.709c0-3.634 0-5.45 1.172-6.58S8.229 2 12 2s5.657 0 6.828 1.129C20 4.257 20 6.074 20 9.708v8.273c0 2.306 0 3.459-.773 3.871c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C4 21.44 4 20.287 4 17.981"
              />
            </svg>
          </div>
          <div className="text-xs">{currentClip.views}</div>
        </div>
      </div>

      {/* Username and tags */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <div className="text-lg font-medium hover:underline text-white cursor-pointer">{currentClip.username}</div>
        <div className="flex gap-1">
          {currentClip.tags.map((item, index) => (
            <div key={index} className="px-2 py-1 bg-zinc-500/20 backdrop-blur-2xl rounded-lg text-xs text-zinc-300 cursor-pointer">{item}</div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-1">
        <div className="h-12 w-12 bg-white rounded-full"></div>
      </div>
    </div>
  );
}

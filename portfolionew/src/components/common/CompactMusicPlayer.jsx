import { Play, Pause } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

export default function CompactMusicPlayer() {
  const { isPlaying, togglePlay } = useMusic();
  const label = isPlaying ? "Pause music" : "Play music";

  return (
    <div className="group relative flex items-center">
      <button
        onClick={togglePlay}
        className="interactive-icon relative flex h-11 w-11 items-center justify-center rounded-sm border border-transparent text-foreground hover:border-gray-200 hover:bg-button-hover hover:text-accent dark:hover:border-white/10 md:h-10 md:w-10"
        aria-label={label}
      >
        {isPlaying ? (
          <Pause className="h-[18px] w-[18px] md:h-4 md:w-4" />
        ) : (
          <Play className="ml-0.5 h-[18px] w-[18px] md:h-4 md:w-4" />
        )}

        {/* Playing indicator */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" />
        )}
      </button>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
        {label}
      </span>

      {/* Audio is managed globally by MusicContext */}
    </div>
  );
}

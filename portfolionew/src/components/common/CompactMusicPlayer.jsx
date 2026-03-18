import { Play, Pause } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

export default function CompactMusicPlayer() {
  const { isPlaying, togglePlay } = useMusic();
  const label = isPlaying ? "Pause music" : "Play music";

  return (
    <div className="group relative flex items-center">
      <button
        onClick={togglePlay}
        className="interactive-icon flex h-8 w-8 items-center justify-center rounded-xl border border-transparent text-foreground hover:border-gray-200 hover:bg-button-hover hover:text-accent sm:h-10 sm:w-10 dark:hover:border-white/10 relative"
        aria-label={label}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
          <Play className="h-4 w-4 sm:h-5 sm:w-5 ml-0.5" />
        )}

        {/* Playing indicator */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
        )}
      </button>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
        {label}
      </span>

      {/* Audio is managed globally by MusicContext */}
    </div>
  );
}

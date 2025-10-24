import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import music from "../../assets/music/music.mp3";
import { useAutoplayMusic } from "../../hooks/useAutoplayMusic";

export default function CompactMusicPlayer() {
  const { audioRef, isPlaying, togglePlay, canAutoplay } = useAutoplayMusic(music);

  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-foreground hover:text-accent hover:bg-button-hover transition-all duration-200 relative"
        aria-label={isPlaying ? "Pause music" : "Play music"}
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

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={music}
        loop
        preload="auto"
      />
    </motion.div>
  );
}

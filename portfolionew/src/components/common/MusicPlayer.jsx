import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    const audioSrc = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', () => setIsPlaying(false));

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed bottom-4 right-4 z-50"
        >
            <div className="bg-glass backdrop-blur-md rounded-lg border border-glass-border shadow-lg overflow-hidden">
                {/* Compact View */}
                <div className="flex items-center gap-2 p-3">
                    <button
                        onClick={togglePlay}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
                    >
                        {isPlaying ? (
                            <Pause className="h-4 w-4 text-accent" />
                        ) : (
                            <Play className="h-4 w-4 text-accent ml-0.5" />
                        )}
                    </button>

                    <div className="flex items-center gap-1">
                        <Music className="h-4 w-4 text-accent" />
                        <span className="text-xs text-foreground-muted">Ambient</span>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                        <div className="w-1 h-1 bg-current rounded-full"></div>
                        <div className="w-1 h-1 bg-current rounded-full mt-0.5"></div>
                        <div className="w-1 h-1 bg-current rounded-full mt-0.5"></div>
                    </button>
                </div>

                {/* Expanded View */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-glass-border"
                        >
                            <div className="p-3 space-y-3">
                                {/* Progress Bar */}
                                <div className="space-y-1">
                                    <div className="w-full bg-glass-border rounded-full h-1">
                                        <div
                                            className="bg-accent h-1 rounded-full transition-all duration-100"
                                            style={{
                                                width: duration ? `${(currentTime / duration) * 100}%` : '0%'
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-foreground-muted">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                                {/* Volume Control */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={toggleMute}
                                        className="text-foreground-muted hover:text-foreground transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="h-4 w-4" />
                                        ) : (
                                            <Volume2 className="h-4 w-4" />
                                        )}
                                    </button>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="flex-1 h-1 bg-glass-border rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={audioSrc}
                loop
                preload="metadata"
            />

            {/* Playing Animation */}
            {isPlaying && (
                <div className="absolute -top-2 -right-2 w-3 h-3">
                    <div className="w-full h-full bg-accent rounded-full animate-ping opacity-75"></div>
                </div>
            )}
        </motion.div>
    );
}
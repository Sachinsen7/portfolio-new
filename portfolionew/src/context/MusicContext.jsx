import { createContext, useContext, useRef, useState, useEffect } from 'react';
import music from '../assets/music/Corridors_of_time.m4a';

const MusicContext = createContext();

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
};

export const MusicProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [canAutoplay, setCanAutoplay] = useState(false);
    const audioRef = useRef(null);
    const autoplayAttempted = useRef(false);

    useEffect(() => {
        // Create a single audio instance that persists across page changes
        if (!audioRef.current) {
            audioRef.current = new Audio(music);
            audioRef.current.volume = 0.3;
            audioRef.current.loop = true;
            audioRef.current.preload = 'auto';
        }

        const audio = audioRef.current;

        // Check if autoplay is possible
        const checkAutoplaySupport = async () => {
            try {
                const testAudio = new Audio();
                testAudio.muted = true;
                testAudio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
                await testAudio.play();
                setCanAutoplay(true);
            } catch (error) {
                setCanAutoplay(false);
            }
        };

        checkAutoplaySupport();

        // Attempt autoplay only once
        const attemptAutoplay = async () => {
            if (autoplayAttempted.current) return;
            autoplayAttempted.current = true;

            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.log('Autoplay blocked by browser');
                setIsPlaying(false);

                // Set up listeners for first user interaction
                const startOnInteraction = async () => {
                    try {
                        await audio.play();
                        setIsPlaying(true);
                        removeInteractionListeners();
                    } catch (err) {
                        console.log('Failed to start audio on interaction');
                    }
                };

                const removeInteractionListeners = () => {
                    document.removeEventListener('click', startOnInteraction);
                    document.removeEventListener('keydown', startOnInteraction);
                    document.removeEventListener('touchstart', startOnInteraction);
                    document.removeEventListener('scroll', startOnInteraction);
                };

                // Listen for any user interaction
                document.addEventListener('click', startOnInteraction, { once: true });
                document.addEventListener('keydown', startOnInteraction, { once: true });
                document.addEventListener('touchstart', startOnInteraction, { once: true });
                document.addEventListener('scroll', startOnInteraction, { once: true });

                // Clean up after 30 seconds
                setTimeout(removeInteractionListeners, 30000);
            }
        };

        // Try autoplay after audio loads
        if (audio.readyState >= 2) {
            attemptAutoplay();
        } else {
            audio.addEventListener('canplay', attemptAutoplay, { once: true });
        }

        // Handle audio events
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('canplay', attemptAutoplay);
        };
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            if (isPlaying) {
                audio.pause();
            } else {
                await audio.play();
            }
        } catch (error) {
            console.error('Error toggling audio:', error);
        }
    };

    const value = {
        isPlaying,
        togglePlay,
        canAutoplay,
        audioRef
    };

    return (
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    );
};
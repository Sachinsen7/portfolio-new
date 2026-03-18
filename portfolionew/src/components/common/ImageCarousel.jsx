import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

export default function ImageCarousel({ images = [], projectTitle = "Project" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const displayImages = images.length > 0 ? images : [];

    const totalImages = displayImages.length;

    if (totalImages === 0) return null;

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    // Calculate width for each image based on hover state
    const getImageWidth = (index) => {
        if (hoveredIndex === null) {
            return "33.333%"; // Default: equal width
        }
        return hoveredIndex === index ? "50%" : "25%"; // Hovered expands, others shrink
    };

    return (
        <div className="relative w-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-700/50 dark:bg-transparent sm:p-3">
                <div className="flex h-56 gap-2 sm:h-80 md:h-96">
                    {displayImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-md cursor-pointer"
                            initial={{ width: "33.333%" }}
                            animate={{ width: getImageWidth(index) }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <LazyImage
                                src={image}
                                alt={`${projectTitle} screenshot ${index + 1}`}
                                className="h-full w-full object-contain bg-gradient-to-br from-slate-100 to-white p-2 transition-transform duration-300 hover:scale-105 dark:from-gray-900 dark:to-gray-800 sm:p-3"
                            />

                            {/* Overlay on hover */}
                            <motion.div
                                className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {totalImages > 1 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}
            </div>

            {/* Image Counter */}
            {/* <div className="mt-3 text-center">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                    Hover over images to expand • {totalImages} images
                </span>
            </div> */}
        </div>
    );
}

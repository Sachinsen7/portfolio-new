import { useState } from "react"
import { ImageOff } from "lucide-react"

// lazy loaded

export default function LazyImage({src, alt, className}) {
    const [loaded, setLoaded] = useState(false)

    if (!src) {
        return (
            <div className={`${className} flex items-center justify-center bg-gray-100 text-gray-400 dark:bg-white/[0.04] dark:text-white/20`}>
                <ImageOff className="h-6 w-6" aria-hidden="true" />
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
        />
    )
}


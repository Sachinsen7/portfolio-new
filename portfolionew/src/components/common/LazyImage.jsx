import { useState } from "react"

// lazy loaded

export default function LazyImage({src, alt, className}) {
    const [loaded, setLoaded] = useState(false)

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


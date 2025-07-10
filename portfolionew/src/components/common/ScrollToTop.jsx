import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { ArrowUp } from "lucide-react"

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibillity = () => {
            setIsVisible(window.pageYOffset > 300)
        }

        window.addEventListener("scroll,", toggleVisibillity)
        return () => window.removeEventListener("scroll", toggleVisibillity)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }


    return (
        isVisible && (
            <Button
                variant="default"
                className="fixed bottom-4 right-4"
                onClick={scrollToTop}
            >
                <ArrowUp/>
            </Button>
        )
    )
}

export default ScrollToTop
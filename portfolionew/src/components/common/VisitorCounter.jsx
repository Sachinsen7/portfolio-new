import { useState, useEffect } from "react";
import { Eye, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const getVisitorData = () => {
            const storedData = localStorage.getItem('portfolioVisitors');

            if (storedData) {
                const data = JSON.parse(storedData);
                const newData = {
                    total: data.total + 1
                };
                localStorage.setItem('portfolioVisitors', JSON.stringify(newData));
                return newData;
            } else {
                const newData = {
                    total: 1
                };
                localStorage.setItem('portfolioVisitors', JSON.stringify(newData));
                return newData;
            }
        };

        const data = getVisitorData();
        setVisitorCount(data.total);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed bottom-4 left-4 z-50"
        >
            <div className="bg-glass backdrop-blur-md rounded-lg p-3 border border-glass-border shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4 text-accent" />
                    <span className="text-foreground-muted">Visitors:</span>
                    <span className="font-semibold text-foreground">{visitorCount}</span>
                </div>
            </div>
        </motion.div>
    );
}
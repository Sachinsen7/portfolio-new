import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const getVisitorData = () => {
      const storedData = localStorage.getItem("portfolioVisitors");
      if (storedData) {
        const data = JSON.parse(storedData);
        const newData = { total: data.total + 1 };
        localStorage.setItem("portfolioVisitors", JSON.stringify(newData));
        return newData;
      } else {
        const newData = { total: 1 };
        localStorage.setItem("portfolioVisitors", JSON.stringify(newData));
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
      className="fixed top-20 right-2 z-50"
    >
      <div
        className="flex items-center justify-center gap-2 h-[58px] px-4 bg-[var(--glass-bg)] 
                   backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg"
      >
        <Eye className="h-5 w-5 text-yellow-400" />
        <span className="text-foreground text-sm font-semibold">
          {visitorCount}
        </span>
      </div>
    </motion.div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
      </div>
    </div>
  );
}
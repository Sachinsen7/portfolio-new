import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-[var(--background)] py-6 border-t">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Sachin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github/Sachinsen7.com" className="text-primary hover:underline">GitHub</a>
            <a href="https://linkedin/sachinsen1.com" className="text-primary hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
}
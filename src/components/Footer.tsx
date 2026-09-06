export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Abdelrahman Shoman. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/TheSh0man"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdalrahmanshoman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

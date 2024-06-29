export default function Footer() {
  return (
    <footer className="flex justify-start items-center p-4 pb-3 sm:p-6 sm:pb-4 max-w-6xl mx-auto w-full">
      <div className="flex flex-col items-start leading-[0.8rem]">
        <span className="text-[0.6rem] sm:text-[0.7rem] md:text-sm">
          <a target="_blank" href="https://github.com/shang-kyimin/opendata" className="font-medium">Source Code</a> | <a target="_blank" href="https://kyiminkhine.vercel.app" className="font-medium">About Me</a>
        </span>
        <span className="text-[0.45rem] sm:text-[0.5rem] md:text-xs">&copy; 2024 - {new Date().getFullYear() === 2024 ? "" : new Date().getFullYear()} Kyi Min Khine, Personal Project | All rights reserved</span>
      </div>
    </footer>
  );
}



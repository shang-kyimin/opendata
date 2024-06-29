import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto w-full">
      <Link href="/" className="flex justify-start items-center gap-1">
        <Image
          src="/emojis/nerd_face.emoji.png"
          alt="nerd face emoji"
          width={24}
          height={24}
          unoptimized
          className="w-8 h-8 inline-block"
        />
        <h1 className="text-base sm:text-lg">OpenData</h1>
      </Link>

      <nav>
        <a href="https://github.com/shang-kyimin/opendata" target="_blank" className="text-sm bg-muted px-2 py-1 rounded-md transition-all hover:shadow-md focus-within:shadow-md">
          Star on GitHub
        </a>
      </nav>
    </header>
  );
}



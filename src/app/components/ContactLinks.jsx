"use client";
import Image from "next/image";

export default function ContactLinks() {
  return (
    <div className="flex justify-center gap-3 lg:gap-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/faraz-khan-b2a42028a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Image
          src="/companies/linkedin.svg" // Replace with your LinkedIn icon path
          alt="LinkedIn"
          width={50}
          height={50}
          className="rounded-full hover:scale-105 transition-transform"
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Faraz-Khan-79996"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Image
          src="/companies/github.svg" // Replace with your GitHub icon path
          alt="GitHub"
          width={50}
          height={50}
          className="rounded-full hover:scale-105 transition-transform"
        />
      </a>

      {/* Google (Mail) */}
      <a
        href="mailto:farazkhan799962@gmail.com"
        aria-label="Google Mail"
      >
        <Image
          src="/companies/google.png" // Replace with your Google icon path
          alt="Google Mail"
          width={46}
          height={49}
          className="rounded-full hover:scale-105 transition-transform"
        />
      </a>
    </div>
  );
}

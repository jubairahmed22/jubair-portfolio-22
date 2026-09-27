import React from "react";
import Image from "next/image";

const ProjectShowcaseCard = ({
  index,
  title,
  subtitle,
  desc,
  tech,
  timeline,
  link,
  image,
  badge,
  label,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-6 w-full fontPoppins">
      {/* Left: details card */}
      <div className="bg-white border border-zinc-300 p-8 sm:p-10 flex flex-col justify-between text-black">
        <div>
          <span className="block text-sm tracking-[0.3em] text-zinc-500 mb-10">
            {String(index).padStart(2, "0")}
          </span>

          <h3 className="text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-3 text-sm sm:text-base uppercase tracking-[0.3em] text-zinc-500">
            {subtitle}
          </p>

          <p className="mt-10 text-base sm:text-lg leading-8 text-zinc-700">
            {desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-black text-white text-sm uppercase tracking-wider px-4 py-3"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <span className="block text-xs uppercase tracking-[0.3em] text-zinc-400">
              Timeline
            </span>
            <span className="block mt-1 text-base text-zinc-700">
              {timeline}
            </span>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 text-base font-medium text-black hover:bg-black hover:text-white transition-colors"
          >
            Visit Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M9 7h8v8"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: image panel */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block bg-zinc-200 border border-zinc-300 min-h-[320px] sm:min-h-[460px] lg:min-h-0 overflow-hidden"
      >
        <div className="absolute inset-0 p-6 sm:p-10 lg:p-[7%] flex items-center justify-center">
          <Image
            src={image}
            alt={`${title} preview`}
            placeholder="blur"
            className="w-full h-full object-contain object-top"
          />
        </div>

        {badge && (
          <span className="absolute top-0 right-0 sm:top-4 sm:right-4 bg-lime-300 text-black text-base sm:text-lg font-medium px-5 py-3">
            {badge}
          </span>
        )}
        {label && (
          <span className="absolute bottom-0 left-0 sm:bottom-4 sm:left-4 bg-white text-black text-base sm:text-lg font-medium px-5 py-4">
            {label}
          </span>
        )}
      </a>
    </div>
  );
};

export default ProjectShowcaseCard;

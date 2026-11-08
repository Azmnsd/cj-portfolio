"use client";

import { useRouter } from "next/navigation";

type Project = { slug: string; label: string };

const DEFAULT_PROJECTS: Project[] = [
  { slug: "daily-ui", label: "DAILY UI" },
  { slug: "gaia", label: "GAIA" },
  { slug: "jude", label: "JUDE" },
  { slug: "anastasia", label: "ANASTASIA" },
];

export default function ProjectPager({
  current,
  projects = DEFAULT_PROJECTS,
}: {
  current: string;
  projects?: Project[];
}) {
  const router = useRouter();
  const idx = projects.findIndex((p) => p.slug === current);
  if (idx === -1) return null;

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const handleNav = (slug: string, dir: "left" | "right") => (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem("navDirection", dir);
    router.push(`/${slug}`);
  };

  return (
    <div className="w-full flex justify-between text-sm font-semibold tracking-widest mt-10">
      {prev ? (
        <a
          href={`/${prev.slug}`}
          onClick={handleNav(prev.slug, "right")}
          className="hover:text-gray-400 flex items-center space-x-2 transition-colors duration-200"
        >
          <span>← PREVIOUS PROJECT</span>
        </a>
      ) : (
        <div />
      )}

      {next ? (
        <a
          href={`/${next.slug}`}
          onClick={handleNav(next.slug, "left")}
          className="hover:text-gray-400 flex items-center space-x-2 transition-colors duration-200"
        >
          <span>NEXT PROJECT →</span>
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}

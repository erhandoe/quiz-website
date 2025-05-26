"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

type ExploreLinksProps = {
  links: LinkItem[];
};

export default function ExploreLinks({ links }: ExploreLinksProps) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[#00f2ff] mb-4 tracking-wide uppercase">
        Explore
      </h2>
      <ul className="space-y-4">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="group block relative border border-[#ff00ff] rounded-xl p-4 bg-[#0c0c0c] hover:bg-[#1a001a] transition-colors duration-300 shadow-md shadow-[#ff00ff44]"
            >
              <div className="flex justify-between items-center">
                <span className="text-[#ff00ff] font-semibold text-base group-hover:tracking-wide transition-all duration-200">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-[#ff00ff] opacity-0 group-hover:opacity-100 translate-x-1 transition duration-300" />
              </div>
              {link.description && (
                <p className="text-xs text-gray-400 mt-1 leading-snug">
                  {link.description}
                </p>
              )}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#ff00ff] transition-all duration-300 pointer-events-none" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

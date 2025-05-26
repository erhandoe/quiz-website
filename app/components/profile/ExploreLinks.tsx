type LinkItem = {
  label: string;
  href: string;
};

type ExploreLinksProps = {
  links: LinkItem[];
};

export default function ExploreLinks({ links }: ExploreLinksProps) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-[#00f2ff] mb-4">Explore</h2>
      <ul className="space-y-2 text-sm">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="text-[#ff00ff] hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

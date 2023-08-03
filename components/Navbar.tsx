"use client";

const pages = [
  { title: "About" },
  { title: "Experience" },
  { title: "Projects" },
  { title: "Contact" },
];

export default function Navbar({ isHeroTitleVisible }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center py-4 w-full">
      <div className="flex gap-1">
        <p className="m-0">Daniel</p>
        <b
          className={`transition-opacity ease-in duration-300 ${
            isHeroTitleVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          Famiyeh
        </b>
      </div>
      <ul className="flex flex-col lg:flex-row text-center">
        {pages.map(({ title }) => (
          <li
            key={`nav-link-${title}`}
            className="mr-4 select-none cursor-pointer"
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

type NavbarProps = {
  isHeroTitleVisible: boolean;
};

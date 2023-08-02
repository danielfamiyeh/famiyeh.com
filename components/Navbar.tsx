const pages = [{ title: "About" }, { title: "Projects" }, { title: "Contact" }];

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-4 w-full">
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

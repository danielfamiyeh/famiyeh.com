const pages = [{ title: "Projects" }, { title: "About" }, { title: "Contact" }];

export default function Navbar() {
  return (
    <nav className="flex justify-center lg:justify-between items-center py-4 w-full">
      <div className="select-none hidden lg:block">Daniel Famiyeh</div>
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

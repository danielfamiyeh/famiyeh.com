const pages = [{ title: "Projects" }, { title: "About" }, { title: "Contact" }];

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full">
      <div className="select-none">Daniel Famiyeh</div>
      <ul className="flex">
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

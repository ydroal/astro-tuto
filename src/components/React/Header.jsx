export default function Header({ currentPath }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gray h-32 fixed top-0 left-0 right-0 z-30">
      <div className="max-w-7xl px-4 md:px-16 flex items-center justify-between h-full">
        <a href="/">
          <img src="assets/logo.svg" alt="Yon blog" className="w-[85%] h-[85%] pb-5" />
        </a>  
        <nav className="flex gap-5">
          {links.map(link => {
            const isActive = currentPath === link.href;
            return (
              <a
              key={link.label}
              href={link.href}
              className={`w-14 h-14 rounded-full drop-shadow-md flex items-center justify-center text-sm transition-colors transform active:translate-y-[2px]
                ${isActive
                  ? "bg-black text-white" 
                  : "bg-white text-blueblack hover:bg-blueblack hover:text-white"
                }`}
            >
              {link.label}
            </a>
          );
        })}
        </nav>
      </div>
    </header>
  );
}
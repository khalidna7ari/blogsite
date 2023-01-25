const Header = () => {
  const navItems: string[] = ['about me', 'blog', 'projects', 'contact']

  return (
    <header className="py-4 flex justify-between items-center">
      <h2 className="bg-slate-500 h-10 w-10 rounded-full font-black flex items-center justify-center text-white bg-gradient-to-tr from-fuchsia-500 to-rose-500">K</h2>
      <nav>
        <ul className="flex gap-6 capitalize text-sm underline underline-offset-8 decoration-2 font-medium">
          {navItems.map((navItem, id) => (
            <li key={id} className=" hover:text-rose-500 active:text-rose-500"><a href="#">{navItem}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Header;
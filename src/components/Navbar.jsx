
function Navbar() {
  const navItems = [
    'home', 'about', 'contact'
  ];
  return (
    <>
      <nav className="bg-cyan-50 flex justify-between">
        <div className="font-bold text-2xl text-blue-500"> TaskManager </div>
        <div className="max-w-7xl p-2 px-2 sm:px-6 md:px-8">
          <ul className="flex justify-center gap-4 sm:gap-0 md:gap-6">
            {navItems.map( (item,index) => {
              return(
                <li 
                  key={index}
                  className="hover:bg-cyan-500 rounded-lg px-2 transition 0.3s ease-out"
                >
                  <a href="#" className="hover:text-cyan-50 capitalize text-gray-900">
                    { item }
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

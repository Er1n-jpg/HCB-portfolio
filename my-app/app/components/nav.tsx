import { Link, NavLink } from "react-router";

export default function Nav() {
  return (
    <div style={{ background: "red", height: "60px", width: "100%", zIndex: 1 }}>
      NAVBAR TEST
    </div>
  );
}

/*export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-red-500 z-50 px-8 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-[#FFFFF] font-extrabold text-2xl">
          HCB
        </Link>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-bold hover:text-[#FF6363] transition-colors ${
                isActive ? "text-[#FF6363]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              `text-white font-bold hover:text-[#FF6363] transition-colors ${
                isActive ? "text-[#FF6363]" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-white font-bold hover:text-[#FF6363] transition-colors ${
                isActive ? "text-[#FF6363]" : ""
              }`
            }
          >
          </NavLink>
        </div>
      </div>
    </nav>
  );
} */

import logo from "../../assets/photos/logo.png";
import group1 from "../../assets/photos/group 1.png";
import search from"../../assets/photos/search.png";
import user from "../../assets/photos/user.png";
import group2 from "../../assets/photos/group 2.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4">
      <img src={logo} alt="Dwello logo" className="h-8 w-auto" />
      <img src={group1} alt="Home Service Agents Contact" className="h-5 w-auto" />
      <div className="flex items-center gap-6">
        <img src={search} alt="search" className="h-5 w-5 object-contain" />
        <img src={user} alt="user" className="h-5 w-5 object-contain" />
        <img src={group2} alt="Sign up" className="h-7 w-auto" />
      </div>
    </nav>
  )
}
export default Navbar;
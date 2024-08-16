import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const {logOut, user} = UseAuth();

  const handleLogout=()=>{ 
    logOut()
      .then(()=>{
      })
      .catch()
    }

  const navLinks = (
    <>
      <li><NavLink className={({isActive})=>isActive? 'px-4 py-2 rounded-md font-bold underline mr-4':'px-4 py-2 rounded-md mr-4 font-semibold text-[#264653]'} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'px-4 py-2 rounded-md font-bold underline':'px-4 py-2 rounded-md font-semibold text-[#264653]'} to="/products">Products</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-[#d3d3d3] px-4 md:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl font-bold">ApplianceArena</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
          user? <button onClick={handleLogout} className="btn bg-[#9ACCC9] hover:scale-105 border-0">Logout</button>:<Link to='/login' className="btn border-0 bg-[#9ACCC9] hover:scale-105">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;

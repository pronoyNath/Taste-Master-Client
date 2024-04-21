
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../../../assets/animation/logo2.json"
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { Popover } from "@headlessui/react";
import Theme from "./Theme/Theme";

const Nav = ({ theme, handleTheme }) => {
  //   const location = useLocation();
  const navigate = useNavigate();
  const links = <>
    <NavLink to={'/'}>
      <li className={`text-sm font-semibold ${location.pathname === '/' ? 'text-orange' : ''}`}><a className='rounded-full'>Home</a></li>
    </NavLink>
    <NavLink to={'/addproducts'}>
      <li className={`text-sm font-semibold ${location.pathname === '/blogs' ? 'text-orange' : ''}`}><a className='rounded-full'>Add Product</a></li>
    </NavLink>
    <NavLink to={'/cart'}>
      <li className={`text-sm font-semibold ${location.pathname === '/consultation' ? 'text-orange' : ''}`}><a className='rounded-full'>My Cart</a></li>
    </NavLink>
  </>
  // const {  logOut } = useContext(AuthContext);
  const user = { displayName: "pronoy" }
  console.log(user, "kkjkkjk");
  //   const [bookmark] = useBookmark();
  const handleSignOut = () => {
    // logOut()
    toast.success('user signed out successfully');
    navigate('/login')
  }
  return (
    <header className=" md:px-4 relative md:z-20 text-white pt-2">
      <nav className="w-full flex items-center h-[68px] justify-between px-2 py-4 md:py-2" aria-label="Global">
        <div className="flex relative gap-3 items-center lg:flex-1">
          <div className="flex absolute -left-10 justify-center items-center">
            <Player
              autoplay
              loop
              src={logo}
              speed={0.6}
              className='w-[80px] pt-6'
            >
            </Player>
          </div>
          <Link to={'/'} className="text-xl font-semibold absolute left-12 pt-3">Taste<span className='text-orange'>Master</span>Hub</Link>
        </div>
        <div className="flex pt-3 lg:hidden">
          {
            user && user?.email ? (
              <div className="flex gap-3 ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                    <p className='flex justify-end font-medium items-end text-orange rounded-xl my-1 pr-[14px]'>{user?.displayName}</p>
                    <li className='flex rounded-full justify-end font-medium text-orange items-end my-1'><Link to={'/profile'} className='rounded-full pl-[79px] py-2.5'>Profile <span className='text-xl'><CgProfile /></span></Link></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="flex text-2xl text-orange justify-between items-center rounded-full">
                      <TiThMenu />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                    {links}
                    <Link
                      onClick={handleSignOut}
                      to={'/login'} className='mx-auto ml-3 w-full'><span className='flex  gap-1 items-center justify-start'>Logout <HiOutlineLogout /></span></Link>
                  </ul>
                </div>

              </div>
            ) : (

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="flex text-2xl text-orange justify-between items-center rounded-full">
                    <TiThMenu />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                  {links}
                  <Link to={'/login'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Login <IoMdArrowDropright /></span></Link>
                </ul>
              </div>
            )

          }
        </div>
        <Popover.Group className="hidden lg:flex pt-3 lg:gap-x-12">
          <ul className="menu rounded-full menu-horizontal bg-[#141414]">
            {links}
          </ul>

          {/* when need to enable theme */}
          {/* <Theme  theme={theme} handleTheme={handleTheme}/> */}

        </Popover.Group>
        {
          user && user?.email ? (
            <div className="hidden pt-2 lg:flex gap-3 lg:flex-1 lg:justify-end">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="" src={user?.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                  <p className='flex rounded-full justify-end font-medium items-end text-orange my-1 pr-[14px]'>{user?.displayName}</p>
                  <li className='flex rounded-full justify-end font-medium text-orange items-end my-1'><Link to={'/profile'} className='rounded-full pl-[79px] py-2.5'>Profile <span className='text-xl'><CgProfile /></span></Link></li>
                  {/* <li className='flex rounded-full text-orange font-medium justify-end items-end my-1'><Link className='rounded-full' to={'/bookmarks'}><span className='-mr-3 p-4 h-6 w-6 flex justify-center items-center font-medium text-white rounded-full'>{bookmark?.length}</span>Bookmarks <span className='text-xl'><HiBookmark /></span></Link></li> */}
                </ul>
              </div>
              <Link
                onClick={handleSignOut}
                to={'/login'} className="text-sm font-semibold flex justify-center items-center gap-2 leading-6 ">
                Logout <span aria-hidden="true"> <HiOutlineLogout /> </span>
              </Link>
            </div>
          ) : (
            <div className="hidden pt-3 lg:flex lg:flex-1 lg:justify-end">
              <Link
                to={'/login'} className="text-sm font-semibold flex justify-center items-center gap-2 leading-6 ">
                Log in <span aria-hidden="true"> <IoMdArrowDropright /> </span>
              </Link>
            </div>
          )
        }
      </nav>
    </header>
  )
}
export default Nav;
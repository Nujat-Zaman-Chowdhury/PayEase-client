import { useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";

import { Link } from 'react-router-dom'
import { SlPaypal } from "react-icons/sl";


import { AiOutlineBars } from 'react-icons/ai';
import AdminMenu from '../Menu/AdminMenu';
import UserMenu from '../Menu/UserMenu';
import AgentMenu from '../Menu/AgentMenu';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
const Sidebar = () => {
  const {user,logout} = useAuth()
  const [role] = useRole()
  console.log(role);

  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  //handle Logout
  const handleLogOut = ()=>{
    logout();
  }



  return (
    <>
      {/* Small Screen Navbar */}
      <div className='text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-sky-400'
        >
          <AiOutlineBars className='h-5 w-5 focus:text-white' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col bg-neutral-900 justify-between overflow-x-hidden bg-base w-64 space-y-6 p-3 absolute inset-y-0 left-0 text-white transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>

              <Link to='/' className='flex gap-2 items-center p-4 '>
              <SlPaypal className='text-xl'/>
                <h2  className="text-xl  font-outfit">PayEase</h2>
              </Link>
            
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {role=== 'Admin' && <AdminMenu/>}
              {role=== 'User' && <UserMenu/>}
              {role=== 'Agent' && <AgentMenu/>}

            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogOut}
            className='flex rounded-md w-full items-center px-4 py-2 mt-5 text-white hover:bg-blue-400   hover:text-white transition-colors duration-300 transform'
          >
            <AiOutlineLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
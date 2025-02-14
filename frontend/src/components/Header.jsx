import { FaPlaneDeparture } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { userInfo: user } = useSelector((state) => state.auth)
  return (
    <header className='flex justify-between'>
      <Link to='/' className='flex items-center gap-1'>
        <FaPlaneDeparture className='w-8 h-8 text-primary' />
        <span className='font-bold text-xl text-primary'>Travel Assistant</span>
      </Link>

      {/* <div className='flex items-center border-gray-300 rounded-full gap-2 py-2 px-4 shadow-md shadow-gray-300'>
        <div>Anywhere</div>
        <div className='border-l border-gray-300'></div>
        <div>Any week</div>
        <div className='border-l border-gray-300'></div>
        <div>Add guests</div>
        <div className='border-l border-gray-300'></div>
        <button className='bg-primary text-white p-1 rounded-full'>
          <CiSearch className='w-4 h-4' />
        </button>
      </div> */}

      {user !== null && user.isAdmin && (
        <Link
          className='flex items-center border-gray-300 rounded-full gap-2 py-2 px-4 shadow-md shadow-gray-300'
          to={'/admin'}
        >
          Dashboard
        </Link>
      )}

      <div className='flex gap-4 items-center'>
        <Link to={'/contact'} className='text-primary font-semibold'>
          Contact Admin
        </Link>
        <Link
          to={user ? '/account' : '/login'}
          className='flex items-center border-gray-300 rounded-full gap-2 py-2 px-4 shadow-md shadow-gray-300'
        >
          <RxHamburgerMenu className='text-primary w-5 h-5' />
          <div className=''>
            <FaUserCircle className='text-primary w-5 h-5' />
          </div>
          {!!user && <div>{user.name}</div>}
        </Link>
      </div>
    </header>
  )
}

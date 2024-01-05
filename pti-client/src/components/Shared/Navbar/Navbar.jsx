import Container from '../Container'
import Dropdown from './Dropdown'
import Logo from './Logo'
import UserMenu from './UserMenu'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <div className=' w-full   '>
      <div className='py-4 '>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <div className='flex flex-row items-center justify-between gap-3 md:gap-2'>
            <SearchBar></SearchBar>
            <Dropdown></Dropdown>
            </div>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar

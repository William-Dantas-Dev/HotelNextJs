import NavMenuLogo from './NavMenuLogo';
import NavMenuItem from './NavMenuItem';
const NavMenu = ({ }: {
  
}) => {
  return (
    <div className='bg-gray-50t text-gray-600'>
      <header className='container mx-auto px-4 h-24 flex items-center justify-between'>
        <NavMenuLogo logoName={"Logo"}/>
          <ul className='flex items-center space-x-3'>
            <NavMenuItem href={""} value={"Como Reservar"}/>
            <NavMenuItem href={""} value={"Sobre Nós"}/>
            <NavMenuItem href={""} value={"Informações"}/>
            <NavMenuItem href={""} value={"Contato"}/>
          </ul>
      </header>
    </div>
  )
  
}

export default NavMenu;
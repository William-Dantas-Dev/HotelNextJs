import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
const NavMenuItem = ({ value, href}: {
  value: String,
  href: Url,
}) => {
  return (
    <li>
      <Link href={href} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>{value}</Link>
    </li>
  )
  
}

export default NavMenuItem;
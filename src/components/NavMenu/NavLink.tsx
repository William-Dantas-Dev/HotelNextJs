import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
const NavLink = ({ title, href }: {
  title: String,
  href: Url,
}) => {
  return (
    <Link href={href} className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>{title}</Link>
  )
  
}

export default NavLink;
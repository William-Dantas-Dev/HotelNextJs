import Image from 'next/image';
const SocialMediaImage = ({ image }: {
  image: string,
}) => {
  return (
    <Image className='w-full h-full object-cover' src={image} width={20} height={20} alt='icon-facebook'></Image>
  )
  
}

export default SocialMediaImage;
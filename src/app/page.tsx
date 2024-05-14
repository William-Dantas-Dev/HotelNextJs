import EmphasisSection from '@/components/EmphasisSection/EmphasisSection';
import MoreResorts from '@/components/MoreResorts/MoreResorts';
import NavMenu from '@/components/NavMenu/NavMenu';
import NavMenuLogo from '@/components/NavMenu/NavMenuLogo';
import SearchResorts from '@/components/SearchResorts/SearchResorts';
import SearchResortsForm from '@/components/SearchResorts/SearchResortsForm';
import SocialMediaImage from '@/components/SocialMediaImage';

export default function Home() {
  return (
    <>
      <NavMenu />
      <SearchResorts />
      <EmphasisSection />
      <MoreResorts />
      <div className='py-20'>
        <div className='container mx-auto px-4 flex justify-center'>
          <SearchResortsForm />
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <div className='container mx-auto p-4 flex items-center justify-between'>
          <NavMenuLogo logoName={"LOGO"}/>
          <div className='flex items-center space-x-3'>
            <SocialMediaImage image='/images/icon-facebook.png' />
            <SocialMediaImage image='/images/icon-instagram.png' />
          </div>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: HiEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className="hover:bg-white/10 text-3xl transition duration-200 rounded-3xl flex items-center justify-center space-x-4 w-fit py-2 px-6"
              href={item.title.toLocaleLowerCase()}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              {item.title !== 'Twitter' && <div>{item.title}</div>}
            </Link>
          ))}
        </section>
        {/* <main> home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  );
};

export default Home;

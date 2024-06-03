import { createClient } from '../prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Bounded from './Bounded';
import Heading from './Heading';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <>
      <Bounded as="header" className="py-4 md:py-6 lg:py-8 flex gap-5 items-center justify-between bg-green-950">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Heading as="h1" size="md" className="font-display font-normal text-white"><span className="font-extrabold text-green-500">Game</span>Network</Heading>
          </Link>

          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-3xl px-2 py-1 w-25 md: w-40"
          />
        </div>
        </Bounded>
        
        <nav className="flex-row flex justify-center mt-5">
          <ul className="flex gap-3 md:gap-10">
            {settings.data.navigation.map(({ link, label }, index) => (
              <li key={label}>
                <PrismicNextLink
                  className={`relative p-3 text-sm transition-colors duration-300 ease-in-out hover:text-green-500 md:text-lg`}
                  field={link}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${getColorClass(index + 1)}`}
                  ></span>
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
    </>
  );
}

function getColorClass(index) {
  switch (index) {
    case 1:
      return 'bg-red-500';
    case 2:
      return 'bg-blue-500';
    case 3:
      return 'bg-yellow-500';
    case 4:
      return 'bg-pink-500';
    default:
      return 'bg-white'; // Fallback color
  }
}

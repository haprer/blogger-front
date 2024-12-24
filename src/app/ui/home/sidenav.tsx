import Link from 'next/link';
import { PowerIcon, NewspaperIcon } from '@heroicons/react/24/solid';


import NavLinks from '@/app/ui/home/navlinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-teal-700 p-4 md:h-40"
        href="/"
      >
        <div className="flex items-center gap-2 text-white">
          <NewspaperIcon className="w-10 md:w-20" />
          <h1 className="text-lg font-semibold md:text-2xl">Blogger</h1>
        </div>
      </Link>
        <div className="flex grow flex-row text-gray-900 bg-white rounded-md justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">  
        <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-emerald-800 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
    </div>
  );
}
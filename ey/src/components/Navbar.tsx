import Link from "next/link";
import { UserCircleIcon, GlobeAltIcon, SearchIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <nav className="bg-[#2e2e38] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-lg font-bold" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>MyApp</div>
          <Link href="/" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            Home
          </Link>
          <Link href="/quiz" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            Quiz
          </Link>
          <Link href="/courses" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            Courses
          </Link>
          <Link href="/blogs" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            Blogs
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            About Us
          </Link>
          <Link href="/explore" className="text-gray-300 hover:text-white" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            Explore More
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-300 hover:text-white font-bold" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            <SearchIcon className="h-5 w-5 mr-1" />
            Search
          </button>
          <button className="flex items-center text-gray-300 hover:text-white font-bold" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            <UserCircleIcon className="h-5 w-5 mr-1" />
            Profile
          </button>
          <button className="flex items-center text-gray-300 hover:text-white font-bold" style={{ fontFamily: 'Roboto Condensed', fontWeight: 700, fontSize: '14px' }}>
            <GlobeAltIcon className="h-5 w-5 mr-1" />
            English
          </button>
        </div>
      </div>
    </nav>
  );
}
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="p-4 bg-white lg:p-10 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center">
            <Link href="/" className="flex flex-col justify-center items-center mb-6 text-md md:text-xl font-semibold text-gray-900 dark:text-white">
                <svg className="mb-2 w-4 h-4 md:w-6 md:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2V2ZM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7H0Zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916Z"/>
                </svg>
                <p>in<span className='font-extrabold italic'>Re</span>stagram</p>  
            </Link>
            <ul className="text-sm md:text-base flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link href={{ pathname: "/", hash: "features"}} className="mr-4 hover:underline md:mr-6">Features</Link>
                </li>
                <li>
                    <Link href={{ pathname: "/", hash: "about"}} className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Blog</Link>
                </li>
                <li>
                    <Link href="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
                </li>
            </ul>
            <span className="text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <a href="#" className="hover:underline">Mostaqim™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
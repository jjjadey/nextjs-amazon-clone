import Image from 'next/image';
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

    // document -> https://next-auth.js.org/getting-started/client#usesession
    const { data: session, status } = useSession();
    console.log('>>> session', session);

    const router = useRouter();

    const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="ml-5 mr-5 mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt="logo"
                        onClick={() => router.push('/')}
                    />
                </div>

                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-shrink flex-grow rounded-l-md focus:outline-none px-4" />
                    <MagnifyingGlassIcon className="h-12 p-4" />
                </div>

                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" onClick={!session ? signIn : signOut}>
                        <p>{session ? `Hello, ${session.user.name}` : 'Sign in'}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center" onClick={() => router.push('/checkout')}>
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <Bars3Icon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today&#39;s deal</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header

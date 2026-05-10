import logo from "@/assets/Wanderlast.png"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container mx-auto py-4" >
            <div className="flex justify-between items-center">
                <div className="">
                    <ul className="flex gap-4">
                        <li> <Link href='/'>Home</Link></li>
                        <li> <Link href='/destinations'>Destinations</Link></li>
                        <li> <Link href='/bookings'>My Bookings</Link> </li>
                        <li> <Link href='/admin'>Admin</Link></li>
                    </ul>
                </div>
                <div className="">
                <h1 className="text-[#15A1BF] text-[30px] font-black">Wanderlust</h1>
                </div>
                <div className="">
                    {/* ul>li*5 */}
                    <ul className="flex gap-4">
                        <li> <Link href='/profile'>Profile</Link> </li>
                        <li> <Link href='/login'>Login</Link> </li>
                        <li> <Link href='/signup'>Sign Up</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
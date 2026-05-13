"use client";
import logo from "@/assets/Wanderlast.png";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  return (
    <div className="  py-4 absolute  w-full">
      <div className="flex justify-between items-center  bg-white px-4  max-w-[1400px] w-full mx-auto ">
        <div className="">
          <ul className="flex gap-4">
            <li>
              {" "}
              <Link href="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link href="/destination">Destinations</Link>
            </li>
            <li>
              {" "}
              <Link href="/bookings">My Bookings</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/addDestination">Add Destination</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[#15A1BF] text-[30px] font-black">Wanderlust</h1>
        </div>
        <div className="">
          {/* ul>li*5 */}
          <ul className="flex gap-4 items-center">
            <li>
              {" "}
              <Link href="/profile">Profile</Link>{" "}
            </li>

            {user ? (
              <>
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0) ?? "?"}</Avatar.Fallback>
                </Avatar>

                  <li>
                 
                  <Button variant="danger" className={'rounded-none'} >Logout</Button>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link href="/signin">Login</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/signup">Sign Up</Link>{" "}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-[#111111] text-white px-16 py-16 ">
            <div className="max-w-[1400px] w-full mx-auto">
            {/* Top Section */}
            <div className="mb-12 ">
                <h1 className="text-6xl font-bold mb-4">Wanderlast</h1>
                <p className="text-gray-400">Your gateway to extraordinary travel experiences around the world.</p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                
                {/* Newsletter */}
                <div>
                    <p className="text-sm tracking-widest mb-2">NEWSLETTER</p>
                    <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive travel deals and inspiration.</p>
                    <div className="flex items-center bg-[#2a2a2a] px-4 py-3">
                        <input 
                            type="text" 
                            placeholder="Enter email" 
                            className="bg-transparent text-white text-sm outline-none flex-1"
                        />
                        <ArrowRight className="text-white w-5 h-5 cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <p className="text-sm tracking-widest mb-4">QUICK LINKS</p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="cursor-pointer hover:text-white">Home</li>
                        <li className="cursor-pointer hover:text-white">Destinations</li>
                        <li className="cursor-pointer hover:text-white">My Bookings</li>
                        <li className="cursor-pointer hover:text-white">My Profile</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <p className="text-sm tracking-widest mb-4">SUPPORT</p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="cursor-pointer hover:text-white">Help Center</li>
                        <li className="cursor-pointer hover:text-white">Terms of Service</li>
                        <li className="cursor-pointer hover:text-white">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p className="text-sm tracking-widest mb-4">CONTACT US</p>
                    <ul className="space-y-3 text-gray-400">
                        <li>786 901 1622</li>
                        <li>info@wandarland.com</li>
                    </ul>
                </div>
            </div>

           {/* Bottom Section */}
<div className="border-t border-gray-700 pt-6 flex justify-between items-center">
    <p className="text-gray-400 text-sm">© 2026 Wanderlust. All rights reserved.</p>
    <div className="flex gap-4">
        <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        <FaInstagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
    </div>
</div>
            </div>

        </div>
    );
};

export default Footer;
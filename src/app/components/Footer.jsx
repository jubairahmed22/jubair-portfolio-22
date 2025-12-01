import React from "react";
import logo from "../../assets/book_forest.png";
import "../../styles/footer.css";
import Link from "next/link";
import "../../styles/homePage.css";
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black/20 backdrop-blur-3xl w-full fontPoppins ">
      <div className="w-full mobileHidden">
        <div className="max-w-6xl h-[313px] py-10 flex flex-row justify-between mx-auto">
          <div className=" flex flex-col ">
            {/* <img className='w-[182px] h-[180px] ' src={logo.src} alt=''></img> */}
            <p className="text-[44px] text-white font-semibold italic">
              Jubair Ahmed
            </p>
            <p className="text-[26px] text-[#848484] italic">
              Full Stack Developer
            </p>
            <p className="text-[12px] text-[#848484]">Dhaka, Bangladesh</p>
          </div>
          <div className="border-l pl-10 border-[#444444]">
            <h1 className="text-white text-[17px] font-semibold fontPoppins">
              Need Help
            </h1>
            <h1 className="text-[32px] font-bold mt-4 text-white">
              +880-1629964630
            </h1>
          </div>
          <div>
            <h1 className="text-white text-[17px] font-semibold fontPoppins">
              Explore
            </h1>
            <div className="mt-4 flex flex-col gap-3">
              <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                About us
              </h1>
              <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                Projects
              </h1>
              <Link href="">
                <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                  Contact Us
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[17px] font-semibold fontPoppins">
              Our Service
            </h1>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/help-center">
                <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                  Web Development
                </h1>
              </Link>
              <Link href="">
                <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                  UI UX
                </h1>
              </Link>
              <Link href="">
                <h1 className="text-[16px] font-medium  text-[#8F8F8F]">
                  Graphics Design
                </h1>
              </Link>
              <Link href="">
                <h1 className="text-[16px] font-medium  text-[#8F8F8F]">CRM</h1>
              </Link>
              {/* <Link href=""><h1 className='text-[16px] font-medium  text-[#8F8F8F]'></h1></Link> */}
            </div>
          </div>

          <div>
            <h1 className="text-white text-[17px] font-semibold fontPoppins">
              Follow Me
            </h1>
            <div className="mt-4 flex flex-row gap-5 items-center">
              <Link href="https://instagram.com/your_username" target="_blank">
                <Instagram className="w-6 h-6 text-[#8F8F8F] hover:text-white transition-all duration-300 cursor-pointer" />
              </Link>
              <Link
                href="https://linkedin.com/in/your_username"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-[#8F8F8F] hover:text-white transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href="https://github.com/your_username" target="_blank">
                <Github className="w-6 h-6 text-[#8F8F8F] hover:text-white transition-all duration-300 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-t-[#444444]">
          <div className="max-w-6xl h-[110px] py-5   flex flex-row justify-between mx-auto">
            <h1 className="text-[17px] text-white">
              Copyright 2025 <span className="text-white">Jubair Ahmed</span>.
              All rights reserved.{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* Mobile Only Footer */}
      <div className="webHidden w-full">
        <div className="block w-full bg-black/90 text-white px-5 py-8 ">
          {/* Top Section */}
          <div className="flex flex-col gap-6">
            {/* Personal Info */}
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-semibold italic">Jubair Ahmed</p>
              <p className="text-lg text-gray-400 italic">
                Full Stack Developer
              </p>
              <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">Need Help</h2>
              <p className="text-xl font-bold">+880-1629964630</p>
            </div>

            {/* Explore Links */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold">Explore</h2>
              <div className="flex flex-col gap-1">
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">About us</p>
                </Link>
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">Projects</p>
                </Link>
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>

            {/* Services Links */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold">Our Service</h2>
              <div className="flex flex-col gap-1">
                <Link href="/help-center">
                  <p className="text-gray-400 text-sm font-medium">
                    Web Development
                  </p>
                </Link>
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">UI UX</p>
                </Link>
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">
                    Graphics Design
                  </p>
                </Link>
                <Link href="">
                  <p className="text-gray-400 text-sm font-medium">CRM</p>
                </Link>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-sm font-semibold">Follow Me</h2>
              <div className="flex flex-row gap-5 mt-1">
                <Link
                  href="https://instagram.com/your_username"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300" />
                </Link>
                <Link
                  href="https://linkedin.com/in/your_username"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300" />
                </Link>
                <Link href="https://github.com/your_username" target="_blank">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-5"></div>

          {/* Bottom Section */}
          <div className="text-center text-xs text-gray-500">
            Copyright 2025 <span className="text-white">Jubair Ahmed</span>. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

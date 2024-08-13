import { FacebookIcon, GithubIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="dark bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">2024 ShopIT. All Rights Reserved</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href={"/"}
            className="text-gray-400 hover:text-gray transition-colors"
          >
            <YoutubeIcon className="w-6 h-6" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link
            href={"/"}
            className="text-gray-400 hover:text-gray transition-colors"
          >
            <FacebookIcon className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={"/"}
            className="text-gray-400 hover:text-gray transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

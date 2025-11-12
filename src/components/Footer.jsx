import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content p-10 mt-16 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1️⃣ Logo + Website Name */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://dreamestate.properties/uploads/3f0af5b2-d04a-45bb-8f1f-301b22f3e54c.png"
              alt="Logo"
              className="w-15 h-15 rounded-full"
            />
            <h2 className="text-2xl font-bold">DreamEstate</h2>
          </div>
          <p className="text-sm text-gray-500">
            Find your dream property with confidence — buy, sell, or rent
            easily.
          </p>
        </div>

        {/* 2️⃣ Contact Details */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p>Email: support@dreamestate.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* 3️⃣ Terms & Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="link link-hover">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="link link-hover">
                Privacy Policy
              </Link>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DreamEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

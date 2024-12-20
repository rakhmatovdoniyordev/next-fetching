import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Panto</h2>
          <p className="text-gray-600 pr-4">
            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Campaigns
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Branding
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Furniture</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Beds
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Chair
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                All
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <FaFacebook className="w-5 h-5" />
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <FaTwitter className="w-5 h-5" />
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <FaInstagram className="w-5 h-5" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">Copyright © 2021</p>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
import React, { ReactNode } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRss } from "react-icons/fa"
import SEO from '../SEO'
import colors from '../../utils/colors'
import { APP_NAME } from '../../utils/constants'


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SEO />

      <div className="container mx-auto py-8 px-2">
        <div className="flex flex-col items-center mb-4">
          <div className="mb-4">
            <a className="navbar-brand d-lg-block" href="/">
              <img width="300" src="/assets/images/juno7-blue.png" alt={APP_NAME} />
            </a>
          </div>
          <div className="flex">
            <a href="https://fb.com/juno7haiti" style={{ color: colors.facebook }}><FaFacebookF size="36" /></a>
									&nbsp;
									&nbsp;
									<a href="https://twitter.com/juno7" style={{ color: colors.twitter }}><FaTwitter size="36" /></a>
										&nbsp;
										&nbsp;
									<a href="https://instagram.com/juno7haiti" style={{ color: colors.instagram }}><FaInstagram size="36" /></a>
										&nbsp;
										&nbsp;
									<a href="https://www.youtube.com/channel/UCWeQpI3VBl-MZHV3uCVsDHg?view_as=subscriber" style={{ color: colors.youtube }}><FaYoutube size="36" /></a>
										&nbsp;
										&nbsp;
									<a href="https://www.juno7.ht/feed/" style={{ color: colors.telegram }}><FaRss size="36" /></a>
          </div>
          <br />
        </div>
        {children}
      </div>
    </>
  )
}

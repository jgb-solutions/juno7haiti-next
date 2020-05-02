import React, { ReactNode } from 'react'

import SEO from '../SEO'
import colors from '../../utils/colors'


export default function MainLayout({ children, title }: { children: ReactNode, title?: string }) {
  return (
    <>
      <SEO />

      <div className="main-wrapper tr-page-top">
        <div className="container-fluid">
          <div className="clearfix margin-bottom-0">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <div>
                  <a className="navbar-brand d-lg-block" href="/">
                    <img
                      width="300"
                      className="img-fluid"
                      src="/assets/images/juno7-blue.png"
                      alt="Juno7 Haiti"
                    /></a>
                </div>
                <div>
                  <a href="https://fb.com/juno7haiti" style={{ color: colors.facebook }}><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></a>
									&nbsp;
									&nbsp;
									<a href="https://twitter.com/juno7" style={{ color: colors.twitter }}><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a>
										&nbsp;
										&nbsp;
									<a href="https://instagram.com/juno7haiti" style={{ color: colors.instagram }}><i className="fa fa-2x fa-instagram" aria-hidden="true"></i></a>
										&nbsp;
										&nbsp;
									<a href="https://www.youtube.com/channel/UCWeQpI3VBl-MZHV3uCVsDHg?view_as=subscriber" style={{ color: colors.youtube }}><i className="fa fa-2x fa-youtube" aria-hidden="true"></i></a>
										&nbsp;
										&nbsp;
									<a href="https://www.juno7.ht/feed/" style={{ color: colors.telegram }}><i className="fa fa-2x fa-rss" aria-hidden="true"></i></a>
                </div>
                <br />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

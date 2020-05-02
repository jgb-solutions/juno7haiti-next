import Link from 'next/link'
import fetch from 'node-fetch'
import { GetStaticProps } from 'next'
import InfiniteScroll from 'react-infinite-scroller'

import useAllNews from '../hooks/useAllNews'
import { API_URL } from '../utils/constants'
import MainLayout from '../components/layouts/Main'
import NewsInterface from '../interfaces/NewsInterface'

export default function AllNews({ posts }: { posts: NewsInterface[] }) {
  const { data: newsData, loading, error, hasMore, loadMore } = useAllNews(posts)

  return (
    <MainLayout>
      <InfiniteScroll
        pageStart={2}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<div key="loading">Chargement...</div>}
        useWindow={false}
        initialLoad={false}
      >
        <div className="row" key="wrapper">
          {newsData.map((news: NewsInterface) => (
            <div className="col-md-4" key={news.hash}>
              {news.title}
              <div className="tr-section">
                <div className="tr-post">
                  <div className="entry-header">
                    <div className="entry-thumbnail">
                      <a href="https://demo.themeregion.com/newshub/details.html">
                        <img className="img-fluid" src="/assets/images/44.jpg" alt="Image" />
                      </a>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <ul>
                            <li>Partager</li>
                            <li>
                              <a
                                href="https://demo.themeregion.com/newshub/index4.html#"
                              ><i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i
                                ></a>
                            </li>
                            <li>
                              <a
                                href="https://demo.themeregion.com/newshub/index4.html#"
                              ><i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i
                                ></a>
                            </li>
                            <li>
                              <a
                                href="https://demo.themeregion.com/newshub/index4.html#"
                              ><i
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              ></i
                                ></a>
                            </li>
                            <li>
                              <a
                                href="https://demo.themeregion.com/newshub/index4.html#"
                              ><i className="fa fa-rss" aria-hidden="true"></i
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title">
                      <a
                        href="https://demo.themeregion.com/newshub/details.html"
                      >Herkey Spot VS Rocket Warrior Live Cricket Match</a
                      >
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut ex ea
                      commodo consequat.
										</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)

  const posts = (await res.json()).data

  return {
    props: {
      posts,
    },
  }
}
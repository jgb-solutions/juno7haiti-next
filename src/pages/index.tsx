import Link from 'next/link'
import fetch from 'node-fetch'
import { GetStaticProps } from 'next'
import InfiniteScroll from 'react-infinite-scroller'

import useAllPosts from '../hooks/useAllPosts'
import { API_URL } from '../utils/constants'
import MainLayout from '../components/layouts/Main'
import PostInterface from '../interfaces/PostInterface'
import ShareButtons from '../components/Share'

export default function AllNews({ posts }: { posts: PostInterface[] }) {
  const { data: postData, loading, hasMore, loadMore } = useAllPosts(posts)

  return (
    <MainLayout>
      <InfiniteScroll
        pageStart={3}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<img key="loader" src="/assets/images/loader.gif" width="100" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 15 }} />}
        useWindow={true}
        initialLoad={false}
      >
        <div className="row" key="wrapper">
          {postData.map((post: PostInterface, index) => (
            <div className="col-md-3 col-sm-4" key={index}>
              <div className="tr-section">
                <div className="tr-post">
                  <div className="entry-thumbnail">
                    <a href={post.link} target="_blank">
                      <img className="img-fluid" src={post.image_url} alt={post.title} />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <ShareButtons post={post} />
                    </div>
                    <h2 className="entry-title">
                      <a href={post.link} dangerouslySetInnerHTML={{ __html: post.title }} target="_blank" />
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll >
    </MainLayout >
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}?per_page=12`)

  return {
    props: {
      posts: (await res.json()).map(mapPostFromResponse)
    },
  }
}


export const mapPostFromResponse = (post: any) => ({
  id: post.id,
  title: post.title.rendered,
  image_url: post.jetpack_featured_media_url,
  excerpt: post.excerpt.rendered,
  link: post.link
})
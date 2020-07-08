import fetch from 'node-fetch'
import InfiniteScroll from 'react-infinite-scroller'
import { FaCalendarAlt } from 'react-icons/fa'
import { formatDistance } from 'date-fns'
import fr from 'date-fns/locale/fr'

import useAllPosts from '../hooks/useAllPosts'
import { API_URL } from '../utils/constants'
import MainLayout from '../components/layouts/Main'
import PostInterface from '../interfaces/PostInterface'
import ShareButtons from '../components/Share'

export default function AllNews({ posts }: { posts: PostInterface[] }) {
  const { data: postData, hasMore, loadMore } = useAllPosts(posts)

  return (
    <MainLayout>
      <InfiniteScroll
        pageStart={3}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<img key="loader" src="https://i0.wp.com/juno7haiti.com/assets/images/loader.gif?w=100" width="100" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 15 }} />}
        useWindow={true}
        initialLoad={false}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3" key="wrapper">
          {postData.map((post: PostInterface, index) => (
            <div className="bg-white rounded-lg text-sm mb-8" key={index}>
              <a href={post.link} target="_blank">
                <img className="rounded-lg" src={post.image_url} alt={post.title} />
              </a>

              <div className="px-2 py-2">
                <ShareButtons post={post} />
                <h4 className="flex items-center mt-4">
                  <FaCalendarAlt />
                  <span className="ml-2 font-normal">
                    Il y a {formatDistance(
                    Date.parse(post.date), new Date(), { locale: fr }
                  )}
                  </span>
                </h4>
                <h2 className="text-lg font-bold mb-2">
                  <a href={post.link} dangerouslySetInnerHTML={{ __html: post.title }} target="_blank" />
                </h2>
                <div className="font-thin" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
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
    unstable_revalidate: 5
  }
}


export const mapPostFromResponse = (post: any) => ({
  id: post.id,
  title: post.title.rendered,
  image_url: post.jetpack_featured_media_url,
  excerpt: post.excerpt.rendered,
  link: post.link,
  date: post.date
})
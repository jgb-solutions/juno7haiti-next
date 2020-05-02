import { useEffect, useState } from 'react'

import PostInterface from '../interfaces/PostInterface'
import { API_URL } from '../utils/constants'
import { mapPostFromResponse } from '../pages'

interface AllPost {
  loading: boolean
  error: Error | null
  data: PostInterface[]
  loadMore: () => void
  hasMore: boolean,
}

const parseResponse = async (response: Response) => await response.json()

export default function useAllPosts(list: PostInterface[]): AllPost {
  const [page, setPage] = useState(2)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(12)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [error, setError] = useState(null)
  const [PostList, setPostList] = useState<PostInterface[]>(list)


  useEffect(() => {
    fetchPost()
  }, [page])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const data = await parseResponse(await fetch(`${API_URL}?page=${page}&per_page=12`))
      setHasMore(Array.isArray(data))
      setPostList([...PostList, ...data.map(mapPostFromResponse)])
      setLoading(false)
    } catch (error) {
      setError(error)
      setHasMore(false)
      setLoading(false)
    }

  }

  const loadMore = () => {
    if (hasMore) {
      setPage(page + 1)
    }

    return
  }

  return { data: PostList, loading, error, loadMore, hasMore }
}
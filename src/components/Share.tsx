import React from 'react'
import {
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share'

import PostInterface from '../interfaces/PostInterface'
import { TWITTER_HANDLE, APP_NAME } from '../utils/constants'
import colors from '../utils/colors'

export default function ShareButtons({ post }: { post: PostInterface }) {
  const url = post.link
  const title = `${post.title} - ${APP_NAME}`
  const hashtags = `juno7`

  return (
    <div className="flex mb-2 mt-2">
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtags.split(' ').join(' #')}>
        <FacebookIcon size={36} style={{ borderRadius: 4, color: colors.facebook }} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={TWITTER_HANDLE}
        hashtags={hashtags.split(' ')}>
        <TwitterIcon size={36} style={{ borderRadius: 4, marginLeft: 8, color: colors.twitter }} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={36} style={{ borderRadius: 4, marginLeft: 8, color: colors.whatsapp }} />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={36} style={{ borderRadius: 4, marginLeft: 8, color: colors.telegram }} />
      </TelegramShareButton>
    </div>
  )
}
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

import NewsInterface from '../interfaces/NewsInterface'
import { TWITTER_HANDLE } from '../utils/constants'
import colors from '../utils/colors'

export default function ShareButtons(news: NewsInterface) {
  const url = `https://infotoutan.com/n/${news.hash}`
  const title = `${news.title} - Haïti Info Toutan (HIT)`
  const hashtags = `juno7`

  return (
    <div className="row">
      <div className="col-sm-3">
        <FacebookShareButton
          url={url}
          quote={title}
          hashtag={hashtags.split(' ').join(' #')}>
          <FacebookIcon size={48} style={{ borderRadius: 4, color: colors.facebook }} />
        </FacebookShareButton>
      </div>
      <div className="col-sm-3">
        <TwitterShareButton
          url={url}
          title={title}
          via={TWITTER_HANDLE}
          hashtags={hashtags.split(' ')}>
          <TwitterIcon size={48} style={{ borderRadius: 4, color: colors.twitter }} />
        </TwitterShareButton>
      </div>
      <div className="col-sm-3">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={48} style={{ borderRadius: 4, color: colors.whatsapp }} />
        </WhatsappShareButton>
      </div>
      <div className="col-sm-3">
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={48} style={{ borderRadius: 4, color: colors.telegram }} />
        </TelegramShareButton>
      </div>
    </div>
  )
}
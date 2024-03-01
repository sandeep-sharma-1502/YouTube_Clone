import React from 'react'

const VideoCart = ({info}) => {

    // const im="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4="

  return (
    <div className='h-[300px] w-[290px] m-[8px]'>
         <img alt='logo' className='rounded-lg' src={info?.snippet?.thumbnails?.maxres?.url}/>
         <div>
            <div>

            </div>
            <div>
                <h1 className='font-medium text-[16px] truncate'>{info.snippet.title}</h1>
                <h1>{info?.snippet?.channelTitle}</h1>
                <h1>{info?.statistics?.viewCount}</h1>
            </div>
        </div>
    </div>
  )
}

export default VideoCart
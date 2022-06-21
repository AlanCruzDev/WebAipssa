import React from 'react'
import ReactPlayer from 'react-player';


export const Video = ({ url, estilos }) => {
    return (
        <ReactPlayer
            url={url}
            width='45%'
            height='350px'
            controls
            playing
            muted
            playbackRate={1.75}
            className={estilos}
        />

    )
}

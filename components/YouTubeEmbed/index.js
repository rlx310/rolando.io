import React from 'react'
import styled from 'styled-components'

const YouTubeEmbed = ({ videoId }) => {
  return (
    <IFrameContainer>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </IFrameContainer>
  )
}

const IFrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-bottom: 20px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export default YouTubeEmbed

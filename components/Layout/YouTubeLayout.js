import React from 'react'
import Layout from './MDXLayout'
import YouTubeEmbed from '../YouTubeEmbed'

const YouTubeLayout = ({
  courseName,
  lessonName,
  path,
  showPrev,
  showNext,
  videoId,
  children
}) => {
  const sliceIndex = path.lastIndexOf('lesson') + 6
  const basePath = path.slice(0, sliceIndex)
  const lessonNum = Number(path.slice(sliceIndex))
  const prevPath = showPrev ? basePath + (lessonNum - 1) : null
  const nextPath = showNext ? basePath + (lessonNum + 1) : null
  console.log(basePath, lessonNum)

  return (
    <Layout noNav prev={prevPath} next={nextPath}>
      <h1>{courseName}</h1>
      <h5>Lesson #{lessonNum}</h5>
      <h4>{lessonName}</h4>
      <hr />
      <YouTubeEmbed videoId={videoId} />
      {children}
    </Layout>
  )
}

export default YouTubeLayout

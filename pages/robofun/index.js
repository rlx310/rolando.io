import React from 'react'

import CourseLayout from '../../components/Layout/CourseLayout'
import Card from '../../components/Card'

const RoboFunHomePage = () => {
  const thumbnail = '/static/pages/robofun/Robofun.png'
  const baseHref = '/robofun/'
  const getFullHref = (slug) => baseHref + slug

  return (
    <CourseLayout heroThumbnail={thumbnail}>
      <Card src={thumbnail} href={getFullHref('lesson1')} horizontal>
        <h5>Lesson #1</h5>
        <h3>What is JavaScript?</h3>
        <p>
          Get an overview of what JavaScript is, where its used, and what you
          can build with it.
        </p>
      </Card>
    </CourseLayout>
  )
}

export default RoboFunHomePage

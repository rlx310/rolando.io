import React from 'react'

import CourseLayout from '../../components/Layout/CourseLayout'
import Card from '../../components/Card'

const JSPage = () => {
  const thumbnail = '/static/pages/javascript/js.svg'
  const baseHref = '/javascript/'
  const getFullHref = (slug) => baseHref + slug

  return (
    <CourseLayout heroThumbnail={thumbnail}>
      <Card src={thumbnail} href={getFullHref('lesson1')} horizontal></Card>
    </CourseLayout>
  )
}

export default JSPage

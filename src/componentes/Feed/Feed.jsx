import React, { useEffect, useState } from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)
  return (
    <div className="animeLeft">
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed

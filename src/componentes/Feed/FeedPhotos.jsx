import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './feedPhotos.module.css'
const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })

      const { response, json } = await request(url, options)
    }

    fetchPhotos()
  }, [])

  if (error) return <Error error={error} />

  if (loading) return <Loading />

  return (
    <ul className={`animeLeft ${styles.feed}`}>
      {data &&
        data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
    </ul>
  )
}

export default FeedPhotos

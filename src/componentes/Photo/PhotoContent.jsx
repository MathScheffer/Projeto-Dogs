import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom'
const PhotoContent = ({ data }) => {
  if (data) {
    const { photo, comments } = data
    console.log(comments)
    return (
      <div className={styles.photo}>
        <div className={styles.img}>
          <img src={photo.src} alt={photo.title} />
        </div>
        <div className={styles.details}>
          <div>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span className={styles.visualizacoes}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className={styles.atributos}>
              <li>{photo.peso} kg</li>
              <li>{photo.idade} ano(s)</li>
            </ul>
          </div>
        </div>
        <PhotoContent id={photo.id} comments={comments} />
      </div>
    )
  } else {
    return null
  }
}

export default PhotoContent

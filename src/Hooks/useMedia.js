import React, { useEffect, useState } from 'react'

const useMedia = (media) => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)

    return () => window.addEventListener('resize', changeMatch)
  }, [media])
  return match
}

export default useMedia

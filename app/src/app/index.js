import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import UserCard from './children/user_card'
import Caption from './children/caption'
import UserComments from './children/user_comments'
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserCard  data={data} style={styles.userCard}/> 
        <hr style={styles.divider} />
        <Caption data={data} />
        <UserComments data={data.edge_media_to_comment.edges} />
        <LikeButton />
      </div>
    </main>
  )
}

export default App

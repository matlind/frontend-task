import React from 'react'
import styles from './styles'

const UserComment = (props) => {
  const { comment } = props
  return (
    <div style={styles.container}>
      <span style={styles.user}> {comment.node.owner.username} </span>
      <span style={styles.commentText}> {comment.node.text} </span>
    </div>
  )
}

export default UserComment

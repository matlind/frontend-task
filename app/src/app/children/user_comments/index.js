import React from "react";
import UserComment from "./children/user_comment";
import styles from "./styles";

const UserComments = (props) => {
  const { data } = props;
  return (
    <div id="userComments" style={styles.userComments}>
      <div style={styles.commentsContainer}>
        {data.map((comment) => {
          return <UserComment key={comment.node.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default UserComments;

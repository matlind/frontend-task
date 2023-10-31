import React from "react";
import UserComment from "./children/user_comment";
import styles from "./styles";

const UserComments = (props) => {
  const { data } = props
  return (
    <div style={styles.userComments}>
      {data.map((comment) => {
        return <UserComment key={comment.node.id} comment={comment} />;
      })}
    </div>
  );
};

export default UserComments;

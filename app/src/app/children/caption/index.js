import React from "react";
import styles from "./styles";

const Caption = (props) => {
  const { data } = props;
  return (
    <p style={styles.caption}>
      <span style={styles.username}>{data.owner.username}</span>
      {data.edge_media_to_caption.edges[0].node.text}
    </p>
  );
};

export default Caption;

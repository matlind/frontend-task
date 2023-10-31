import React from "react";
import styles from "./styles";

const Caption = (props) => {
  const { data } = props;
  return (
    <div style={styles.container}>
    <div style={styles.username}> {data.owner.username}</div>
    <div> {data.edge_media_to_caption.edges[0].node.text} </div>
    </div>
  );
};

export default Caption;

import React from "react";
import styles from "./styles";

const UserCard = (props) => {
  const { data } = props;
  return <div style={styles.userCard}>
  <img src={data.owner.profile_pic_url} 
        style={styles}
        alt={data.owner.username}
        >
  </img>
  <div>
  <p style={styles.username}>{data.owner.username}</p>
  <p style={styles.location}>{data.location.name}</p> 
  </div>
  </div>
};

export default UserCard;

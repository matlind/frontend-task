import React from "react";
import styles from "./styles";

const UserCard = (props) => {
  const { data } = props;
  return (
    <div style={styles.userCard}>
      <div style={styles.imageContainer}>
        <img
          src={data.owner.profile_pic_url}
          style={styles.image}
          alt={data.owner.username}
        ></img>
      </div>
      <div style={styles.userInfo}>
        <p style={styles.username}>{data.owner.username}</p>
        <p style={styles.location}>{data.location.name}</p>
      </div>
    </div>
  );
};

export default UserCard;

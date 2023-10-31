/* eslint-disable import/no-anonymous-default-export */

export default {
  userCard: {
    flex: "0 1",
    display: "flex", // Add this line to use flexbox
    alignItems: "center", // To vertically align items in the middle
    gap: "10px", // Spacing between child elements (optional)
  },
  imageContainer: {
    flexBasis: "15%",
  },
  image: {
    maxWidth: "100%",
  },
  userInfo: {
    flexBasis: "85%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  username: {
    fontWeight: "bold",
    margin: 0,
  },
  location: {
    margin: 0,
  },
};

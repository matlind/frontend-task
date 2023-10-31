/* eslint-disable import/no-anonymous-default-export */

export default {
    userCard: {
        display: 'flex',        // Add this line to use flexbox
        alignItems: 'center',   // To vertically align items in the middle
        gap: '10px',           // Spacing between child elements (optional)
      },
  userInfo: {
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
  },
  username: {
    fontWeight: 'bold', // Make username bold
  }
}
/* eslint-disable import/no-anonymous-default-export */
export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '1200px',  // half of 1200px
    height: '65vh',     // half of 90vh
    margin: '5vh auto', // to keep it centered
    width: 'calc(100% - 40px)',
    flexWrap: 'nowrap',
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 65%',
    display: 'flex',         // Use flexbox for the container
    justifyContent: 'center', // Center the child horizontally
    alignItems: 'center',    // Center the child vertically
    padding: '25px 0',       // Adjust the padding to ensure equal distance from top and bottom
  },

  text: {
    order: '1',
    backgroundColor: '#fff',
    flex: '1 0 30%',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    marginLeft: '15px',  
    padding: '15px',
  },

  userCard: {
    marginBottom: '10px', 
  },

  divider: {
    width: 'calc(100% - 20px)',  
    border: '0.5px solid rgba(224, 224, 224, 0.5)', 
    margin: '10px 10px'
  },

}

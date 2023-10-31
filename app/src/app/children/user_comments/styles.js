/* eslint-disable import/no-anonymous-default-export */
export default {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',     // This ensures that items can wrap onto the next line
        alignItems: 'flex-start', 
    },
    user: {
        fontWeight: 'bold',
        marginRight: '8px', // Some space between username and the comment
      },
      
      commentText: {
        flex: '1', // This will allow the comment text to take up the remaining space
        wordWrap: 'break-word', // Ensure long words can break and wrap
      },
      

}

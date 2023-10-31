/* eslint-disable import/no-anonymous-default-export */
export default {
    container: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr', // username takes the space it needs, comment fills the rest
      alignItems: 'start',
      gap: '5px',
    },
  
    user: {
      fontWeight: 'bold',
      gridColumn: '1 / 2',
      gridRow: '1 / 3',  // spans 2 rows to ensure comment wraps underneath
    },
  
    commentText: {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
      textAlign: 'left',
      wordBreak: 'break-word',
    },
  
    // ... rest of the styles unchanged
  }
  
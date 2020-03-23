import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
// import { useQuery } from '@apollo/react-hooks'
// import { GET_SCHEDULES } from 'apollo/home/types'
// import { ListItem, List, ListItemText, Box } from '@material-ui/core'
// <List>
//         {cursos.map((curso, index) => {
//           return (
//             // eslint-disable-next-line react/no-array-index-key
//             <ListItem key={index}>
//               <ListItemText>{curso.code}</ListItemText>
//             </ListItem>
//           )
//         })}
//       </List>
// const { data, loading } = useQuery(GET_SCHEDULES)
// if(loading) return (<div>Loading ...</div>)

// const { getSchedules: cursos } = data
// const Calendario = () => {

//   return (
//     <Box height="100%" overflow="auto" />
//   )
// }

class Calendario extends React.Component {
  render() {
    const count = 0
    return (
      <div>
        <IconButton>
          <AddIcon />
        </IconButton>
        {count}
      </div>
    )
  }
}

export default Calendario
import React from 'react'
import { Typography , Box } from '@material-ui/core'

export function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box style={{ height: '100%' }}>{children}</Box>}
    </Typography>
  )
}
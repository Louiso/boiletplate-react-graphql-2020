import React from 'react'
import { Paper , Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { TabPanel } from 'components/__globals'


export default () => {
  const classes = useStyles()
  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Paper className={classes.root}>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          Calendario
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          Foro
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}> 
          La burra
        </TabPanel>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Horario" />
          <Tab label="Foro" />
          <Tab label="La Burra" />
        </Tabs>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(() => ({ root: {  }, tabPanel: { height: 'calc(100vh - 48px)' }}))
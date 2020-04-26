
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { ACTIVITIES } from '../mockdata/activities';
import ActivityLog from './dashboard/ActivityLogComponent';
import Board from './dashboard/BoardComponent';
import Stats from './dashboard/StatsComponent';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabPanel: {
    width:'100%',
    height:'40em'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs centered value={value} onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="simple tabs example">
            <Tab label="Board" {...a11yProps(0)} />
            <Tab label="Activity Log" {...a11yProps(1)} />
            <Tab label="Statistics" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          <Board />
      </TabPanel>
        <TabPanel className={classes.tabPanel}  value={value} index={1}>
          <ActivityLog activities={ACTIVITIES}/>
      </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={2}>
          <Stats/>
      </TabPanel>
      </div>
    </Container>
  );
}

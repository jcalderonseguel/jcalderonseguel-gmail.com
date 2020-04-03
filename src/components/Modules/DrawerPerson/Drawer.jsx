import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Personalinfo from '../PersonalInfo/Personalinfo'
import '../../Styles/Drawer.css'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  drawer: {
    minWidth: '500px'
  }
});

const TemporaryDrawer = (props) => {

  const personId = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  console.log('CLASES CSS')
  console.log(classes)
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['+'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={'Button-Plus'}>{anchor}</Button>
          <Drawer className='Drawer-Box' anchor={'right'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <Personalinfo personId={personId}/>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer
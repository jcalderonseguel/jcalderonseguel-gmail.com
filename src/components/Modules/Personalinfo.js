import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  left: {
    fontSize: 14,
  },
  right: {
    fontSize: 14,
    paddingLeft: '10px'
  },
  pos: {
    marginBottom: 12,
  },
  cardcontent: {
    textAlign:'left'
  },
  tr: {
    paddingTop:'10px'
  },
  title: {
    textAlign:'center',
    paddingRight: '10px',
    paddingBottom: '20px',
    textDecoration:'underline'
  }
});

const Personalinfo = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
      <React.Fragment>
        <Typography className={classes.title} color="textPrimary">
        Tarjeta de persona
        </Typography>
        <tr className={classes.tr}>
         <td className={classes.firstcolumn}> 
          <Typography className={classes.left} color="textPrimary">
            Nombre Persona: 
          </Typography>
          </td>
          <td className={classes.secondcolumn}>
          <Typography className={classes.right} color="textPrimary">
            Franco Arenas
          </Typography>
          </td>
        </tr>
        <tr>
         <td className={classes.firstcolumn}> 
          <Typography className={classes.left} color="textPrimary">
            Dirección: 
          </Typography>
          </td>
          <td className={classes.secondcolumn}>
          <Typography className={classes.right} color="textPrimary">
            Cochrane 12356
          </Typography>
          </td>
        </tr>
        <tr>
         <td className={classes.firstcolumn}> 
          <Typography className={classes.left} color="textPrimary">
            Cel: 
          </Typography>
          </td>
          <td className={classes.secondcolumn}>
          <Typography className={classes.right} color="textPrimary">
            +56990590045
          </Typography>
          </td>
        </tr>
      </React.Fragment>
      </CardContent>

      <CardActions>
        <Button size="small">Ver Detalle</Button>
      </CardActions>
    </Card>
  );
}

export default Personalinfo
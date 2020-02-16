import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function Form() {
  const classes = useStyles();

  function fn23(){ location.reload() }

  return (
    <form onSubmit={fn23} id='insertform' className={classes.container} noValidate autoComplete="off">
    <div>
      <TextField
        id="tourPrice"
        className={classes.textField}
        label="Tour Price"
        margin="normal"
      />
    </div>
    <div>
      <TextField
        id="tourDescription"
        className={classes.textField}
        label="Tour Description"
        margin="normal"
      />
    </div>
    <div style={{marginTop: "30px"}}>
    <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Insert
      </Button>
    </div>
    </form>
  );
}

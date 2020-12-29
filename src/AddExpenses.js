import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function AddExpenses(props) {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', share:0, paid:0 },]);

  const[paidBill,setPaidBill]=useState(0);
  const[totalBill,setTotalBill]=useState(0);
  let newTotal=0;


  const handleSubmit = (event) => {

    event.preventDefault();
    props.history.push({pathname:'/dashboard',
    inputFields});
    console.log("InputFields", inputFields);
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      newTotal+=Number(i.paid);
      setPaidBill(newTotal);
      
      return i;
    })
    
    setInputFields(newInputFields);
    
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  firstName: '', share:'', paid:''}])
  }



  return (
    <Container>
      <h1>SplitWise App</h1>
      <br/>
      <h4>Total:</h4>
      <TextField
             type="number"
              name="totalBill"
              label="Total Bill"
              variant="filled"
              value={totalBill}
              onChange={event => setTotalBill(event.target.value)}

          />
      <br/>
      <h3>Add New Member</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="firstName"
              label="User Name"
              variant="filled"
              required
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
         
             <TextField
             type="number"
              name="share"
              label="Share"
              variant="filled"
              value={inputField.share}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
             type="number"
              name="paid"
              label="Paid"
              variant="filled"
              value={inputField.paid}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <h3>Paid Bill: {paidBill}</h3>
        <br/>
          
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>
    </Container>
  );
}

export default AddExpenses;

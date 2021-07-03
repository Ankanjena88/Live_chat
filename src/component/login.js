import { Grid,Paper,Avatar,TextField,Button,Typography,Link} from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const login = () => {
    const paperstyle={padding: 20,height:'70vh',width:280,margin:'20px auto'}
    const avatarstyle={backgroundColor:'pink'}
    const btnstyle={margin:'8px 0'}
    return (
       <Grid>
           <Paper elevation={10} style={paperstyle}>
           <Grid align='center'>
           <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
           <h2>SIGN IN</h2>
           </Grid>
           <TextField label='Username' placeholder='Enter username' fullWidth required />
           <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
           <FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />
      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth><a href="https://pluralsight.com">SIGN IN</a></Button>
      <Typography>
      <Link href="#">
        Forgot Password
       </Link>
      </Typography>

      <Typography>
      Do You have an account ?
      <Link href="#">
        Sign Up
       </Link>
      </Typography>

           </Paper>
       </Grid>
    )
}

export default login

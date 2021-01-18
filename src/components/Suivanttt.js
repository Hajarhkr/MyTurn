import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    h2:{
        color: '#7E7E7E',
        background:'transparent',
        frontSize:'100px',
        //backgroundColor:'#30336b',
        padding:'-10px 0 2px 0',
        marginBottom:'2px',
        width:'50%',
        
     },

    h1:{
        color: '#7E7E7E',
        background:'transparent',
        frontSize:'100px',
        //backgroundColor:'#30336b',
        padding:'6px 0 2px 0',
        marginBottom:'10px',
        width:'70%',
        boxShadow:'5px 5px 15px -5px rgba(0, 0, 0, 0.3)',
     },
center_div:{
    width: '50%',
    height: '80vh',
    backgroundColor: '#f4f4f4',
    boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5) ',
    borderRadius: '10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
},

main_div:{
    width: '100%',
    height: '100vh',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
},

button: {
    minHeight:'60px',
    borderRadius:'5%',
    borderColor:'transparent',
    backgroundColor:'#30336b',
    color:'white',
    frontSize:'200px',
    border:'none',
    outline:'none',
    padding:'0 50px',
    marginTop:'100px',
    boxShadow:'5px 5px 15px -5px rgba(0, 0, 0, 0.3)'},
    

btn_div: {
    width: '100%',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center'
},
icon: {
    marginRight: theme.spacing(2),
  }

}


)
)



export default function Suivanttt() {

    const classes = useStyles();
   

    const[num, setNum] = useState(0)
    const incNum = () => {
        setNum(num+1)
    }

    


    return(
        <>
        <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            id:...
          </Typography>
        </Toolbar>
      </AppBar>
        <div className={classes.main_div}>
            <div className={classes.center_div}>
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            CIH BANK
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Payement
            </Typography>
            <h1>Nombre en cours :</h1>
                {/* <h1>CIH BANK
                <p className={classes.h2} >
                payement</p>
                </h1>
                 */}
                <h2 className={classes.h1}>{num}</h2>
               
                <h1>Nombre Total:</h1>
                <h2 className={classes.h1}>{num}</h2>               
                
                <div className={classes.btn_div}>
                   
                    <button className={classes.button} onClick={incNum}> Suivant</button>
                    
                    <button className={classes.button}> Actualiser </button>


                </div>
            </div>

            

        </div>  
        
        </>
  
    )
}


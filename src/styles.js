import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    container: {
        backgroundColor:theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight:'20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        padding:'56.25%'
    },
    cardContent:{
        flexGrow: 1
    },
    footer:{
        backgroundColor:'#3f51b5',
        padding:'7px 0'
    }
}));

export default useStyles;
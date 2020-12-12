const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
          height:'40px'
        },
    },
    mainContainer:{
        position:'absolute',
        marginLeft:'16px'
        // left: '256px',
        // top: '120px'
    },
    title:{
        height: '38px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '38px',
        color: '#262626',
    },
    name:{
        width:'256px',
        height: '22px',
        left: '0px',
        right: '0px',
        top: '0px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
        display: 'flex',
        alignItems: 'center',
        color: '#262626',
        flex: 'none',
        order: '0',
        alignSelf: 'stretch',
        flexGrow: '0',
        marginBottom: '2px',
        marginRight:'80px',
    },
    nameContainer:{
        top:'268px',
        left:'256px',
        marginBottom:'2px',
    },
    inputs:{
        background: '#FFFFFF',
        width:'256px',
        border: '1px solid #D9D9D9',
        boxSizing: 'border-box',
        bordenrRadius: '2px',
        marginRight:'80px',
    },
    resume:{
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
    },
    maleContainer:{
        height: '38px',
        left: '256px',
        top: '492px',  
    },
    maleTitle:{
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '38px',
        color: '#262626',
    },
    maleTypography:{
        marginLeft:'70px',
        marginTop:'11px',
        marginBottom:'5px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
        color: '#F5222D',
    },
    selectContainer:{
        top:'557px',
        left:'256px'
    }
}))

export default useStyles
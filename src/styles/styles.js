const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
    title:{
        position: 'absolute',
        width: '928px',
        height: '38px',
        left: '256px',
        top: '120px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '38px',
        color: '#262626',
    },
    name:{
        position: 'static',
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
        margin: '0px 2px',
        marginRight:'80px',
    },
    nameContainer:{
        position:'absolute',
        top:'268px',
        left:'256px',
        marginBottom:'2px'
    },
    inputs:{
        background: '#FFFFFF',
        width:'256px',
        border: '1px solid #D9D9D9',
        boxSizing: 'border-box',
        bordenrRadius: '2px',
        marginRight:'80px'
    },
    resume:{
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
    },
    maleContainer:{
        position: 'absolute',
        width: '928px',
        height: '38px',
        left: '256px',
        top: '492px',  
    },
    maleTitle:{
        position:'absolute',
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
})

export default useStyles
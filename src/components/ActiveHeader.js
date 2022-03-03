import { Button } from "@mui/material";

const ActiveHeader = (props)=>{
    const bgColor = props.location.pathname === props.to ? '#696969': '#15151F'
    return (
        <Button
                component={props.component}
                to={props.to}
                color={props.color} 
                style={{
                    backgroundColor: bgColor
                }}
              >
                {props.text}
        </Button>
    )
}

export default ActiveHeader
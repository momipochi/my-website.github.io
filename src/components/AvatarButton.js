import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material";

const StyledButton = styled(IconButton)`
  
  padding: 0px 0px;
  &:hover {
    background-color: #BEBFD1;
  }
  &:focus {
    background-color: green;
  }
`;

const AvatarButton = (props) => {
  return (
    <StyledButton href={props.url}>
      <IconButton >
        <Avatar variant="square" alt={props.alt} src={props.src}></Avatar>
      </IconButton>
    </StyledButton>
  );
};

export default AvatarButton;

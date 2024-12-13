import Link from "next/link";
import { Button as MuiButton } from '@mui/material';

export default function Button(props) {
  if (props.lnk) {
    return (
      <MuiButton
        component={Link}
        href={props.lnk}
        variant="contained"
        sx={{
          textTransform: 'none',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
      >
        {props.children}
      </MuiButton>
    );
  } else {
    return (
      <MuiButton
        variant="contained"
        onClick={props.onClick}
        sx={{
          textTransform: 'none',
          padding: '10px 5px',
          backgroundColor: '#007bff',
          color: 'white',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
      >
        {props.children}
      </MuiButton>
    );
  }
}

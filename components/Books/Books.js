import { Card, CardContent, CardActions, Typography } from '@mui/material';
import Button from '../ui/Button';

export default function Books(props) {
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: 3,
        borderRadius: 3,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: "0.5rem" ,  textAlign: "center"}}
        >
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          lnk={`/books/${props.id}`}
          sx={{
            padding: "0.5rem 1.5rem",
            textTransform: "none",
            backgroundColor: "#0070f3",
            color: "#fff",
            '&:hover': {
              backgroundColor: "#005bb5",
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

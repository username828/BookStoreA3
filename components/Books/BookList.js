import { Box } from '@mui/material';
import Books from './Books';

export default function BookList(props) {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: { xs: '0.5rem', sm: '1rem' }, // Reduce padding on small screens
        display: 'grid',
        gap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Ensure books fit nicely on smaller screens
      }}
    >
      {props.list.map((book) => (
        <Books key={book.id} id={book.id} title={book.title} />
      ))}
    </Box>
  );
}

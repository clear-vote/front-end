import { Button } from '@mui/material';

export const MyButton = () => {
  return (
    <Button
      sx={{
        height: '300px',
        width: {
          xs: 100,
        },
        bgcolor: 'primary.main'
      }}
    ></Button>
  )
}
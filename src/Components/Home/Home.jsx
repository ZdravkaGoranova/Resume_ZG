import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

export default function Home() {


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="/image-zdravka-goranova.png"
          sx={{ width: 156, height: 156 }}
        />
      </Stack>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    </>
  );
}

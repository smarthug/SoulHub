import { Typography, Stack } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">404 - Not Found</Typography>
      <Typography variant="body1">존재하지 않는 페이지입니다.</Typography>
    </Stack>
  );
}

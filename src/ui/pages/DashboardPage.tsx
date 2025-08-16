import { Typography, Paper, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Dashboard</Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Welcome to SoulHub Frontend Skeleton</Typography>
        <Typography variant="body1" paragraph>
          이곳에서 AI Character 를 관리, 검증, 배포하는 UI 를 구성할 예정입니다.
        </Typography>
        <Button variant="contained" component={RouterLink} to="/characters">View Characters</Button>
      </Paper>
    </Stack>
  );
}

import { Stack, Typography, Paper, LinearProgress } from '@mui/material';

export default function VerifyPage() {
  const categories = [
    { k: 'violence', v: 1 },
    { k: 'horror', v: 1 },
    { k: 'sexual', v: 0 },
    { k: 'language', v: 1 }
  ];
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Verify</Typography>
      <Paper variant="outlined" sx={{ p:3 }}>
        {categories.map(c => (
          <Stack key={c.k} spacing={1} sx={{ mb:2 }}>
            <Typography variant="body2">{c.k}</Typography>
            <LinearProgress variant="determinate" value={c.v*20} />
          </Stack>
        ))}
      </Paper>
    </Stack>
  );
}

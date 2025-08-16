import { Stack, Typography, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>About SoulHub</Typography>
      <Paper variant="outlined" sx={{ p:3 }}>
        <Typography variant="body1" paragraph>
          SoulHub aims to be the GitHub for AI Characters: transparent versioned development, safety validation, and reproducibility.
        </Typography>
        <Typography variant="body2" color="text.secondary">Vision / Team / Contact: TBD</Typography>
      </Paper>
    </Stack>
  );
}

import { Stack, Typography } from '@mui/material';
import CommitTimeline from '../components/character/CommitTimeline';
import type { CommitMeta } from '../../types/character';

export default function CommitPage() {
  const commits: CommitMeta[] = [
    { id: 'a1b2c3d', message: 'feat: initial persona', timestamp: new Date().toISOString(), author: 'alice', safetyScore: 1.1 },
    { id: 'd4e5f6g', message: 'refactor: adjust memory policy', timestamp: new Date(Date.now()-3600_000).toISOString(), author: 'bob', safetyScore: 1.0 }
  ];
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Commit History</Typography>
      <CommitTimeline commits={commits} />
    </Stack>
  );
}

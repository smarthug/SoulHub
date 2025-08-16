import { Box, Typography, Stack, Avatar, Paper } from '@mui/material';
import type { CommitMeta } from '../../../types/character';

interface Props { commits: CommitMeta[] }
export default function CommitTimeline({ commits }: Props) {
  return (
    <Stack spacing={2}>
      {commits.map(c => (
        <Paper key={c.id} variant="outlined" sx={{ p:2, display:'flex', gap:2, alignItems:'flex-start' }}>
          <Avatar sx={{ width:32, height:32 }}>{c.author[0]}</Avatar>
          <Box flexGrow={1}>
            <Typography variant="subtitle2">{c.message}</Typography>
            <Typography variant="caption" color="text.secondary">{c.id} • {new Date(c.timestamp).toLocaleString()} • {c.author}</Typography>
          </Box>
          {c.safetyScore != null && (
            <Typography variant="caption" color="text.secondary">Seal {c.safetyScore}</Typography>
          )}
        </Paper>
      ))}
    </Stack>
  );
}

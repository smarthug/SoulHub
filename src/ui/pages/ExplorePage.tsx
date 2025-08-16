import { Suspense, useState } from 'react';
import { Stack, Typography, TextField, Chip, Box } from '@mui/material';
import CharacterCard from '../components/character/CharacterCard';
import type { CharacterSummary } from '../../types/character';

const mock: CharacterSummary[] = [
  { id: 'medieval_bard', name: 'Elian the Bard', description: 'Cheerful medieval storyteller.', version: '0.1.3', risk: { violence:1, horror:1, sexual:0, language:1 }, tags:['fantasy','bard','story'], stars: 12 },
  { id: 'cyber_detective', name: 'Cypher', description: 'Neo-noir investigative AI.', version: '0.0.9', risk: { violence:1, horror:1, sexual:0, language:1 }, tags:['cyberpunk','detective'], stars: 20 }
];

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const filtered = mock.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Explore</Typography>
      <TextField size="small" placeholder="Search characters" value={query} onChange={e=>setQuery(e.target.value)} />
      <Box sx={{ display:'flex', gap:2, flexWrap:'wrap' }}>
        {filtered.map(c => <CharacterCard key={c.id} character={c} />)}
      </Box>
      <Suspense fallback={null} />
      <Stack direction="row" spacing={1}>
        <Chip label="Filter: Low Risk" size="small" />
        <Chip label="Filter: Fantasy" size="small" />
      </Stack>
    </Stack>
  );
}

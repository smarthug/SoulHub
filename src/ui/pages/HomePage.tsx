import { Stack, Typography, Button, Box } from '@mui/material';
import CharacterCard from '../components/character/CharacterCard';
import type { CharacterSummary } from '../../types/character';
import { Link as RouterLink } from 'react-router-dom';

const recent: CharacterSummary[] = [
  { id: 'medieval_bard', name: 'Elian the Bard', description: 'Cheerful medieval storyteller.', version: '0.1.3', risk: { violence:1, horror:1, sexual:0, language:1 }, tags:['fantasy','bard','story'], stars: 12 },
  { id: 'cyber_detective', name: 'Cypher', description: 'Neo-noir investigative AI.', version: '0.0.9', risk: { violence:1, horror:1, sexual:0, language:1 }, tags:['cyberpunk','detective'], stars: 20 },
  { id: 'space_medic', name: 'Astra Medic', description: 'Compassionate starship doctor.', version: '0.2.1', risk: { violence:0, horror:0, sexual:0, language:0 }, tags:['sci-fi','support'], stars: 5 },
];

export default function HomePage() {
  return (
    <Stack spacing={6}>
      <Stack spacing={2} textAlign="center">
        <Typography variant="h3" fontWeight={800}>SoulHub</Typography>
        <Typography variant="h5" color="text.secondary">The GitHub for AI Characters</Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt:2 }}>
          <Button variant="contained" size="large" component={RouterLink} to="/explore">Explore</Button>
          <Button variant="outlined" size="large" component={RouterLink} to="/create">Create</Button>
        </Stack>
      </Stack>
      <div>
        <Typography variant="h6" gutterBottom>Recently Added</Typography>
        <Box sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }
        }}>
          {recent.map(c => (<CharacterCard key={c.id} character={c} />))}
        </Box>
      </div>
    </Stack>
  );
}

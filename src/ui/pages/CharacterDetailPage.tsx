import { useParams } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';
import CharacterProfile from '../components/character/CharacterProfile';
import CommitTimeline from '../components/character/CommitTimeline';

export default function CharacterDetailPage() {
  const { id } = useParams();
  const characterId = id || 'unknown';
  const mockRisk = { violence: 1, horror: 1, sexual: 0, language: 1 };
  const mockIngredients = { baseModel: 'llama3-8b-instruct', fineTuneDataset: 'guild_lore_v1', extraKnowledge: ['lore/books.md'] };
  const commits = [
    { id: 'a1b2c3d', message: 'feat: initial persona', timestamp: new Date().toISOString(), author: 'alice', safetyScore: 1.1 },
    { id: 'd4e5f6g', message: 'chore: adjust style guidelines', timestamp: new Date(Date.now()-3600_000).toISOString(), author: 'bob', safetyScore: 1.0 }
  ];
  return (
    <Stack spacing={4}>
      <Typography variant="h4" fontWeight={700}>Character</Typography>
      <CharacterProfile id={characterId} name={characterId.replace(/_/g,' ')} description="Storytelling focused bard NPC." risk={mockRisk} ingredients={mockIngredients} />
      <div>
        <Typography variant="h6" gutterBottom>Commit History</Typography>
        <CommitTimeline commits={commits} />
      </div>
    </Stack>
  );
}

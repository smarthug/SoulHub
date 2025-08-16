import { Card, CardContent, CardHeader, Avatar, Typography, Stack, Chip, Tooltip, Box } from '@mui/material';
import SafetySeal from './SafetySeal';
import { Link } from 'react-router-dom';
import type { CharacterSummary } from '../../../types/character';

interface Props { character: CharacterSummary; }

export default function CharacterCard({ character }: Props) {
  const { id, name, description, avatarUrl, risk, tags = [], stars } = character;
  return (
    <Card variant="outlined" sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={<Avatar src={avatarUrl}>{name[0]}</Avatar>}
        title={<Link to={`/characters/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{name}</Link>}
        subheader={stars != null ? `★ ${stars}` : undefined}
        action={<Box sx={{ pr:1 }}><SafetySeal risk={risk} size="small" /></Box>}
      />
      <CardContent sx={{ pt: 0, flexGrow:1 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom noWrap>{description}</Typography>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
          {tags.slice(0,4).map(t => <Chip key={t} size="small" label={t} />)}
          {tags.length>4 && <Tooltip title={tags.slice(4).join(', ')}><Chip size="small" label={"+"+(tags.length-4)} /></Tooltip>}
        </Stack>
      </CardContent>
    </Card>
  );
}

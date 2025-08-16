import { Stack, Avatar, Typography, Paper, Box, Button } from '@mui/material';
import SafetySeal from './SafetySeal';
import IngredientTable from './IngredientTable';
import type { RiskProfile, IngredientMeta } from '../../../types/character';

interface Props {
  id: string;
  name: string;
  description?: string;
  avatarUrl?: string;
  risk: RiskProfile;
  ingredients: IngredientMeta;
}

export default function CharacterProfile(props: Props) {
  const { id, name, description, avatarUrl, risk, ingredients } = props;
  return (
    <Paper variant="outlined" sx={{ p:3 }}>
      <Stack direction={{ xs:'column', sm:'row' }} spacing={3}>
        <Avatar src={avatarUrl} sx={{ width:96, height:96, fontSize:40 }}>{name[0]}</Avatar>
        <Stack spacing={1} flexGrow={1}>
          <Typography variant="h5" fontWeight={700}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">ID: {id}</Typography>
          {description && <Typography variant="body1" sx={{ mt:1 }}>{description}</Typography>}
          <Box sx={{ mt:1 }}>
            <SafetySeal risk={risk} />
          </Box>
          <Stack direction="row" spacing={1} sx={{ mt:1 }}>
            <Button size="small" variant="contained">Fork Character</Button>
            <Button size="small" variant="outlined">Run API Demo</Button>
          </Stack>
        </Stack>
        <IngredientTable ingredients={ingredients} />
      </Stack>
    </Paper>
  );
}

import { Stack, Typography, TextField, Paper, Button } from '@mui/material';
import { useState } from 'react';

export default function CreatePage() {
  const [json, setJson] = useState(`{\n  "name": "New Character",\n  "persona": "Describe persona here"\n}`);
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Create Character</Typography>
      <Paper variant="outlined" sx={{ p:2, display:'flex', gap:2, flexDirection:{ xs:'column', md:'row' } }}>
        <TextField
          label="Character JSON"
          multiline
          minRows={16}
          value={json}
          onChange={e=>setJson(e.target.value)}
          sx={{ flex:1, fontFamily:'monospace' }}
        />
        <Paper variant="outlined" sx={{ p:2, flex:1, bgcolor:'grey.50' }}>
          <Typography variant="subtitle1" gutterBottom>Preview</Typography>
          <pre style={{ margin:0, fontSize:12, whiteSpace:'pre-wrap' }}>{json}</pre>
        </Paper>
      </Paper>
      <Button variant="contained">Save & Commit</Button>
    </Stack>
  );
}

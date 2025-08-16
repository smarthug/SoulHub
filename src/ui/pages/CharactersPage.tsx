import { useState } from 'react';
import { Typography, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface CharacterRow { id: string; name: string; version: string; risk: string; }

const mockData: CharacterRow[] = [
  { id: 'medieval_bard', name: 'Elian the Bard', version: '0.1.3', risk: 'Low' },
  { id: 'cyber_detective', name: 'Cypher', version: '0.0.9', risk: 'Medium' }
];

export default function CharactersPage() {
  const [rows] = useState<CharacterRow[]>(mockData);
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>Characters</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Risk</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(r => (
              <TableRow key={r.id} hover>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.version}</TableCell>
                <TableCell>{r.risk}</TableCell>
                <TableCell align="right">
                  <Button size="small" component={RouterLink} to={`/characters/${r.id}`} variant="outlined">Detail</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

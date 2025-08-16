import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import type { IngredientMeta } from '../../../types/character';

interface Props { ingredients: IngredientMeta }
export default function IngredientTable({ ingredients }: Props) {
  const rows = [
    ['Base Model', ingredients.baseModel],
    ['Fine-tune Dataset', ingredients.fineTuneDataset || '-'],
    ['Extra Knowledge', ingredients.extraKnowledge?.join(', ') || '-']
  ];
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ maxWidth: 560 }}>
      <Table size="small">
        <TableHead>
          <TableRow><TableCell colSpan={2}>Ingredients</TableCell></TableRow>
        </TableHead>
        <TableBody>
          {rows.map(([k,v])=> (
            <TableRow key={k}>
              <TableCell width={160}>{k}</TableCell>
              <TableCell>{v}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

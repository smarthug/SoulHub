import { Chip, Tooltip } from '@mui/material';
import type { RiskProfile } from '../../../types/character';

function aggregate(risk: RiskProfile) {
  const values = Object.values(risk).filter(v => typeof v === 'number') as number[];
  const avg = values.reduce((a,b)=>a+b,0)/values.length;
  return Math.round(avg*10)/10;
}

function color(score: number) {
  if (score < 0.8) return 'success';
  if (score < 1.5) return 'default';
  if (score < 2.2) return 'warning';
  return 'error';
}

interface Props { risk: RiskProfile; size?: 'small' | 'medium'; }
export default function SafetySeal({ risk, size='medium' }: Props) {
  const score = aggregate(risk);
  const label = `Seal ${score}`;
  const title = Object.entries(risk).map(([k,v])=>`${k}:${v}`).join(' | ');
  return (
    <Tooltip title={title} placement="top" arrow>
      <Chip size={size} color={color(score) as any} label={label} />
    </Tooltip>
  );
}

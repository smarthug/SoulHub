export interface RiskProfile { violence: number; horror: number; sexual: number; language: number; drugs?: number; crime?: number; gambling?: number; }
export interface IngredientMeta { baseModel: string; fineTuneDataset?: string; extraKnowledge?: string[]; }
export interface CharacterSummary {
  id: string;
  name: string;
  description?: string;
  avatarUrl?: string;
  version: string;
  risk: RiskProfile;
  tags?: string[];
  stars?: number;
}
export interface CommitMeta {
  id: string; // short sha
  message: string;
  timestamp: string;
  author: string;
  safetyScore?: number; // aggregated safety metric
  changedFiles?: number;
}

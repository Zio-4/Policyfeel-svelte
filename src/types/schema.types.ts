// Enums from schema
export enum PartyAffiliation {
  DEMOCRAT = 'DEMOCRAT',
  REPUBLICAN = 'REPUBLICAN',
  INDEPENDENT = 'INDEPENDENT',
  LIBERTARIAN = 'LIBERTARIAN',
  GREEN = 'GREEN',
  OTHER = 'OTHER',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
  OTHER = 'OTHER',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY'
}

export enum AgeRange {
  UNDER_18 = 'UNDER_18',
  AGE_18_24 = 'AGE_18_24',
  AGE_25_34 = 'AGE_25_34',
  AGE_35_44 = 'AGE_35_44',
  AGE_45_54 = 'AGE_45_54',
  AGE_55_64 = 'AGE_55_64',
  AGE_65_PLUS = 'AGE_65_PLUS',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY'
}

export enum VoteType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
  NEUTRAL = 'NEUTRAL'
}

// Interface definitions
export interface User {
  id: number;
  username: string;
  email: string;
  phone?: string | null;
  location: string;
  partyAffiliation?: PartyAffiliation | null;
  gender?: Gender | null;
  ageRange?: AgeRange | null;
  isVerified: boolean;
  createdAt: Date;
  comments?: Comment[];
  votes?: Vote[];
}

export interface BillFederal {
  id: number;
  congress: string;
  billType: string;
  billNumber: string;
  title: string;
  description: string;
  introducedDate: Date;
  originChamber: string;
  status: string;
  lastUpdated: Date;
  externalSourceUrl: string;
  sponsor: string;
  committees: string[];
  subjects: string[];
  statistics?: BillStatistic[];
  comments?: Comment[];
  votes?: Vote[];
}

export interface BillStatistic {
  id: number;
  billId: number;
  statisticType: string;
  value: any; // JSON type
  lastCalculated: Date;
  bill?: BillFederal;
}

export interface Comment {
  id: number;
  billId: number;
  userId: number;
  parentCommentId?: number | null;
  text: string;
  createdAt: Date;
  bill?: BillFederal;
  user?: User;
  parentComment?: Comment | null;
  replies?: Comment[];
}

export interface Vote {
  id: number;
  billId: number;
  userId: number;
  voteType: VoteType;
  createdAt: Date;
  bill?: BillFederal;
  user?: User;
} 
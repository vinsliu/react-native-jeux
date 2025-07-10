export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
  Result: {
    baseNumber: number;
    score: number;
    choice: string;
    winner: boolean;
  };
};

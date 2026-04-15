export interface LoessData {
  y: number[];
  x: number[];
  x2?: number[];
  w?: number[];
}

export interface LoessOptions {
  span?: number;
  band?: number;
  degree?: 0 | 1 | 2 | 'constant' | 'linear' | 'quadratic';
  normalize?: boolean;
  robust?: boolean;
  iterations?: number;
}

export interface LoessPredictData {
  x: number[];
  x2?: number[];
}

export interface LoessPredictResult {
  fitted: number[];
  betas: number[][];
  weights: number[][];
  halfwidth?: number[];
}

export interface LoessGridResult {
  x: number[];
  x_cut: number[];
  x2?: number[];
  x_cut2?: number[];
}

export default class Loess {
  constructor(data: LoessData, options?: LoessOptions);

  readonly transposedX: number[][];

  predict(data?: LoessPredictData): LoessPredictResult;
  grid(cuts: number[]): LoessGridResult;
}

declare class Loess {
  constructor(
    data: { x: number[]; y: number[]; x2?: number[]; w?: number[] },
    options?: {
      span?: number
      band?: number
      degree?: number | 'constant' | 'linear' | 'quadratic'
      normalize?: boolean
      robust?: boolean
      iterations?: number
    }
  )

  x: number[][]
  y: number[]
  w: number[]
  n: number
  d: number
  bandwidth: number
  transposedX: number[][]
  expandedX: number[][]
  options: Record<string, unknown>
  normalization?: Array<(arr: number[]) => number[]>

  predict(data: {
    x: number[]
    x2?: number[]
    x_cut?: number[]
    x_cut2?: number[]
  }): {
    fitted: number[]
    betas: number[][]
    weights: number[][]
    halfwidth?: number[]
  }

  grid(cuts: number[]): {
    x: number[]
    x2?: number[]
    x_cut: number[]
    x_cut2?: number[]
  }
}

export default Loess

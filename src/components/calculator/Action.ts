export type Action = {
  type:
    | 'ADD_DIGIT'
    | 'SET_OPERATION'
    | 'EVALUATE'
    | 'PERCENTAGE'
    | 'INVERT'
    | 'CLEAR'
  payload?: {
    digit?: string
    operation?: Operation
    jwt: string | null
  }
}

export type Operation =
  | '+'
  | '-'
  | '×'
  | '÷'
  | 'M+'
  | 'M-'
  | 'MR'
  | 'MC'
  | '^'
  | '√'

import { Operation } from './Action'

export type State = {
  previousValue: string
  currentValue?: string | null
  operation?: Operation
  overwrite?: boolean
  memory?: string
}

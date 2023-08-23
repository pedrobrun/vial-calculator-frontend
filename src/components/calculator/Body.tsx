import { Button } from './Button'
import { State } from './State'

export function Body({ state }: { state: State }) {
  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <Button type="clear">
        {!state?.currentValue && state.previousValue === '0' ? 'AC' : 'C'}
      </Button>

      <Button type="clear">+/-</Button>
      <Button type="clear">%</Button>
      <Button type="operator">÷</Button>

      <Button type="number">7</Button>
      <Button type="number">8</Button>
      <Button type="number">9</Button>
      <Button type="operator">×</Button>

      <Button type="number">4</Button>
      <Button type="number">5</Button>
      <Button type="number">6</Button>
      <Button type="operator">-</Button>

      <Button type="number">1</Button>
      <Button type="number">2</Button>
      <Button type="number">3</Button>
      <Button type="operator">+</Button>

      <Button type="number">.</Button>
      <Button type="operator">=</Button>
      <Button type="operator">M+</Button>
      <Button type="operator">M-</Button>
      <Button type="operator">MR</Button>
      <Button type="operator">MC</Button>
      <Button type="operator">^</Button>
      <Button type="operator">√</Button>

      <Button
        className="col-span-2 w-32 justify-start pl-6 pr-28"
        type="number"
      >
        0
      </Button>
    </div>
  )
}

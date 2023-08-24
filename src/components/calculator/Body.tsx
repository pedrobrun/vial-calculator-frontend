import { Button } from './Button'
import { State } from './State'

export function Body({ state }: { state: State }) {
  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <Button type="light">
        {!state?.currentValue && state.previousValue === '0' ? 'AC' : 'C'}
      </Button>
      <Button type="light">+/-</Button>
      <Button type="light">%</Button>
      <Button type="highlighted">÷</Button>

      <Button type="dark">7</Button>
      <Button type="dark">8</Button>
      <Button type="dark">9</Button>
      <Button type="highlighted">×</Button>

      <Button type="dark">4</Button>
      <Button type="dark">5</Button>
      <Button type="dark">6</Button>
      <Button type="highlighted">-</Button>

      <Button type="dark">1</Button>
      <Button type="dark">2</Button>
      <Button type="dark">3</Button>
      <Button type="highlighted">+</Button>

      <Button type="dark">.</Button>
      <Button type="highlighted">=</Button>
      <Button type="highlighted">M+</Button>
      <Button type="highlighted">M-</Button>

      <Button type="highlighted">MR</Button>
      <Button type="highlighted">MC</Button>
      <Button type="highlighted">^</Button>
      <Button type="highlighted">√</Button>

      <Button
        className="col-span-2 w-32 justify-start pl-6 pr-28"
        type="dark"
      >
        0
      </Button>
    </div>
  )
}

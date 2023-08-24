import { useCalculator } from '../../src/hooks/useCalculator'
import { renderHook, act } from '@testing-library/react-hooks'

describe('useCalculator hook', () => {
  test('should initialize with a value of "0"', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.state.previousValue).toBe('0')
  })

  test('should update value when adding digits', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '5' } })
    })
    expect(result.current.state.previousValue).toBe('5')
  })

  test('should add numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '5' } })
      result.current.dispatch({
        type: 'SET_OPERATION',
        payload: { operation: '+' },
      })
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '3' } })
      result.current.dispatch({ type: 'EVALUATE' })
    })
    expect(result.current.state.previousValue).toBe('8')
  })

  test('should subtract numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '5' } })
      result.current.dispatch({
        type: 'SET_OPERATION',
        payload: { operation: '-' },
      })
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '3' } })
      result.current.dispatch({ type: 'EVALUATE' })
    })
    expect(result.current.state.previousValue).toBe('2')
  })

  test('should multiply numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '5' } })
      result.current.dispatch({
        type: 'SET_OPERATION',
        payload: { operation: '×' },
      })
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '3' } })
      result.current.dispatch({ type: 'EVALUATE' })
    })
    expect(result.current.state.previousValue).toBe('15')
  })

  test('should divide numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '9' } })
      result.current.dispatch({
        type: 'SET_OPERATION',
        payload: { operation: '÷' },
      })
      result.current.dispatch({ type: 'ADD_DIGIT', payload: { digit: '3' } })
      result.current.dispatch({ type: 'EVALUATE' })
    })
    expect(result.current.state.previousValue).toBe('3')
  })

  // You can add tests for memory operations, percentage, inversion etc.
})

import sankeyReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './sankeySlice';

describe('sankey reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(sankeyReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = sankeyReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = sankeyReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = sankeyReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});

import { notesReducer, initialState } from './notes.reducer';

describe('Notes Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = notesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

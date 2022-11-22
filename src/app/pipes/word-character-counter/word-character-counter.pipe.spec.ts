import { WordCharacterCounterPipe } from './word-character-counter.pipe';

describe('WordCharacterCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new WordCharacterCounterPipe();
    expect(pipe).toBeTruthy();
  });
});

import * as _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num: number): string {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    '',
  );
}

export function wordToNum(word: string): number {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1,
  );
}

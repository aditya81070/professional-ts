/* eslint-disable @typescript-eslint/no-unused-vars */

type Foo<T extends any[]> = [boolean, ...T, boolean];

/// labelled tuple
type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number,
];

function printAddress(...address: Address) {}

printAddress();

//////// recursive type alias

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

/// template type literals
// type Corner = `${'top' | 'bottom'}-${'left'| 'right'}`

/* // @ts-expect-error
const num1: number = 5;

// @ts-ignore
const num2: number = 'foo';
 */

//// error handling with unknown

function somethingRisky() {}
try {
  somethingRisky();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.stack);
  } else {
    console.log(err);
  }
}

// type only imports
import type { useAsyncDataEffect } from '../src/utils/api';
// useAsyncDataEffect();

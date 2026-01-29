import { useRef } from 'react';

export type Noop = (...args: any[]) => any;

export function usePersistFn<T extends Noop>(fn: T) {
  const ref = useRef<T>(fn);
  ref.current = fn;

  const persistFn = useRef<T | undefined>(undefined);
  if (!persistFn.current) {
    persistFn.current = function (this: any, ...args) {
      return ref.current!.apply(this, args);
    } as T;
  }

  return persistFn.current!;
}
import { useRef } from "react";
import React from "react";

export function useComposition<T extends HTMLElement>(props: {
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
  onChange?: (e: React.ChangeEvent<T>) => void;
}) {
  const isComposition = useRef(false);

  const onCompositionStart = (e: React.CompositionEvent<T>) => {
    isComposition.current = true;
    props.onCompositionStart?.(e);
  };

  const onCompositionEnd = (e: React.CompositionEvent<T>) => {
    isComposition.current = false;
    props.onCompositionEnd?.(e);
  };

  const onKeyDown = (e: React.KeyboardEvent<T>) => {
    props.onKeyDown?.(e);
  };

  return {
    isComposition,
    onCompositionStart,
    onCompositionEnd,
    onKeyDown,
  };
}
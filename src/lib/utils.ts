import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * `cn` — merge Tailwind utility classes safely.
 * Usage: cn('base-class', condition && 'conditional-class', props.className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

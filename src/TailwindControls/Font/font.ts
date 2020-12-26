export type FontWeight =
  | 'font-bold'
  | 'font-semibold'
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-extrabold'
  | 'font-black';

export type FontSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

export const fontSizes: FontSize[] = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl',
];

export const fontWeights: FontWeight[] = [
  'font-bold',
  'font-semibold',
  'font-thin',
  'font-extralight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-extrabold',
  'font-black',
];

export const fontFamilies: string[] = ['font-sans', 'font-serif', 'font-mono'];

export const italics: string[] = ['', 'italic', 'non-italic'];

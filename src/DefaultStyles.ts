import { BorderStyles } from './TailwindControls/Border/BorderStyles';
import { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import { IconStyles } from './Components/Button/Models/IconStyles';
import { EffectsStyle } from './TailwindControls/Effects/EffectsStyle';
import { FontStyles } from './TailwindControls/Font/FontStyles';
import { SizingStyles } from './TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from './TailwindControls/Spacing/SpacingStyles';
import { HeaderStyle } from './Components/Header/HeaderStyle';

export const primaryButton = new ButtonStyles({
  border: new BorderStyles({
    width: 'border-2',
    color: 'border-blue-300',
    radius: 'rounded-lg',
    style: 'border-solid',
  }),
  color: 'bg-blue-500',
  font: new FontStyles({
    color: 'text-white',
    size: 'text-base',
    weight: 'font-semibold',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
  }),
  effects: new EffectsStyle({
    boxShadow: 'shadow-md',
  }),
  spacing: new SpacingStyles({
    padding: [
      { spacing: 'py', size: '1' },
      { spacing: 'px', size: '2' },
    ],
    margin: [{ spacing: 'mx', size: '5' }],
  }),
});

export const secondaryButton = new ButtonStyles({
  border: new BorderStyles({
    width: 'border-2',
    color: 'border-gray-300',
    radius: 'rounded-none',
    style: 'border-dashed',
  }),
  color: 'bg-white',
  font: new FontStyles({
    color: 'text-black',
    size: 'text-base',
    weight: 'font-thin',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-6',
      width: 'w-6',
    }),
    color: 'text-blue-300',
  }),
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const header = new HeaderStyle({
  color: 'bg-blue-400',
  font: new FontStyles({
    color: 'text-white',
    size: 'text-3xl',
    weight: 'font-bold',
  }),
  size: new SizingStyles({
    height: 'h-12',
    width: 'w-full',
  }),
  effects: new EffectsStyle({
    boxShadow: 'shadow-lg',
  }),
  spacing: new SpacingStyles({
    padding: [
      { spacing: 'py', size: '2' },
      { spacing: 'px', size: '4' },
    ],
    margin: [{ spacing: 'mb', size: '5' }],
  }),
});

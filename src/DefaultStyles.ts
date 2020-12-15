import { BorderStyles } from './Border/BorderStyles';
import { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import { IconStyles } from './Components/Button/Models/IconStyles';
import { EffectsStyle } from './Effects/EffectsStyle';
import { FontStyles } from './Font/FontStyles';
import { SizingStyles } from './Sizing/SizingStyles';
import { SpacingStyles } from './Spacing/SpacingStyles';

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

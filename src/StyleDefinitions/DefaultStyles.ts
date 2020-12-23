import { BorderStyles } from '../TailwindControls/Border/BorderStyles';
import { ButtonStyles } from '../Components/Button/Models/ButtonStyles';
import { IconStyles } from '../Components/Button/Models/IconStyles';
import { EffectsStyle } from '../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../TailwindControls/Spacing/SpacingStyles';
import { HeaderStyle } from '../Components/Header/HeaderStyle';
import { SelectStyles } from '../Components/Select/SelectStyle';
import { MenuStyles } from '../Components/Select/MenuStyles';
import { GlobalStyle } from '../Components/Styles/GlobalStyle';
import { RingStyles } from '../TailwindControls/Ring/RingStyles';
import { TextFieldStyles } from '../Components/TextField/TextFieldStyles';

export const primaryButton = new ButtonStyles({
  color: 'bg-purple-500',
  font: new FontStyles({
    color: 'text-white',
    size: 'text-base',
    weight: 'font-semibold',
  }),
  ring: new RingStyles({
    onFocus: true,
    color: 'ring-blue-500',
    width: 'ring-4',
    offsetWidth: 'ring-offset-1',
    opacity: 'ring-opacity-20',
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
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const textField = new TextFieldStyles({
  color: 'bg-gray-50',
  border: new BorderStyles({
    radius: 'rounded-full',
  }),
  ring: new RingStyles({
    onFocus: true,
    color: 'ring-blue-500',
    width: 'ring-4',
    offsetWidth: 'ring-offset-1',
    opacity: 'ring-opacity-20',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
    color: 'text-pink-900',
  }),
  font: new FontStyles({
    weight: 'font-thin',
  }),
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const secondaryButton = new ButtonStyles({
  color: 'bg-white',
  font: new FontStyles({
    color: 'text-black',
    size: 'text-base',
    weight: 'font-semibold',
  }),
  effects: new EffectsStyle({
    boxShadow: 'shadow-md',
  }),
  ring: new RingStyles({
    onFocus: true,
    color: 'ring-blue-500',
    width: 'ring-4',
    offsetWidth: 'ring-offset-1',
    opacity: 'ring-opacity-20',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
    color: 'text-purple-300',
  }),
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const header = new HeaderStyle({
  color: 'bg-gradient-to-r from-pink-900 to-pink-700',
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

export const viewer = new GlobalStyle({
  color: 'bg-purple-100',
  font: new FontStyles({
    color: 'text-gray-700',
  }),
});

export const select: SelectStyles = new SelectStyles({
  button: new ButtonStyles({
    color: 'bg-white',
    border: new BorderStyles({
      width: 'border-2',
      color: 'border-pink-900 focus:border-pink-900',
    }),
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '2' },
        { spacing: 'px', size: '2' },
      ],
    }),
    size: new SizingStyles({
      width: 'w-full',
    }),
    icon: new IconStyles({
      size: new SizingStyles({
        height: 'h-5',
        width: 'w-5',
      }),
      color: 'text-black',
    }),
  }),
  menu: new MenuStyles({
    // size: new SizingStyles({
    //   minHeight: 'h-1',
    //   maxHeight: 'h-20',
    // }),
    effects: new EffectsStyle({
      boxShadow: 'shadow-md',
    }),
    color: 'bg-white',
    border: new BorderStyles({
      width: 'border-2 border-t-0',
      color: 'border-pink-900',
    }),
    spacing: new SpacingStyles({
      margin: [{ size: '1', spacing: '-mt' }],
      padding: [
        { spacing: 'py', size: '1' },
        { spacing: 'px', size: '2' },
      ],
    }),
  }),
});

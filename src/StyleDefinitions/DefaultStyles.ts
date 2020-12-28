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
import { GlobalStyle } from '../Components/Viewer/GlobalStyle';
import { RingStyles } from '../TailwindControls/Ring/RingStyles';
import { TextFieldStyles } from '../Components/TextField/TextFieldStyles';
import { SelectOptionStyles } from '../Components/Select/SelectOptionStyle';
import { DividerStyles } from '../TailwindControls/Divider/DividerStyles';
import { CheckboxStyles } from '../Components/Checkbox/CheckboxStyles';
import { TableStyles } from '../Components/Table/TableStyles';
import { TablePartStyles } from '../Components/Table/TablePartStyles';
import { CardStyles } from '../Components/Card/CardStyles';
import { CardPartStyles } from '../Components/Card/CardPartStyles';
import { TransformStyles } from '../TailwindControls/Transform/TransformStyles';
import { ColorStyle } from '../TailwindControls/Color/ColorStyle';
import { TransitionStyles } from '../TailwindControls/Transition/TransitionStyles';

export const primaryButton = new ButtonStyles({
  color: [new ColorStyle({ color: 'bg-purple-500' })],
  font: new FontStyles({
    color: [new ColorStyle({ color: 'text-white' })],
    weight: 'font-semibold',
  }),
  ring: new RingStyles({
    onFocus: true,
    color: [new ColorStyle({ color: 'ring-blue-500' })],
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
  effects: [
    new EffectsStyle({
      boxShadow: 'shadow-md',
    }),
  ],
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const checkbox = new CheckboxStyles({
  color: [new ColorStyle({ color: 'bg-purple-500' })],
  border: new BorderStyles({
    radius: 'rounded',
  }),
  font: new FontStyles({
    color: [new ColorStyle({ color: 'text-white' })],
    weight: 'font-black',
    size: 'text-xl',
    family: 'font-sans',
  }),
  size: new SizingStyles({
    height: 'h-5',
    width: 'w-5',
  }),
  transform: new TransformStyles({
    rotate: 'hover:rotate-6',
  }),
  transition: new TransitionStyles({
    transition: 'transition',
    duration: 'duration-300',
  }),
});

export const textField = new TextFieldStyles({
  color: [new ColorStyle({ color: 'bg-gray-50' })],
  border: new BorderStyles({
    radius: 'rounded-full',
  }),
  ring: new RingStyles({
    onFocus: true,
    color: [new ColorStyle({ color: 'ring-blue-500' })],
    width: 'ring-4',
    offsetWidth: 'ring-offset-1',
    opacity: 'ring-opacity-20',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
    color: [new ColorStyle({ color: 'text-pink-900' })],
  }),
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const secondaryButton = new ButtonStyles({
  color: [new ColorStyle({ color: 'bg-purple-50' })],
  font: new FontStyles({
    color: [new ColorStyle({ color: 'text-purple-800' })],
    weight: 'font-bold',
  }),
  transform: new TransformStyles({
    scale: 'scale-110',
    onHover: true,
  }),
  effects: [
    new EffectsStyle({
      boxShadow: 'shadow-md',
    }),
  ],
  ring: new RingStyles({
    onFocus: true,
    color: [new ColorStyle({ color: 'ring-blue-500' })],
    width: 'ring-4',
    offsetWidth: 'ring-offset-1',
    opacity: 'ring-opacity-20',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
    color: [new ColorStyle({ color: 'bg-purple-300' })],
  }),
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const header = new HeaderStyle({
  color: [
    new ColorStyle({ color: 'bg-gradient-to-r from-pink-900 to-pink-700' }),
  ],
  font: new FontStyles({
    color: [new ColorStyle({ color: 'text-white' })],
    size: 'text-3xl',
    weight: 'font-bold',
  }),
  size: new SizingStyles({
    height: 'h-12',
    width: 'w-full',
  }),
  effects: [
    new EffectsStyle({
      boxShadow: 'shadow-lg',
    }),
  ],
  spacing: new SpacingStyles({
    padding: [
      { spacing: 'py', size: '2' },
      { spacing: 'px', size: '4' },
    ],
    margin: [{ spacing: 'mb', size: '5' }],
  }),
});

export const viewer = new GlobalStyle({
  color: [new ColorStyle({ color: 'bg-purple-100' })],
  font: new FontStyles({
    color: [new ColorStyle({ color: 'text-gray-700' })],
    weight: 'font-normal',
    size: 'text-base',
    family: 'font-mono',
  }),
});

export const select: SelectStyles = new SelectStyles({
  button: new ButtonStyles({
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      width: 'border-2',
      color: [new ColorStyle({ color: 'border-pink-900' })],
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
      color: [new ColorStyle({ color: 'text-black' })],
    }),
  }),
  menu: new MenuStyles({
    // size: new SizingStyles({
    //   minHeight: 'h-1',
    //   maxHeight: 'h-20',
    // }),
    effects: [
      new EffectsStyle({
        boxShadow: 'shadow-md',
      }),
    ],
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      width: 'border-2 border-t-0',
      color: [new ColorStyle({ color: 'border-pink-900' })],
    }),
    spacing: new SpacingStyles({
      margin: [{ size: '1', spacing: '-mt' }],
    }),
    divider: new DividerStyles({
      width: 'divide-y-2',
      color: [new ColorStyle({ color: 'divide-pink-100' })],
    }),
  }),
  menuItem: new SelectOptionStyles({
    color: [new ColorStyle({ color: 'hover:bg-purple-100' })],
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  }),
});

export const table: TableStyles = new TableStyles({
  color: [new ColorStyle({ color: 'bg-purple-50' })],
  divider: new DividerStyles({
    width: 'divide-y',
    color: [new ColorStyle({ color: 'divider-purple-100' })],
  }),
  header: new TablePartStyles({
    font: new FontStyles({
      weight: 'font-bold',
    }),
    spacing: new SpacingStyles({
      padding: [{ spacing: 'py', size: '2' }],
    }),
    border: new BorderStyles({
      width: 'border-b-4',
      color: [new ColorStyle({ color: 'border-pink-800' })],
    }),
  }),
  row: new TablePartStyles({
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '1' },
        { spacing: 'px', size: '2' },
      ],
    }),
    color: [new ColorStyle({ color: 'bg-purple-200', isHover: true })],
  }),
});

export const card: CardStyles = new CardStyles({
  color: [new ColorStyle({ color: 'bg-purple-50' })],
  border: new BorderStyles({
    width: 'border-2',
    color: [new ColorStyle({ color: 'border-purple-200' })],
    radius: 'rounded-lg',
  }),
  effects: [
    new EffectsStyle({
      boxShadow: 'shadow-lg',
    }),
  ],
  spacing: new SpacingStyles({
    margin: [{ spacing: 'mt', size: '5' }],
  }),
  header: new CardPartStyles({
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
    font: new FontStyles({
      weight: 'font-semibold',
      size: 'text-2xl',
    }),
    border: new BorderStyles({
      style: 'border-solid',
      width: 'border-b-2',
      color: [new ColorStyle({ color: 'border-pink-800' })],
    }),
  }),
  container: new CardPartStyles({
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '4' }],
    }),
    font: new FontStyles({
      size: 'text-sm',
    }),
  }),
  footer: new CardPartStyles({
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
    border: new BorderStyles({
      style: 'border-solid',
      width: 'border-t-2',
      color: [new ColorStyle({ color: 'border-pink-800' })],
    }),
  }),
});

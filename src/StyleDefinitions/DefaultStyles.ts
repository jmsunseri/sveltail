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
import { SelectOptionStyles } from '../Components/Select/SelectOptionStyle';
import { DividerStyles } from '../TailwindControls/Divider/DividerStyles';
import { CheckboxStyles } from '../Components/Checkbox/CheckboxStyles';
import { TableStyles } from '../Components/Table/TableStyles';
import { TablePartStyles } from '../Components/Table/TablePartStyles';
import { CardStyles } from '../Components/Card/CardStyles';
import { CardPartStyles } from '../Components/Card/CardPartStyles';

export const primaryButton = new ButtonStyles({
  color: 'bg-purple-500',
  font: new FontStyles({
    color: 'text-white',
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

export const checkbox = new CheckboxStyles({
  color: 'bg-purple-500',
  border: new BorderStyles({
    radius: 'rounded',
  }),
  font: new FontStyles({
    color: 'text-white',
    weight: 'font-black',
    size: 'text-xl',
  }),
  size: new SizingStyles({
    height: 'h-5',
    width: 'w-5',
  }),
  // spacing: new SpacingStyles({
  //   margin: [{ spacing: 'mr', size: '2' }],
  // }),
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
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '2' }],
  }),
});

export const secondaryButton = new ButtonStyles({
  color: 'bg-purple-50',
  font: new FontStyles({
    color: 'text-purple-800',
    weight: 'font-bold',
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
    weight: 'font-normal',
    size: 'text-base',
    family: 'font-mono',
  }),
});

export const select: SelectStyles = new SelectStyles({
  button: new ButtonStyles({
    color: 'bg-white',
    border: new BorderStyles({
      width: 'border-2',
      color: 'border-pink-900',
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
    }),
    divider: new DividerStyles({
      width: 'divide-y-2',
      color: 'divide-pink-100',
    }),
  }),
  menuItem: new SelectOptionStyles({
    color: 'hover:bg-purple-100',
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  }),
});

export const table: TableStyles = new TableStyles({
  color: 'bg-purple-50',
  divider: new DividerStyles({
    width: 'divide-y',
    color: 'divide-purple-100',
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
      color: 'border-pink-800',
    }),
  }),
  row: new TablePartStyles({
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '1' },
        { spacing: 'px', size: '2' },
      ],
    }),
    hoverColor: 'hover:bg-purple-200',
  }),
});

export const card: CardStyles = new CardStyles({
  color: 'bg-purple-50',
  border: new BorderStyles({
    width: 'border-2',
    color: 'border-pruple-200',
    radius: 'rounded-lg',
  }),
  effects: new EffectsStyle({
    boxShadow: 'shadow-lg',
  }),
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
      color: 'border-pink-800',
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
      color: 'border-pink-800',
    }),
  }),
});

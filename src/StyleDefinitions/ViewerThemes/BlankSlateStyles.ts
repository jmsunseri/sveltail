import { BorderStyles } from '../../TailwindControls/Border/BorderStyles';
import { ButtonStyles } from '../../Components/Button/Models/ButtonStyles';
import { IconStyles } from '../../Components/Button/Models/IconStyles';
import { EffectsStyle } from '../../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../../TailwindControls/Spacing/SpacingStyles';
import { HeaderStyle } from '../../Components/Header/HeaderStyle';
import { SelectStyles } from '../../Components/Select/SelectStyle';
import { MenuStyles } from '../../Components/Select/MenuStyles';
import { GlobalStyle } from '../../Components/Viewer/GlobalStyle';
import { RingStyles } from '../../TailwindControls/Ring/RingStyles';
import { TextFieldStyles } from '../../Components/TextField/TextFieldStyles';
import { SelectOptionStyles } from '../../Components/Select/SelectOptionStyle';
import { DividerStyles } from '../../TailwindControls/Divider/DividerStyles';
import { CheckboxStyles } from '../../Components/Checkbox/CheckboxStyles';
import { TableStyles } from '../../Components/Table/TableStyles';
import { TablePartStyles } from '../../Components/Table/TablePartStyles';
import { CardStyles } from '../../Components/Card/CardStyles';
import { CardPartStyles } from '../../Components/Card/CardPartStyles';
import { ColorStyle } from '../../TailwindControls/Color/ColorStyle';
import type { IViewerTheme } from '../IViewer';

const getInstance = (): IViewerTheme => {
  const primaryButton = new ButtonStyles({
    color: [new ColorStyle({ color: 'bg-black' })],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-white' })],
      weight: 'font-bold',
    }),
    ring: new RingStyles({
      onFocus: true,
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

  const checkbox = new CheckboxStyles({
    color: [new ColorStyle({ color: 'bg-black' })],
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
  });

  const textField = new TextFieldStyles({
    color: [new ColorStyle({ color: 'bg-gray-50' })],
    border: new BorderStyles({
      width: 'border-2',
    }),
    ring: new RingStyles({
      onFocus: true,
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
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  });

  const secondaryButton = new ButtonStyles({
    color: [new ColorStyle({ color: 'bg-white' })],
    font: new FontStyles({
      weight: 'font-bold',
    }),
    effects: [
      new EffectsStyle({
        boxShadow: 'shadow-md',
      }),
    ],
    ring: new RingStyles({
      onFocus: true,
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
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  });

  const header = new HeaderStyle({
    color: [
      new ColorStyle({
        color: 'bg-black',
        isGradient: true,
      }),
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

  const viewer = new GlobalStyle({
    color: [new ColorStyle({ color: 'bg-white' })],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-black' })],
      weight: 'font-normal',
      size: 'text-base',
    }),
  });

  const select: SelectStyles = new SelectStyles({
    button: new ButtonStyles({
      border: new BorderStyles({
        width: 'border-2',
        color: [new ColorStyle({ color: 'border-black' })],
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
      effects: [
        new EffectsStyle({
          boxShadow: 'shadow-md',
        }),
      ],
      color: [new ColorStyle({ color: 'bg-white' })],
      border: new BorderStyles({
        width: 'border-2 border-t-0',
        color: [new ColorStyle({ color: 'border-black' })],
      }),
      spacing: new SpacingStyles({
        margin: [{ size: '1', spacing: '-mt' }],
      }),
      divider: new DividerStyles({
        width: 'divide-y-2',
        color: [new ColorStyle({ color: 'divide-black' })],
      }),
    }),
    menuItem: new SelectOptionStyles({
      color: [new ColorStyle({ color: 'bg-gray-100', isHover: true })],
      spacing: new SpacingStyles({
        padding: [{ spacing: 'p', size: '2' }],
      }),
    }),
  });

  const table: TableStyles = new TableStyles({
    divider: new DividerStyles({
      width: 'divide-y',
      color: [new ColorStyle({ color: 'divider-black' })],
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
        color: [new ColorStyle({ color: 'border-black' })],
      }),
    }),
    row: new TablePartStyles({
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '1' },
          { spacing: 'px', size: '2' },
        ],
      }),
      color: [new ColorStyle({ color: 'bg-gray-100', isHover: true })],
    }),
  });

  const card: CardStyles = new CardStyles({
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      width: 'border-2',
      color: [new ColorStyle({ color: 'border-black' })],
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
        color: [new ColorStyle({ color: 'border-black' })],
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
        color: [new ColorStyle({ color: 'border-black' })],
      }),
    }),
  });

  return {
    primaryButton,
    secondaryButton,
    textField,
    checkbox,
    header,
    viewer,
    select,
    table,
    card,
  };
};

export { getInstance };

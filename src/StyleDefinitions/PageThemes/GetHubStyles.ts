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
import { PageStyle } from '../../Components/Page/PageStyle';
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
import type { IPageTheme } from '../IPageTheme';
import { TooltipStyles } from '../../Components/Tooltip/TooltipStyles';
import { TransformStyles } from '../../TailwindControls/Transform/TransformStyles';
import { Variant } from '../../Variants';
import { PlaceholderStyles } from '../../TailwindControls/Placeholder/PlaceholderStyles';
import { HeaderPartStyle } from '../../Components/Header/HeaderPartStyle';

const getInstance = (): IPageTheme => {
  const primaryButton = new ButtonStyles({
    color: [
      new ColorStyle({ color: 'bg-green-500' }),
      new ColorStyle({ color: 'hover:bg-green-600', variant: Variant.Hover }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-gray-50' })],
      weight: 'font-bold',
    }),
    border: new BorderStyles({
      radius: 'rounded-lg',
      color: [new ColorStyle({ color: 'border-green-600' })],
      width: 'border',
    }),
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '2' },
        { spacing: 'px', size: '4' },
      ],
    }),
    icon: new IconStyles({
      size: 14,
    }),
  });

  const checkbox = new CheckboxStyles({
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      width: 'border',
      color: [new ColorStyle({ color: 'border-gray-600' })],
      radius: 'rounded-sm',
    }),
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-blue-500' })],
      weight: 'font-black',
      size: 'text-xs',
      family: 'font-sans',
    }),
    size: new SizingStyles({
      height: 'h-3',
      width: 'w-3',
    }),
  });

  const textField = new TextFieldStyles({
    color: [new ColorStyle({ color: 'bg-gray-50' })],
    border: new BorderStyles({
      width: 'border',
      color: [new ColorStyle({ color: 'border-gray-300' })],
      radius: 'rounded-lg',
    }),
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-gray-600' })],
    }),
    placeholder: new PlaceholderStyles({
      opacity: 'placeholder-opacity-0',
    }),
    ring: new RingStyles({
      variant: Variant.Focus,
      width: 'ring-4',
      opacity: 'ring-opacity-50',
      color: [new ColorStyle({ color: 'ring-blue-500' })],
    }),
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
    icon: new IconStyles({
      size: 18,
      stroke: 2,
      color: [new ColorStyle({ color: 'text-gray-500' })],
    }),
  });

  const secondaryButton = new ButtonStyles({
    color: [
      new ColorStyle({ color: 'bg-gray-50' }),
      new ColorStyle({ color: 'hover:bg-gray-100', variant: Variant.Hover }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-gray-900' })],
      weight: 'font-bold',
    }),
    border: new BorderStyles({
      radius: 'rounded-lg',
      color: [
        new ColorStyle({
          color: 'border-gray-300',
        }),
      ],
      width: 'border',
    }),
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '2' },
        { spacing: 'px', size: '4' },
      ],
    }),
  });

  const header = new HeaderStyle({
    color: [
      new ColorStyle({
        color: 'bg-gray-800',
        isGradient: false,
      }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-white' })],

      weight: 'font-semibold',
    }),
    size: new SizingStyles({
      height: 'h-12',
      width: 'w-full',
    }),
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '2' },
        { spacing: 'px', size: '4' },
      ],
      margin: [{ spacing: 'mb', size: '5' }],
    }),
    icon: new IconStyles({
      size: 36,
      color: [
        new ColorStyle({
          color: 'hover:text-gray-200',
          variant: Variant.Hover,
        }),
      ],
    }),
    menu: new HeaderPartStyle({
      color: [
        new ColorStyle({
          color: 'hover:text-gray-200',
          variant: Variant.Hover,
        }),
      ],
    }),
  });

  const viewer = new PageStyle({
    color: [new ColorStyle({ color: 'bg-white' })],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-black' })],
      weight: 'font-normal',
      size: 'text-sm',
    }),
  });

  const select: SelectStyles = new SelectStyles({
    button: new ButtonStyles({
      border: new BorderStyles({
        width: 'border',
        color: [new ColorStyle({ color: 'border-gray-300' })],
        radius: 'rounded-lg',
      }),
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '2' },
          { spacing: 'px', size: '4' },
        ],
      }),
      size: new SizingStyles({
        width: 'w-full',
      }),
      icon: new IconStyles({
        color: [new ColorStyle({ color: 'text-gray-700' })],
        size: 16,
      }),
    }),
    menu: new MenuStyles({
      effects: [
        new EffectsStyle({
          boxShadow: 'shadow-md',
        }),
      ],
      spacing: new SpacingStyles({
        margin: [{ spacing: 'mt', size: '0.5' }],
        padding: [{ spacing: 'py', size: '1' }],
      }),
      color: [new ColorStyle({ color: 'bg-white' })],
      border: new BorderStyles({
        width: 'border',
        radius: 'rounded-lg',
        color: [new ColorStyle({ color: 'border-gray-300' })],
      }),
    }),
    menuItem: new SelectOptionStyles({
      color: [
        new ColorStyle({ color: 'hover:bg-gray-100', variant: Variant.Hover }),
      ],
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '1' },
          { spacing: 'px', size: '4' },
        ],
      }),
    }),
  });

  const table: TableStyles = new TableStyles({
    border: new BorderStyles({
      width: 'border',
      radius: 'rounded-lg',
      color: [new ColorStyle({ color: 'border-gray-300' })],
    }),
    divider: new DividerStyles({
      width: 'divide-y',
      color: [new ColorStyle({ color: 'divider-gray-300' })],
    }),
    header: new TablePartStyles({
      spacing: new SpacingStyles({
        padding: [{ spacing: 'py', size: '4' }],
      }),
      color: [new ColorStyle({ color: 'bg-blue-50' })],
    }),
    row: new TablePartStyles({
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '3' },
          { spacing: 'px', size: '4' },
        ],
      }),
      font: new FontStyles({
        color: [new ColorStyle({ color: 'text-gray-700' })],
      }),
      color: [
        new ColorStyle({ color: 'hover:bg-gray-100', variant: Variant.Hover }),
      ],
    }),
  });

  const card: CardStyles = new CardStyles({
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      width: 'border',
      radius: 'rounded-lg',
      color: [new ColorStyle({ color: 'border-gray-300' })],
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
        padding: [
          { spacing: 'px', size: '4' },
          { spacing: 'py', size: '6' },
        ],
      }),
      font: new FontStyles({
        weight: 'font-semibold',
        size: 'text-xl',
      }),
    }),
    container: new CardPartStyles({
      spacing: new SpacingStyles({
        padding: [{ spacing: 'px', size: '8' }],
      }),
      font: new FontStyles({
        size: 'text-sm',
      }),
    }),
    footer: new CardPartStyles({
      spacing: new SpacingStyles({
        padding: [{ spacing: 'p', size: '4' }],
      }),
    }),
  });

  const tooltip = new TooltipStyles({
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
      margin: [{ spacing: 'my', size: '2' }],
    }),
    border: new BorderStyles({
      radius: 'rounded-lg',
    }),
    color: [
      new ColorStyle({
        color: 'bg-gray-800',
      }),
    ],
    effects: [
      new EffectsStyle({
        boxShadow: 'shadow-md',
        opacity: 'opacity-95',
      }),
    ],
    font: new FontStyles({
      size: 'text-xs',
      color: [
        new ColorStyle({
          color: 'text-white',
        }),
      ],
    }),
    transform: [
      new TransformStyles({
        translate: '-translate-y-full',
      }),
    ],
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
    tooltip,
  };
};

export { getInstance };

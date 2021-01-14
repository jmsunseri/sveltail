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
      new ColorStyle({ color: 'bg-blue-400' }),
      new ColorStyle({
        variant: Variant.Hover,
        opacity: 'hover:bg-opacity-90',
      }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-gray-50' })],
      weight: 'font-bold',
    }),
    border: [
      new BorderStyles({
        radius: 'rounded-full',
      }),
    ],
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
    border: [
      new BorderStyles({
        width: 'border',
        color: [new ColorStyle({ color: 'border-gray-600' })],
        radius: 'rounded-sm',
      }),
    ],
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
    color: [
      new ColorStyle({
        color: 'bg-gray-700',
        isGradient: false,
      }),
    ],
    border: [
      new BorderStyles({
        style: 'border-none',
        radius: 'rounded-full',
      }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-gray-400' })],
    }),
    placeholder: new PlaceholderStyles({
      opacity: 'placeholder-opacity-0',
    }),
    ring: new RingStyles({
      variant: Variant.Focus,
      width: 'ring-1',

      color: [
        new ColorStyle({ color: 'ring-blue-400', opacity: 'ring-opacity-100' }),
      ],
    }),
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '3' }],
    }),
    icon: new IconStyles({
      size: 18,
      stroke: 2,
      color: [new ColorStyle({ color: 'text-gray-400' })],
    }),
  });

  const secondaryButton = new ButtonStyles({
    color: [
      new ColorStyle({
        color: 'hover:bg-blue-300',
        variant: Variant.Hover,
        opacity: 'hover:bg-opacity-5',
      }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-blue-400' })],
      weight: 'font-bold',
    }),
    border: [
      new BorderStyles({
        radius: 'rounded-full',
        color: [
          new ColorStyle({
            color: 'border-blue-400',
          }),
        ],
        width: 'border',
      }),
    ],
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '1' },
        { spacing: 'px', size: '2' },
      ],
    }),
  });

  const header = new HeaderStyle({
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-white' })],
      weight: 'font-black',
      size: 'text-lg',
    }),
    border: [
      new BorderStyles({
        width: 'border-b',
        color: [
          new ColorStyle({
            color: 'border-gray-600',
          }),
        ],
      }),
    ],
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
          color: 'text-blue-400',
          variant: Variant.None,
        }),
      ],
    }),
    menu: new HeaderPartStyle({
      border: [
        new BorderStyles({
          radius: 'rounded-full',
        }),
      ],
      spacing: new SpacingStyles({
        padding: [
          { size: '4', spacing: 'px' },
          { size: '2', spacing: 'py' },
        ],
      }),
      font: new FontStyles({
        color: [new ColorStyle({ color: 'text-blue-400' })],
        weight: 'font-semibold',
      }),
      color: [
        new ColorStyle({
          color: 'hover:bg-blue-400',
          opacity: 'hover:bg-opacity-10',
          variant: Variant.Hover,
        }),
      ],
    }),
  });

  const viewer = new PageStyle({
    color: [
      new ColorStyle({
        color: 'bg-gray-800',
        isGradient: false,
      }),
    ],
    font: new FontStyles({
      color: [new ColorStyle({ color: 'text-white' })],
      weight: 'font-normal',
      size: 'text-sm',
    }),
  });

  const select: SelectStyles = new SelectStyles({
    button: new ButtonStyles({
      color: [
        new ColorStyle({
          color: 'bg-blue-400',
          opacity: 'bg-opacity-10',
          isGradient: false,
        }),
      ],
      border: [
        new BorderStyles({
          width: 'border-none',
          radius: 'rounded-t-xl',
        }),
        new BorderStyles({
          radius: 'rounded-b-none',
        }),
      ],
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
        color: [new ColorStyle({ color: 'text-blue-400' })],
        size: 24,
      }),
    }),
    menu: new MenuStyles({
      divider: new DividerStyles({
        width: 'divide-y',
        color: [
          new ColorStyle({
            color: 'divide-blue-100',
            opacity: 'divide-opacity-10',
          }),
        ],
      }),
      color: [
        new ColorStyle({
          color: 'bg-blue-400',
          opacity: 'bg-opacity-10',
          isGradient: false,
        }),
      ],
      border: [
        new BorderStyles({
          radius: 'rounded-b-xl',
        }),
        new BorderStyles({
          radius: 'rounded-t-none',
        }),
        new BorderStyles({
          width: 'border-t',
          color: [
            new ColorStyle({
              color: 'border-blue-100',
              opacity: 'border-opacity-10',
            }),
          ],
        }),
      ],
    }),
    menuItem: new SelectOptionStyles({
      color: [
        new ColorStyle({
          color: 'hover:bg-gray-100',
          opacity: 'hover:bg-opacity-20',
          variant: Variant.Hover,
        }),
      ],
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '2' },
          { spacing: 'px', size: '4' },
        ],
      }),
    }),
  });

  const table: TableStyles = new TableStyles({
    border: [
      new BorderStyles({
        width: 'border',
        color: [
          new ColorStyle({
            color: 'border-blue-100',
            opacity: 'border-opacity-20',
          }),
        ],
      }),
    ],
    divider: new DividerStyles({
      width: 'divide-y',
      color: [
        new ColorStyle({
          color: 'divide-blue-100',
          opacity: 'divide-opacity-20',
        }),
      ],
    }),
    header: new TablePartStyles({
      spacing: new SpacingStyles({
        padding: [{ spacing: 'py', size: '4' }],
      }),
    }),
    row: new TablePartStyles({
      spacing: new SpacingStyles({
        padding: [
          { spacing: 'py', size: '3' },
          { spacing: 'px', size: '4' },
        ],
      }),
      color: [
        new ColorStyle({
          color: 'hover:bg-blue-50',
          variant: Variant.Hover,
          opacity: 'hover:bg-opacity-10',
        }),
      ],
      font: new FontStyles({
        color: [new ColorStyle({ color: 'text-white' })],
      }),
    }),
  });

  const card: CardStyles = new CardStyles({
    color: [
      new ColorStyle({
        color: 'bg-blue-400',
        opacity: 'bg-opacity-10',
        isGradient: false,
      }),
    ],
    border: [
      new BorderStyles({
        radius: 'rounded-lg',
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
        size: 'text-base',
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
    border: [
      new BorderStyles({
        radius: 'rounded-lg',
      }),
    ],
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

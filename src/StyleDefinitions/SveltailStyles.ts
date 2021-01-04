import { ButtonStyles } from '../Components/Button/Models/ButtonStyles';
import { IconStyles } from '../Components/Button/Models/IconStyles';
import { MenuStyles } from '../Components/Select/MenuStyles';
import { SelectOptionStyles } from '../Components/Select/SelectOptionStyle';
import { SelectStyles } from '../Components/Select/SelectStyle';
import { TooltipStyles } from '../Components/Tooltip/TooltipStyles';
import { BorderStyles } from '../TailwindControls/Border/BorderStyles';
import { ColorStyle } from '../TailwindControls/Color/ColorStyle';
import { DividerStyles } from '../TailwindControls/Divider/DividerStyles';
import { EffectsStyle } from '../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../TailwindControls/Spacing/SpacingStyles';
import { TransformStyles } from '../TailwindControls/Transform/TransformStyles';
import { Variant } from '../Variants';

const selectStyles: SelectStyles = new SelectStyles({
  button: new ButtonStyles({
    border: new BorderStyles({
      radius: 'rounded',
      style: 'border-dashed',
      width: 'border-2',
      color: [new ColorStyle({ color: 'border-gray-300' })],
    }),
    spacing: new SpacingStyles({
      padding: [
        { spacing: 'py', size: '1' },
        { spacing: 'px', size: '2' },
      ],
    }),
    size: new SizingStyles({
      width: 'w-full',
    }),
    icon: new IconStyles({
      color: [new ColorStyle({ color: 'text-blue-300' })],
    }),
  }),
  menu: new MenuStyles({
    effects: [
      new EffectsStyle({
        boxShadow: 'shadow-md',
      }),
    ],
    size: new SizingStyles({
      maxHeight: 'max-h-80',
    }),
    divider: new DividerStyles({
      width: 'divide-y-2',
      style: 'divide-dashed',
    }),
    color: [new ColorStyle({ color: 'bg-white' })],
    border: new BorderStyles({
      radius: 'rounded-lg',
      width: 'border-2',
      color: [new ColorStyle({ color: 'border-gray-300' })],
      style: 'border-dashed',
    }),
    spacing: new SpacingStyles({
      margin: [{ size: '1', spacing: 'mt' }],
    }),
  }),
  menuItem: new SelectOptionStyles({
    color: [
      new ColorStyle({ color: 'hover:bg-gray-100', variant: Variant.Hover }),
    ],
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  }),
});

const primaryButton = new ButtonStyles({
  color: [new ColorStyle({ color: 'bg-white' })],
  font: new FontStyles({
    weight: 'font-semibold',
  }),
  border: new BorderStyles({
    style: 'border-dashed focus:outline-none',
    width: 'border-2',
    color: [new ColorStyle({ color: 'border-gray-200' })],
    radius: 'rounded-lg',
  }),
  icon: new IconStyles({
    color: [new ColorStyle({ color: 'text-blue-300' })],
  }),
  spacing: new SpacingStyles({
    padding: [
      { spacing: 'px', size: '2' },
      { spacing: 'py', size: '1' },
    ],
    margin: [{ spacing: 'm', size: '1' }],
  }),
  size: new SizingStyles({}),
});

const tooltip = new TooltipStyles({
  spacing: new SpacingStyles({
    padding: [{ spacing: 'p', size: '1' }],
    margin: [{ spacing: 'm', size: '0.5' }],
  }),
  color: [
    new ColorStyle({
      color: 'bg-white',
    }),
  ],
  border: new BorderStyles({
    width: 'border',
    style: 'border-dashed',
    color: [new ColorStyle({ color: 'border-blue-300' })],
    radius: 'rounded-lg',
  }),
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
        color: 'text-gray-700',
      }),
    ],
  }),
  transform: [
    new TransformStyles({
      translate: '-translate-y-full',
    }),
  ],
});

export { selectStyles, primaryButton, tooltip };

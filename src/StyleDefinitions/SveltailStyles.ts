import { ButtonStyles } from '../Components/Button/Models/ButtonStyles';
import { IconStyles } from '../Components/Button/Models/IconStyles';
import { MenuStyles } from '../Components/Select/MenuStyles';
import { SelectOptionStyles } from '../Components/Select/SelectOptionStyle';
import { SelectStyles } from '../Components/Select/SelectStyle';
import { BorderStyles } from '../TailwindControls/Border/BorderStyles';
import { DividerStyles } from '../TailwindControls/Divider/DividerStyles';
import { EffectsStyle } from '../TailwindControls/Effects/EffectsStyle';
import { FontStyles } from '../TailwindControls/Font/FontStyles';
import { SizingStyles } from '../TailwindControls/Sizing/SizingStyles';
import { SpacingStyles } from '../TailwindControls/Spacing/SpacingStyles';

const selectStyles: SelectStyles = new SelectStyles({
  button: new ButtonStyles({
    border: new BorderStyles({
      radius: 'rounded',
      style: 'border-dashed',
      width: 'border-2',
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
      size: new SizingStyles({
        height: 'h-3',
        width: 'w-3',
      }),
      color: 'text-blue-300',
    }),
  }),
  menu: new MenuStyles({
    effects: new EffectsStyle({
      boxShadow: 'shadow-md',
    }),
    size: new SizingStyles({
      height: 'h-80',
    }),
    divider: new DividerStyles({
      width: 'divide-y-2',
      style: 'divide-dashed',
    }),
    color: 'bg-white',
    border: new BorderStyles({
      radius: 'rounded-b-lg',
      width: 'border-2 border-t-0',
      color: 'border-gray-200',
      style: 'border-dashed',
    }),
    spacing: new SpacingStyles({
      margin: [{ size: '1', spacing: '-mt' }],
    }),
  }),
  menuItem: new SelectOptionStyles({
    color: 'hover:bg-gray-100',
    spacing: new SpacingStyles({
      padding: [{ spacing: 'p', size: '2' }],
    }),
  }),
});

const primaryButton = new ButtonStyles({
  color: 'bg-white',
  font: new FontStyles({
    weight: 'font-semibold',
  }),
  border: new BorderStyles({
    style: 'border-dashed focus:outline-none',
    width: 'border-2',
    color: 'border-gray-200',
    radius: 'rounded-lg',
  }),
  icon: new IconStyles({
    size: new SizingStyles({
      height: 'h-5',
      width: 'w-5',
    }),
    color: 'text-blue-300',
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

export { selectStyles, primaryButton };

import { ButtonStyles } from '../Components/Button/Models/ButtonStyles';
import { IconStyles } from '../Components/Button/Models/IconStyles';
import { MenuStyles } from '../Components/Select/MenuStyles';
import { SelectStyles } from '../Components/Select/SelectStyle';
import { BorderStyles } from '../TailwindControls/Border/BorderStyles';
import type { colors } from '../TailwindControls/Color/color';
import { EffectsStyle } from '../TailwindControls/Effects/EffectsStyle';
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
    color: 'bg-white',
    border: new BorderStyles({
      radius: 'rounded-b-lg',
      width: 'border-2 border-t-0',
      color: 'border-gray-600',
      style: 'border-dashed',
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

export { selectStyles };

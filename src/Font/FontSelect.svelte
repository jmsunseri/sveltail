<script lang="ts">
  import FaFont from 'svelte-icons/fa/FaFont.svelte';
  import ColorMenu from '../Color/ColorMenu.svelte';
  import IconButton from '../Components/Button/IconButton.svelte';
  import SelectOption from '../Components/Select/SelectOption.svelte';
  import Select from '../Components/Select/Select.svelte';
  import { fontSizes, fontWeights } from './font';

  let isMenuVisible = true;
  let colorStyle: string = 'text-black';
  let fontSizeStyle = 'text-sm';
  let fontWeightStyle = 'semibold';
  let isSizeMenuOpen = false;
  let isWeightMenuOpen = false;

  export let value: string = [colorStyle, fontWeightStyle, fontSizeStyle].join(
    ' '
  );

  const updateValue = () => {
    value = [colorStyle, fontWeightStyle, fontSizeStyle].join(' ');
  };

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  const updateColor = (style: string) => {
    colorStyle = `text-${style}`;
    updateValue();
  };

  const sizeSelected = (size: CustomEvent<any>) => {
    fontSizeStyle = `text-${size.detail}`;
    isSizeMenuOpen = false;
    updateValue();
  };
  const weightSelected = (weight: CustomEvent<any>) => {
    fontWeightStyle = `font-${weight.detail}`;
    isWeightMenuOpen = false;
    updateValue();
  };
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowMenuClick}
    styles={['h-5', 'w-5', 'border-none', 'active:border-none', 'fill-current', 'text-blue-900']}>
    <FaFont />
  </IconButton>

  <div>
    {#if isMenuVisible}
      <div
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1">
        <div class="flex flex-row justify-around">
          <Select
            isMenuOpen={isSizeMenuOpen}
            label={fontSizeStyle}
            on:click={() => (isSizeMenuOpen = !isSizeMenuOpen)}
            menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
            buttonStyles={['rounded-sm', 'py-1', 'px-2']}>
            {#each fontSizes as size}
              <SelectOption value={size} on:selected={sizeSelected}>
                <div class={`text-${size}`}>{size}</div>
              </SelectOption>
            {/each}
          </Select>
          <Select
            isMenuOpen={isWeightMenuOpen}
            label={fontWeightStyle}
            on:click={() => (isWeightMenuOpen = !isWeightMenuOpen)}
            menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
            buttonStyles={['rounded-sm', 'py-1', 'px-2']}>
            {#each fontWeights as weight}
              <SelectOption value={weight} on:selected={weightSelected}>
                <div class={`font-${weight}`}>{weight}</div>
              </SelectOption>
            {/each}
          </Select>
        </div>

        <ColorMenu {updateColor} />
      </div>
    {/if}
  </div>
</div>

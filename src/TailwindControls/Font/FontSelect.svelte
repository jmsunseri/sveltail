<script lang="ts">
  import FaFont from 'svelte-icons/fa/FaFont.svelte';
  import { FontStyles } from './FontStyles';
  import ColorMenu from '../Color/ColorMenu.svelte';
  import IconButton from '@comp/Button/IconButton.svelte';
  import SelectOption from '@comp/Select/SelectOption.svelte';
  import Select from '@comp/Select/Select.svelte';
  import { fontSizes, fontWeights } from './font';
  import { slide } from 'svelte/transition';

  let isMenuVisible = false;
  let sizeSelect: Select;
  let weightSelect: Select;

  export let init: FontStyles;
  export let value: FontStyles = init || new FontStyles();

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
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
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1">
        <div class="flex flex-row gap-1">
          <Select
            bind:this={sizeSelect}
            bind:value={value.size}
            placeholder="Font Size"
            menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
            buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
            {#each fontSizes as size}
              <SelectOption value={size} select={sizeSelect}>
                <div class={size}>{size}</div>
              </SelectOption>
            {/each}
          </Select>
          <Select
            bind:this={weightSelect}
            bind:value={value.weight}
            placeholder="Font Weight"
            menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
            buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
            {#each fontWeights as weight}
              <SelectOption value={weight} select={weightSelect}>
                <div class={weight}>{weight}</div>
              </SelectOption>
            {/each}
          </Select>
        </div>

        <ColorMenu bind:value={value.color} init={value.color} prefix="text" />
      </div>
    {/if}
  </div>
</div>

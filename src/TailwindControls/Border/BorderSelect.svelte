<script lang="ts">
  import FaBorderStyle from 'svelte-icons/fa/FaBorderStyle.svelte';
  import IconButton from '@comp/Button/IconButton.svelte';
  import ColorMenu from '@tail/Color/ColorMenu.svelte';
  import BorderStyleSelect from './BorderStyleSelect.svelte';
  import BorderWidthSelect from './BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from './BorderRadius/BorderRadiusSelect.svelte';
  import { slide } from 'svelte/transition';
  import { BorderStyles } from './BorderStyles';

  let isMenuVisible: boolean = false;
  export let isInline: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  export let init: BorderStyles;

  export let value: BorderStyles = init || new BorderStyles();
</script>

<div class="flex flex-col">
  {#if !isInline}
    <IconButton
      on:click={onShowMenuClick}
      styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}>
      <FaBorderStyle />
    </IconButton>
  {/if}

  <div>
    {#if isMenuVisible || isInline}
      <div
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1">
        <BorderStyleSelect bind:value={value.style} />
        <BorderWidthSelect bind:value={value.width} />
        <BorderRadiusSelect bind:value={value.radius} />
        <ColorMenu
          bind:value={value.color}
          init={value.color}
          prefix="border" />
      </div>
    {/if}
  </div>
</div>

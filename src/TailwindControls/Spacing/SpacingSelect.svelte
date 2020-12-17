<script lang="ts">
  import FaBraille from 'svelte-icons/fa/FaBraille.svelte';
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';
  import { SpacingStyles } from './SpacingStyles';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import MarginSelect from './MarginSelect.svelte';
  import PaddingSelect from './PaddingSelect.svelte';
  import { slide } from 'svelte/transition';
  import SizeSelect from './SizeSelect.svelte';

  let isMenuVisible: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  export let init: SpacingStyles;
  export let value: SpacingStyles = init || new SpacingStyles();
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowMenuClick}
    styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}>
    <FaBraille />
  </IconButton>

  <div>
    {#if isMenuVisible}
      <div
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1 w-72">
        Margin
        {#each value.margin as margin, index}
          <div class="flex flex-row gap-1">
            <MarginSelect bind:value={margin.spacing} />
            <SizeSelect bind:value={margin.size} />
            <IconButton
              styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}
              on:click={() => (value.margin = value.margin.filter((x, i) => i !== index))}>
              <FaRegTrashAlt />
            </IconButton>
          </div>
        {/each}
        <button
          on:click={() => (value.margin = [...value.margin, { spacing: '', size: '' }])}
          class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
          Add Margin
        </button>
        Padding
        {#each value.padding as padding, index}
          <div class="flex flex-row gap-1">
            <PaddingSelect bind:value={padding.spacing} />
            <SizeSelect bind:value={padding.size} />
            <IconButton
              styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}
              on:click={() => (value.padding = value.padding.filter((x, i) => i !== index))}>
              <FaRegTrashAlt />
            </IconButton>
          </div>
        {/each}
        <button
          on:click={() => (value.padding = [...value.padding, { spacing: '', size: '' }])}
          class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
          Add Padding
        </button>
      </div>
    {/if}
  </div>
</div>

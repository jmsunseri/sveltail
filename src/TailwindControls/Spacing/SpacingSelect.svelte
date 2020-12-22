<script lang="ts">
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';
  import { SpacingStyles } from './SpacingStyles';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import MarginSelect from './MarginSelect.svelte';
  import PaddingSelect from './PaddingSelect.svelte';
  import SizeSelect from './SizeSelect.svelte';

  export let init: SpacingStyles;
  export let value: SpacingStyles = init || new SpacingStyles();
</script>

<div class="flex flex-col gap-1">
  Margin
  {#each value.margin as margin, index}
    <div class="flex flex-row gap-1 items-center ">
      <MarginSelect bind:value={margin.spacing} />
      <SizeSelect bind:value={margin.size} />
      <IconButton
        styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-300']}
        on:click={() => (value.margin = value.margin.filter((_, i) => i !== index))}>
        <FaRegTrashAlt />
      </IconButton>
    </div>
  {/each}
  <button
    on:click={() => (value.margin = [...value.margin, { spacing: '', size: '' }])}
    class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm`}>
    Add Margin
  </button>
  Padding
  {#each value.padding as padding, index}
    <div class="flex flex-row gap-1 items-center">
      <PaddingSelect bind:value={padding.spacing} />
      <SizeSelect bind:value={padding.size} />
      <IconButton
        styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-300']}
        on:click={() => (value.padding = value.padding.filter((_, i) => i !== index))}>
        <FaRegTrashAlt />
      </IconButton>
    </div>
  {/each}
  <button
    on:click={() => (value.padding = [...value.padding, { spacing: '', size: '' }])}
    class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm`}>
    Add Padding
  </button>
</div>

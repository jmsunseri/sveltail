<script lang="ts">
  import { Trash, Plus } from 'tabler-icons-svelte';

  import { SpacingStyles } from './SpacingStyles';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import MarginSelect from './MarginSelect.svelte';
  import PaddingSelect from './PaddingSelect.svelte';
  import SizeSelect from './SizeSelect.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';

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
        styles={['border-none', 'fill-current', 'text-blue-300']}
        on:click={() => (value.margin = value.margin.filter((_, i) => i !== index))}>
        <Trash />
      </IconButton>
    </div>
  {/each}
  <div class="flex flex-row justify-center">
    <Button
      on:click={() => (value.margin = [...value.margin, { spacing: '', size: '' }])}
      styles={primaryButton}>
      <div slot="icon">
        <Plus />
      </div>
      Add Margin
    </Button>
  </div>

  Padding
  {#each value.padding as padding, index}
    <div class="flex flex-row gap-1 items-center">
      <PaddingSelect bind:value={padding.spacing} />
      <SizeSelect bind:value={padding.size} />
      <IconButton
        styles={['border-none', 'fill-current', 'text-blue-300']}
        on:click={() => (value.padding = value.padding.filter((_, i) => i !== index))}>
        <Trash />
      </IconButton>
    </div>
  {/each}
  <div class="flex flex-row justify-center">
    <Button
      on:click={() => (value.padding = [...value.padding, { spacing: '', size: '' }])}
      styles={primaryButton}>
      <div slot="icon">
        <Plus />
      </div>

      Add Padding
    </Button>
  </div>
</div>

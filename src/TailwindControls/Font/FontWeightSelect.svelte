<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { fontWeights } from './font';

  let select: Select;
  export let value: string;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Font Weight"
  menuStyles={['bg-white', 'rounded-sm', 'border', 'shadow-md', 'py-1', 'px-2']}
  buttonStyles={['rounded-sm', 'py-1', 'px-2', 'w-full']}>
  {#each fontWeights as weight}
    <SelectOption value={weight} {select}>
      <div class={weight}>{weight}</div>
    </SelectOption>
  {/each}
</Select>

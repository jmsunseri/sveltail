<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import { fontWeights } from './font';

  let select: Select;
  export let value: string;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Font Weight"
  styles={selectStyles}>
  {#each fontWeights as weight}
    <SelectOption value={weight} {select}>
      <div class={weight}>{weight}</div>
    </SelectOption>
  {/each}
</Select>

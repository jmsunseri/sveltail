<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { fontSizes } from './font';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  let select: Select;
  export let value: string;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Font Size"
  styles={selectStyles}>
  {#each fontSizes as size}
    <SelectOption value={size} {select}>
      <div>{size}</div>
    </SelectOption>
  {/each}
</Select>

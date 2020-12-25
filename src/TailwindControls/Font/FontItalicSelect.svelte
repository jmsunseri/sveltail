<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { italics } from './font';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  let select: Select;
  export let value: string;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Italics"
  styles={selectStyles}>
  {#each italics as options}
    <SelectOption value={options} {select}>
      <div class={options}>{options}</div>
    </SelectOption>
  {/each}
</Select>

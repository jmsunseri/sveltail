<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { fontFamilies } from './font';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  let select: Select;
  export let value: string;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Font Family"
  styles={selectStyles}>
  {#each fontFamilies as family}
    <SelectOption value={family} {select}>
      <div class={family}>{family}</div>
    </SelectOption>
  {/each}
</Select>

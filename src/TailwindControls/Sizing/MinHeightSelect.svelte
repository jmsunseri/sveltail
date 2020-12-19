<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const heightOptions: string[] = ['', 'min-h-0', 'min-h-full', 'min-h-screen'];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:value
  placeholder="Min Height"
  bind:this={select}
  styles={selectStyles}>
  {#each heightOptions as option}
    <SelectOption value={option} {select}>{option}</SelectOption>
  {/each}
</Select>

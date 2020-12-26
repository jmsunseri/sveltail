<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'transition-none',
    'transition-all',
    'transition',
    'transition-colors',
    'transition-bopacity',
    'transition-shadow',
    'transition-btransform',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Transition"
  styles={selectStyles}>
  {#each options as option}
    <SelectOption value={option} {select}>
      <div>{option}</div>
    </SelectOption>
  {/each}
</Select>

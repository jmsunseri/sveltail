<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const styleOptions: string[] = [
    'divide-y-0',
    'divide-x-0',
    'divide-y-2',
    'divide-x-2',
    'divide-y-4',
    'divide-x-4',
    'divide-y-8',
    'divide-x-8',
    'divide-y',
    'divide-x',
    'divide-y-reverse',
    'divide-x-reverse',
  ];
  export let value: string;
  let select: Select;
</script>

<Select
  bind:this={select}
  bind:value
  placeholder="Divider Width"
  styles={selectStyles}>
  {#each styleOptions as option}
    <SelectOption value={option} {select}>
      <div class="m-2 p-2">{option}</div>
    </SelectOption>
  {/each}
</Select>

<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = ['0', '1', '2', '3', '6', '12', '45', '90', '180'];
  export let value: string;
  let select: Select;
  let degrees: string;
  let reverse: boolean;

  $: {
    if (degrees) {
      if (reverse && degrees !== '0') {
        value = `-rotate-${degrees}`;
      } else {
        value = `rotate-${degrees}`;
      }
    } else {
      value = '';
    }
  }
</script>

<div class="flex flex-row gap-1 items-center">
  Rotate
  <Select
    bind:this={select}
    bind:value={degrees}
    placeholder="Degrees"
    styles={selectStyles}>
    {#each options as option}
      <SelectOption value={option} {select}>
        <div>{option}</div>
      </SelectOption>
    {/each}
  </Select>
  <Switch bind:checked={reverse} />
  Reverse?
</div>

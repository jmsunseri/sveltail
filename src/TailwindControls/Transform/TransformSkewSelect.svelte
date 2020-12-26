<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import TransformSkewNumberSelect from './TransformSkewNumberSelect.svelte';

  const options: string[] = ['skew-x', 'skew-y'];
  export let value: string;
  let select: Select;
  let skew: string;
  let xY: string;
  let reverse: boolean;

  $: {
    if (xY && skew) {
      if (reverse) {
        value = `-${xY}-${skew}`;
      } else {
        value = `${xY}-${skew}`;
      }
    } else {
      value = '';
    }
  }
</script>

<div class="flex flex-row gap-1 items-center">
  Skew
  <Select
    bind:this={select}
    bind:value={xY}
    placeholder="X or Y"
    styles={selectStyles}>
    {#each options as option}
      <SelectOption value={option} {select}>
        <div>{option}</div>
      </SelectOption>
    {/each}
  </Select>
  <TransformSkewNumberSelect bind:value={skew} />
  <Switch bind:checked={reverse} />
  Reverse?
</div>

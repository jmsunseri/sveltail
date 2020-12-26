<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import TransformScaleNumberSelect from './TransformScaleNumberSelect.svelte';

  const options: string[] = ['scale', 'scale-x', 'scale-y'];
  export let value: string;
  let select: Select;
  let scale: string;
  let xY: string;

  $: {
    if (!xY && value) {
      if (value.includes('scale-x')) {
        xY = 'scale-x';
      } else if (value.includes('scale-y')) {
        xY = 'scale-y';
      } else {
        xY = 'scale';
      }
    }
    if (!scale && value) {
      let x = value.split('-');
      scale = x[x.length - 1];
    }

    if (xY && scale) {
      value = `${xY}-${scale}`;
    } else if (scale) {
      value = `scale-${scale}`;
    } else {
      value = '';
    }
  }
</script>

<div class="flex flex-row gap-1 items-center">
  Scale
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
  <TransformScaleNumberSelect bind:value={scale} />
</div>

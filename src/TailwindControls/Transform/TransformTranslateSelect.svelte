<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import TransformTranslateNumberSelect from './TransformTranslateNumberSelect.svelte';

  const options: string[] = ['', 'translate-x', 'translate-y'];
  export let value: string;
  let select: Select;
  let scale: string;
  let xY: string;
  let reverse: boolean;

  $: {
    if (!xY && value) {
      if (value.includes('translate-x')) {
        xY = 'translate-x';
      } else if (value.includes('translate-y')) {
        xY = 'translate-y';
      } else {
        xY = '';
      }
      if (value[0] === '-') {
        reverse = true;
      }
    }
    if (!scale && value) {
      let x = value.split('-');
      scale = x[x.length - 1];
    }

    if (xY && scale) {
      if (reverse) {
        value = `-${xY}-${scale}`;
      } else {
        value = `${xY}-${scale}`;
      }
    } else {
      value = '';
    }
  }
</script>

<div class="flex flex-row gap-1 items-center">
  Translate
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
  <TransformTranslateNumberSelect bind:value={scale} />
  <Switch bind:checked={reverse} />
  Reverse?
</div>

<script lang="ts">
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';

  const options: string[] = [
    'opacity-0',
    'opacity-5',
    'opacity-10',
    'opacity-20',
    'opacity-25',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-75',
    'opacity-80',
    'opacity-90',
    'opacity-95',
    'opacity-100',
  ];
  export let value: string | undefined;
  export let prefix: string;

  let prefixedOptions: string[] = options;

  $: {
    prefixedOptions = options.map((x) => `${!!prefix ? `${prefix}-` : ''}${x}`);
  }

  $: {
    if (value) {
      if (prefix && !value.startsWith(prefix)) {
        value = `${prefix}-opacity-${value.split('opacity-')[1]}`;
      } else if (!prefix && !value.startsWith('opacity-')) {
        value = `opacity-${value.split('opacity-')[1]}`;
      }
    }
  }

  let select: Select;
</script>

<Select
  placeholder="Opacity"
  bind:value
  bind:this={select}
  styles={selectStyles}>
  {#each prefixedOptions as option}
    <SelectOption {select} value={option} on:selected>{option}</SelectOption>
  {/each}
</Select>

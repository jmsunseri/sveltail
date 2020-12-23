<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import ColorMenu from './ColorMenu.svelte';
  export let value: string;
  export let prefix: string;

  let from: string;
  let to: string;
  let via: string;
  let isGradient: boolean = false;
  let isVia: boolean = false;
  let direction: string = 'b';
  let select: Select;

  $: {
    if (isGradient && from && direction) {
      if (to && via && isVia) {
        value = `${prefix}-gradient-to-${direction} ${from} ${via} ${to}`;
      } else if (to) {
        value = `${prefix}-gradient-to-${direction} ${from} ${to}`;
      } else {
        value = `${prefix}-gradient-to-${direction} ${from}`;
      }
    }
  }

  onMount(async () => {
    await tick();

    if (value.includes('gradient')) {
      isGradient = true;
      if (value.includes('gradient-to-b')) {
        direction = 'b';
      } else if (value.includes('gradient-to-t')) {
        direction = 't';
      } else if (value.includes('gradient-to-l')) {
        direction = 'l';
      } else if (value.includes('gradient-to-r')) {
        direction = 'r';
      }
    }
    if (value.includes('via')) {
      isVia = true;
    }
  });
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-row gap-2">
    <Switch bind:checked={isGradient} />
    <span>Gradient ?</span>
  </div>

  {#if isGradient}
    Direction:
    <Select bind:this={select} styles={selectStyles} bind:value={direction}>
      <SelectOption {select} value="b">From Top To Bottom</SelectOption>
      <SelectOption {select} value="t">From Bottom To Top</SelectOption>
      <SelectOption {select} value="r">From Left To Right</SelectOption>
      <SelectOption {select} value="l">From Right To Left</SelectOption>
    </Select>
    From:
    <ColorMenu prefix="from" bind:value={from} />
    <div class="flex flex-row gap-2">
      <Switch bind:checked={isVia} />
      <span>Via ?</span>
    </div>
    {#if isVia}
      <ColorMenu prefix="via" bind:value={via} />
    {/if}
    To:
    <ColorMenu prefix="to" bind:value={to} />
  {:else}
    <ColorMenu {prefix} bind:value />
  {/if}
</div>

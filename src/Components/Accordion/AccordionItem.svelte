<script lang="ts">
  import { onMount, tick } from 'svelte';
  import Card from '../Card/Card.svelte';
  import type Accordion from './Accordion.svelte';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  import FaChevronUp from 'svelte-icons/fa/FaChevronUp.svelte';
  import { slide } from 'svelte/transition';

  export let accordion: Accordion;
  export let id: number;
  export let headerText: string;
  export let isFirst: boolean;
  export let isLast: boolean;

  let isSelected: boolean;
  let isAbove: boolean;
  let isBelow: boolean;
  let cardStyle: string;

  onMount(async () => {
    await tick();
    const remove = accordion.$on('clicked', (e: CustomEvent<any>) => {
      isSelected = e.detail.id === id;
      isAbove = e.detail.above == id;
      isBelow = e.detail.below == id;
      return remove;
    });
    accordion.registerId(id);
  });

  const onItemClick = () => {
    if (!isSelected) {
      accordion.onItemClick(id);
    } else {
      accordion.onItemClick(undefined);
    }
  };

  $: {
    let tempCardStyle =
      'border-r-2 border-l-2 p-2 border-dashed border-grey-300';
    if (isFirst || isSelected || isBelow) {
      tempCardStyle += ' border-t-2 rounded-t-lg';
    }
    if (isLast || isSelected || isAbove) {
      tempCardStyle += ' rounded-b-lg border-b-2';
    }
    if (isSelected) {
      tempCardStyle += ' border-t-2 border-b-2';
      if (isFirst) {
        tempCardStyle += ' mb-4';
      } else if (isLast) {
        tempCardStyle += ' mt-4';
      } else {
        tempCardStyle += ' my-4';
      }
    }

    cardStyle = tempCardStyle;
  }
</script>

<div class={cardStyle}>
  <button class="w-full border-none focus:outline-none" on:click={onItemClick}>
    <span class="flex justify-between items-center gap-4">
      <div class="flex">{headerText}</div>

      <div class="h-4 w-4 text-blue-300">
        {#if isSelected}
          <FaChevronUp />
        {:else}
          <FaChevronDown />
        {/if}
      </div>
    </span>
  </button>
  {#if isSelected}
    <div transition:slide class="mt-2">
      <slot />
    </div>
  {/if}
</div>

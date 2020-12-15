<script lang="ts">
  import { slide } from 'svelte/transition';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  export let buttonStyles: string[];
  export let menuStyles: string[];
  export let placeholder: string;
  export let value: any;

  let isMenuOpen: boolean;

  export const onSelected = (v: any) => {
    isMenuOpen = false;
    value = v;
  };

  export const onClick = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<span class="relative flex-grow">
  <button class={buttonStyles?.join(' ')} on:click={onClick}>
    <span class="flex justify-between items-center gap-4">
      {value || placeholder || ''}
      <div class="h-5 w-5">
        <FaChevronDown />
      </div>
    </span>
  </button>
  {#if isMenuOpen}
    <div
      transition:slide
      class={menuStyles?.join(' ') + ' absolute z-10 h-80 overflow-auto w-full'}>
      <ul class="list-reset">
        <slot />
      </ul>
    </div>
  {/if}
</span>

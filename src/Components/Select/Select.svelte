<script lang="ts">
  import { slide } from 'svelte/transition';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  import type { SelectStyles } from './SelectStyle';
  export let styles: SelectStyles;
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
  <button
    class={styles.button.toStyles() + ' focus:outline-none'}
    on:click={onClick}>
    <span class="flex justify-between items-center gap-4">
      {value || placeholder || ''}
      <div class={styles.button.icon.toStyles()}>
        <FaChevronDown />
      </div>
    </span>
  </button>
  {#if isMenuOpen}
    <div
      transition:slide
      class={styles.menu.toStyles() + ' absolute z-10 h-80 overflow-auto w-full cursor-pointer'}>
      <ul class="list-reset">
        <slot />
      </ul>
    </div>
  {/if}
</span>

<script lang="ts">
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  export let buttonStyles: string[];
  export let menuStyles: string[];

  export let label: string;

  export let isMenuOpen: boolean;
</script>

<span class="relative">
  <button class={buttonStyles?.join(' ')} on:click>
    <span class="flex justify-between items-center gap-4">
      {label || ''}
      <div class="h-5 w-5">
        <FaChevronDown />
      </div>
    </span>
  </button>
  {#if isMenuOpen}
    <div class={menuStyles?.join(' ') + ' absolute z-10'}>
      <ul class="list-reset">
        <slot />
      </ul>
    </div>
  {/if}
</span>

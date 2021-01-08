<script lang="ts">
  import { slide } from 'svelte/transition';
  import { ChevronDown, ChevronUp, X } from 'tabler-icons-svelte';
  import type { SelectStyles } from './SelectStyle';
  export let styles: SelectStyles;
  export let placeholder: string;
  export let value: any;
  export let mustHaveValue: boolean = false;

  export let isMenuOpen: boolean;

  export const onSelected = (v: any) => {
    isMenuOpen = false;
    value = v;
  };

  export const getStyle = (): string => {
    return styles?.menuItem?.toStyles();
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
        {#if !isMenuOpen}
          <ChevronDown
            size={styles.button.icon.size}
            strokeWidth={styles.button.icon.stroke} />
        {:else}
          <ChevronUp
            size={styles.button.icon.size}
            strokeWidth={styles.button.icon.stroke} />
        {/if}
      </div>
    </span>
  </button>
  {#if isMenuOpen}
    <div
      transition:slide
      class={styles.menu.toStyles() + ' absolute z-10 overflow-auto w-full cursor-pointer'}>
      {#if !mustHaveValue}
        <div class="flex m-1 justify-end items-center">
          <button
            class="focus:outline-none"
            on:click={() => onSelected(undefined)}>
            <div class={`${styles.button.icon.toStyles()}`}>
              <X
                size={styles.button.icon.size}
                strokeWidth={styles.button.icon.stroke} />
            </div>
          </button>
        </div>
      {/if}
      <slot />
    </div>
  {/if}
</span>

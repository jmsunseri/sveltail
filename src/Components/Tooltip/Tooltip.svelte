<script lang="ts">
  import { fade } from 'svelte/transition';
  import { getStyles } from '../../utils';
  import { TooltipStyles } from './TooltipStyles';
  let anchor: HTMLDivElement;
  export let visible: boolean = false;
  export let styles: TooltipStyles = new TooltipStyles();
  const onMouseEnter = () => {
    visible = true;
  };

  const onMouseLeave = () => {
    visible = false;
  };
</script>

<div
  class="flex justify-center items-center"
  bind:this={anchor}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}>
  <slot />
  {#if visible}
    <div class={`absolute z-50 ${getStyles(styles.transform)}`}>
      <div
        transition:fade={{ duration: 300 }}
        class={getStyles([
          styles.spacing,
          styles.effects,
          styles.font,
          styles.border,
          styles.color,
        ])}>
        <slot name="tooltip" />
      </div>
    </div>
  {/if}
</div>

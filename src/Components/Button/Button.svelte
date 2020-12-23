<script lang="ts">
  import type { ButtonStyles } from './Models/ButtonStyles';
  export let styles: ButtonStyles;

  let buttonStyles: string = 'btn';
  let iconStyles: string;

  $: {
    buttonStyles = `${styles.toStyles()}`;
  }

  $: {
    iconStyles = `${styles.icon.toStyles()}`;
  }
</script>

<button class={buttonStyles} on:click>
  <div class="flex flex-row gap-1 items-center justify-center">
    {#if $$slots.icon}
      <div class={iconStyles}>
        <slot name="icon" />
      </div>
    {/if}
    <slot />
    {#if $$slots.trailingIcon}
      <div class={iconStyles}>
        <slot name="trailingIcon" />
      </div>
    {/if}
  </div>
</button>

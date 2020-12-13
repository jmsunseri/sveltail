<script lang="ts">
  export let styles: string[];
  export let iconStyles: string[];
</script>

<button class={`btn ${styles.join(' ')}`} on:click>
  <div class="flex flex-row gap-1 items-center">
    {#if $$slots.icon}
      <div class={iconStyles.join(' ')}>
        <slot name="icon" />
      </div>
    {/if}
    <slot />
    {#if $$slots.trailingIcon}
      <div class={iconStyles.join(' ')}>
        <slot name="trailingIcon" />
      </div>
    {/if}
  </div>
</button>

<script lang="ts">
  import { getStyles } from '../../utils';

  import { TextFieldStyles } from './TextFieldStyles';
  export let styles: TextFieldStyles = new TextFieldStyles();
  export let value: string;
  export let placeholder: string;
  let container: string;

  $: {
    container = getStyles([
      styles.ring,
      styles?.color,
      styles?.border,
      styles?.font,
      styles?.spacing,
      styles.transform,
      styles.transition,
      styles.effects,
      styles.placeholder,
    ]);
  }
</script>

<div class="flex items-center">
  {#if $$slots.icon}
    <div class={`relative left-8 ${styles?.icon?.toStyles()}`}>
      <slot name="icon" />
    </div>
  {/if}
  <input
    class={`focus:outline-none min-w-0 ${!!$$slots.icon && 'pl-10'} flex-1 bg-transparent ${container}`}
    type="text"
    bind:value
    {placeholder} />
  {#if $$slots.trailingIcon}
    <div class={`relative right-8 ${styles?.icon?.toStyles()}`}>
      <slot name="trailingIcon" />
    </div>
  {/if}
</div>

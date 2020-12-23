<script lang="ts">
  import { TextFieldStyles } from './TextFieldStyles';
  export let styles: TextFieldStyles = new TextFieldStyles();
  export let value: string;
  export let placeholder: string;

  let input: string;
  let icon: string;
  let ring: string;
  let font: string;

  let isFocused = false;
  let activateRingOnFocus = false;

  $: {
    icon = styles?.icon?.toStyles();
    input = [
      styles?.color,
      styles?.border?.toStyles(),
      styles?.font?.toStyles(),
      styles?.spacing?.toStyles(),
    ].join(' ');
    font = styles?.font?.toStyles();

    if (styles?.ring?.onFocus === false) {
      input += ` ${styles.ring.toStyles()}`;
    } else {
      console.log('setting activate ring on focus');
      ring = styles.ring.toStyles().replaceAll('focus:', '');
      activateRingOnFocus = true;
    }
  }
</script>

<div
  class={activateRingOnFocus && isFocused ? `${input} ${ring}` : input}
  on:click>
  <div class="flex flex-row gap-1 items-center">
    {#if $$slots.icon}
      <div class={icon}>
        <slot name="icon" />
      </div>
    {/if}
    <input
      class={`focus:outline-none flex-1 bg-transparent ${font}`}
      type="text"
      bind:value
      on:focus={() => {
        isFocused = true;
      }}
      on:blur={() => {
        isFocused = false;
      }}
      {placeholder} />
    {#if $$slots.trailingIcon}
      <div class={icon}>
        <slot name="trailingIcon" />
      </div>
    {/if}
  </div>
</div>

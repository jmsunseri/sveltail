<script lang="ts">
  import { TextFieldStyles } from './TextFieldStyles';
  export let styles: TextFieldStyles = new TextFieldStyles();
  export let value: string;
  export let placeholder: string;

  let input: string;
  let icon: string;
  let ring: string;
  let font: string;
  let container: string;
  let transform: string;
  let transition: string;

  let isFocused = false;
  let activateRingOnFocus = false;

  $: {
    icon = styles?.icon?.toStyles();
    input = [
      styles?.color
        .filter((x) => !!x)
        .map((x) => x.toStyles())
        .join(' '),
      styles?.border?.toStyles(),
      styles?.font?.toStyles(),
      styles?.spacing?.toStyles(),
    ].join(' ');
    font = styles?.font?.toStyles();

    if (styles?.ring?.onFocus === false) {
      input += ` ${styles.ring.toStyles()}`;
    } else {
      ring = styles.ring.toStyles().replaceAll('focus:', '');
      activateRingOnFocus = true;
    }
    transform = styles.transform.toStyles();
    transition = styles.transition.toStyles();
  }

  $: {
    container =
      activateRingOnFocus && isFocused
        ? `flex flex-col justify-center ${input} ${ring}`
        : `flex flex-col justify-center ${input}`;
    if (transform) {
      container += ` ${transform}`;
    }
    if (transition) {
      container += ` ${transition}`;
    }
  }
</script>

<div class={container} on:click>
  <div class="flex flex-row gap-1 items-center">
    {#if $$slots.icon}
      <div class={icon}>
        <slot name="icon" />
      </div>
    {/if}
    <input
      class={`focus:outline-none min-w-0 flex-1 bg-transparent ${font}`}
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

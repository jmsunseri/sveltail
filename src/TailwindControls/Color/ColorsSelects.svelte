<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import ColorSelect from './ColorSelect.svelte';
  import { ColorStyle } from './ColorStyle';

  export let value: ColorStyle[] = [new ColorStyle()];
  export let prefix: string;
  export let blockGradient: boolean;
</script>

<ColorSelect {prefix} bind:value={value[0]} {blockGradient} />

{#if value.length < 2}
  <div class="flex flex-row justify-center">
    <Button
      styles={primaryButton}
      on:click={() => {
        console.log('value', value);

        value = [...value, new ColorStyle({ isHover: true })];
      }}>
      Add Hover Color
    </Button>
  </div>
{:else}
  Hover Color
  <ColorSelect {prefix} bind:value={value[1]} {blockGradient} />
{/if}

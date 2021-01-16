<script lang="ts">
  import { Trash } from 'tabler-icons-svelte';
  import BorderStyleSelect from './BorderStyleSelect.svelte';
  import BorderWidthSelect from './BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from './BorderRadius/BorderRadiusSelect.svelte';
  import { BorderStyles } from './BorderStyles';
  import ColorsSelects from '../Color/ColorsSelects.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import {
    primaryButton,
    tooltip,
  } from '../../StyleDefinitions/SveltailStyles';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import Tooltip from '../../Components/Tooltip/Tooltip.svelte';

  export let value: BorderStyles[] = [new BorderStyles()];

  const onDelete = (index: number) => {
    value = value.filter((_, i) => i !== index);
  };
</script>

<div class="flex flex-col gap-2">
  {#each value as border, index}
    <div class="flex gap-2">
      <BorderStyleSelect bind:value={border.style} />
      <Tooltip styles={tooltip}>
        <div slot="tooltip">Delete Border</div>
        <IconButton
          on:click={() => onDelete(index)}
          styles={[
            'border-none',
            'fill-current',
            'text-blue-300',
            'focus:outline-none',
          ]}
        >
          <Trash />
        </IconButton>
      </Tooltip>
    </div>

    <BorderWidthSelect bind:value={border.width} />
    <BorderRadiusSelect bind:value={border.radius} />
    <ColorsSelects
      bind:value={border.color}
      prefix="border"
      blockGradient
      blockFilters
    />
  {/each}
  <Button
    styles={primaryButton}
    on:click={() => (value = [...value, new BorderStyles()])}
  >Add Border</Button>
</div>

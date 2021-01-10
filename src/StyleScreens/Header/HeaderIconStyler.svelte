<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import { getNewInstance, headerStyles, selectedStyle } from '../../store';
  import Slider from '../../Components/Slider/Slider.svelte';

  let accordion: Accordion;
  const reset = () => ($headerStyles.icon = $getNewInstance().header.icon);

  $: {
    $selectedStyle = $headerStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Header Icon"
  bind:style={$headerStyles.icon}
  {reset}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst isLast id={0} {accordion} headerText="Icon">
      <div class="flex-col flex gap-1">
        <Slider
          min={12}
          max={100}
          bind:value={$headerStyles.icon.size}
          step={1}
          units="px"
          label="Size" />
        <Slider
          min={0.5}
          max={10}
          bind:value={$headerStyles.icon.stroke}
          step={0.5}
          units="px"
          label="Stroke" />
        <ColorsSelects prefix="text" bind:value={$headerStyles.icon.color} />
      </div>
    </AccordionItem>
  </Accordion>
</StyleGroup>

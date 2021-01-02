<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { headerStyles, selectedStyle } from '../../store';
  import Slider from '../../Components/Slider/Slider.svelte';

  let accordion: Accordion;

  $: {
    $selectedStyle = $headerStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Header Icon"
  bind:style={$headerStyles.icon}
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

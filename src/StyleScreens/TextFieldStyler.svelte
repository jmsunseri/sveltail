<script lang="ts">
  import FontSelect from '../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../Components/Accordion/AccordionItem.svelte';
  import RingSelect from '../TailwindControls/Ring/RingSelect.svelte';
  import TransformSelect from '../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../TailwindControls/Transition/TransitionSelect.svelte';
  import PlaceholderSelect from '../TailwindControls/Placeholder/PlaceholderSelect.svelte';
  import { textFieldStyles, getNewInstance } from '../store';
  import EffectsSelect from '../TailwindControls/Effects/EffectsSelect.svelte';
  import Slider from '../Components/Slider/Slider.svelte';
  import { Variant } from '../Variant';

  let accordion: Accordion;

  const reset = () => ($textFieldStyles = $getNewInstance().textField);
</script>

<StyleGroup on:closed header="Text Field" bind:style={$textFieldStyles} {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects
        prefix="bg"
        bind:value={$textFieldStyles.color}
        variants={[Variant.None, Variant.Hover, Variant.Focus]}
      />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$textFieldStyles.font} />
    </AccordionItem>
    <AccordionItem id={2.5} {accordion} headerText="Placeholder">
      <PlaceholderSelect bind:value={$textFieldStyles.placeholder} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$textFieldStyles.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Ring">
      <RingSelect bind:value={$textFieldStyles.ring} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$textFieldStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={6.1} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$textFieldStyles.effects} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Icon">
      <div class="flex-col flex gap-1">
        <Slider
          min={12}
          max={100}
          bind:value={$textFieldStyles.icon.size}
          step={1}
          units="px"
          label="Size"
        />
        <Slider
          min={0.5}
          max={10}
          bind:value={$textFieldStyles.icon.stroke}
          step={0.5}
          units="px"
          label="Stroke"
        />
        <ColorsSelects prefix="text" bind:value={$textFieldStyles.icon.color} />
      </div>
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Transform">
      <TransformSelect bind:value={$textFieldStyles.transform} />
    </AccordionItem>
    <AccordionItem isLast id={9} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$textFieldStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>

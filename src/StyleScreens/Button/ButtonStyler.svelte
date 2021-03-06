<script lang="ts">
  import type { ButtonStyles } from '../../Components/Button/Models/ButtonStyles';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import RingSelect from '../../TailwindControls/Ring/RingSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import {
    getNewInstance,
    primaryButtonStyles,
    secondaryButtonStyles,
  } from '../../store';
  import type { Writable } from 'svelte/store';
  import Slider from '../../Components/Slider/Slider.svelte';
  import { Variant } from '../../Variant';

  let accordion: Accordion;
  export let isPrimary: boolean;

  let value: Writable<ButtonStyles> = primaryButtonStyles;

  const reset = () => {
    if (isPrimary) {
      $primaryButtonStyles = $getNewInstance().primaryButton;
    } else {
      $secondaryButtonStyles = $getNewInstance().secondaryButton;
    }
  };

  $: {
    if (isPrimary) {
      value = primaryButtonStyles;
    } else {
      value = secondaryButtonStyles;
    }
  }
</script>

<StyleGroup on:closed header="Button Styles" bind:style={$value} {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects
        prefix="bg"
        bind:value={$value.color}
        variants={[Variant.None, Variant.Hover, Variant.Focus]}
      />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Font">
      <FontSelect bind:value={$value.font} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Border">
      <BorderSelect bind:value={$value.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Ring">
      <RingSelect bind:value={$value.ring} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$value.effects} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$value.spacing} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Icon">
      <div class="flex-col flex gap-1">
        <Slider
          min={12}
          max={100}
          bind:value={$value.icon.size}
          step={1}
          units="px"
          label="Size"
        />
        <Slider
          min={0.5}
          max={10}
          bind:value={$value.icon.stroke}
          step={0.5}
          units="px"
          label="Stroke"
        />
        <ColorsSelects prefix="text" bind:value={$value.icon.color} />
      </div>
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Transform">
      <TransformSelect bind:value={$value.transform} />
    </AccordionItem>
    <AccordionItem isLast id={8} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$value.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>

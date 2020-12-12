<script lang="ts">
  import FaBorderStyle from 'svelte-icons/fa/FaBorderStyle.svelte';
  import IconButton from '../Components/Button/IconButton.svelte';
  import ColorMenu from '../Color/ColorMenu.svelte';
  import BorderStyleSelect from './BorderStyleSelect.svelte';
  import BorderWidthSelect from './BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from './BorderRadius/BorderRadiusSelect.svelte';
  import { slide } from 'svelte/transition';

  let isMenuVisible: boolean = false;
  let isStyleMenuVisible: boolean = false;
  let isWidthMenuVisible: boolean = false;
  let isRadiusMenuVisible: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  let borderColor: string = 'border-black';
  let borderStyle: string = 'border-solid';
  let borderWidth: string = 'border-2';
  let borderRadius: string = 'rounded-none';

  export let value: string = [
    borderColor,
    borderStyle,
    borderWidth,
    borderRadius,
  ].join(' ');

  const updateValue = () => {
    value = [borderColor, borderStyle, borderWidth, borderRadius].join(' ');
  };

  const updateColor = (style: string) => {
    borderColor = `border-${style}`;
    updateValue();
  };

  const onStyleSelect = (style: CustomEvent<any>) => {
    borderStyle = style.detail;
    isStyleMenuVisible = false;
    updateValue();
  };

  const onStyleButtonClick = () => {
    isStyleMenuVisible = !isStyleMenuVisible;
  };

  const onWidthSelect = (style: CustomEvent<any>) => {
    borderWidth = style.detail;
    isWidthMenuVisible = false;
    updateValue();
  };

  const onWidthButtonClick = () => {
    isWidthMenuVisible = !isWidthMenuVisible;
  };

  const onRadiusSelect = (style: CustomEvent<any>) => {
    borderRadius = style.detail;
    isRadiusMenuVisible = false;
    updateValue();
  };

  const onRadiusButtonClick = () => {
    isRadiusMenuVisible = !isRadiusMenuVisible;
  };
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowMenuClick}
    styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}>
    <FaBorderStyle />
  </IconButton>

  <div>
    {#if isMenuVisible}
      <div
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1">
        <BorderStyleSelect
          value={borderStyle}
          on:click={onStyleButtonClick}
          on:selected={onStyleSelect}
          isMenuOpen={isStyleMenuVisible} />
        <BorderWidthSelect
          value={borderWidth}
          on:click={onWidthButtonClick}
          on:selected={onWidthSelect}
          isMenuOpen={isWidthMenuVisible} />
        <BorderRadiusSelect
          value={borderRadius}
          on:click={onRadiusButtonClick}
          on:selected={onRadiusSelect}
          isMenuOpen={isRadiusMenuVisible} />

        <ColorMenu {updateColor} />
      </div>
    {/if}
  </div>
</div>

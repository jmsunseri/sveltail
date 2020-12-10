<script lang="ts">
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  export let buttonStyles: string[];
  export let menuStyles: string[];

  let selectedValueText: string;
  export let placeHolder: string;
  export let value: any;

  let isShowMenu: boolean;

  const onSelect = (selectedValue: any, text: string) => {
    selectedValueText = text;
    value = selectedValue;
  };

  const onButtonClick = () => {
    isShowMenu = !isShowMenu;
  };

  const onBlur = () => {
    isShowMenu = false;
  };
</script>

<span class="relative ">
  <button
    class={buttonStyles?.join(' ')}
    on:click={onButtonClick}
    on:blur={onBlur}>
    <span class="flex justify-between items-center gap-4">
      {selectedValueText || placeHolder || ''}
      <div class="h-5 w-5">
        <FaChevronDown />
      </div>
    </span>
  </button>
  {#if isShowMenu}
    <div class={menuStyles?.join(' ') + ' absolute z-10'}>
      <ul class="list-reset">
        <slot {onSelect} />
      </ul>
    </div>
  {/if}
</span>

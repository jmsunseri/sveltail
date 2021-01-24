<script lang="ts">
  import { checkboxStyles, tableStyles } from '../../store';
  import Checkbox from '../Checkbox/Checkbox.svelte';
  import Flex from '../Flex.svelte';
</script>

<Flex dir="col" css={$tableStyles.toStyles()}>
  <Flex dir="row" gap={3} css={$tableStyles.header.toStyles()}>
    <div
      class={`${$checkboxStyles.size.height || ''} ${
        $checkboxStyles.size.width || ''
      }`}
    />
    <Flex size="1">Name</Flex>
    <Flex size="1">Type</Flex>
    <Flex size="1">Breed</Flex>
    <Flex size="1">Distance</Flex>
  </Flex>
  <Flex dir="row" gap={3} align="center" css={$tableStyles.row.toStyles()}>
    <Checkbox style={$checkboxStyles} />
    <Flex size="1">Fido</Flex>
    <Flex size="1">Dog</Flex>
    <Flex size="1">Hound</Flex>
    <Flex size="1">10km</Flex>
  </Flex>
  <Flex dir="row" gap={3} align="center" css={$tableStyles.row.toStyles()}>
    <Checkbox checked style={$checkboxStyles} />
    <Flex size="1">Doge</Flex>
    <Flex size="1">Dog</Flex>
    <Flex size="1">Shiba Inu</Flex>
    <Flex size="1">1km</Flex>
  </Flex>
  <Flex dir="row" gap={3} align="center" css={$tableStyles.row.toStyles()}>
    <Checkbox style={$checkboxStyles} />
    <Flex size="1">Fifi</Flex>
    <Flex size="1">Dog</Flex>
    <Flex size="1">Poodle</Flex>
    <Flex size="1">7km</Flex>
  </Flex>
  <Flex dir="row" gap={3} align="center" css={$tableStyles.row.toStyles()}>
    <Checkbox style={$checkboxStyles} />
    <Flex size="1">Gaston</Flex>
    <Flex size="1">Dog</Flex>
    <Flex size="1">French Bulldog</Flex>
    <Flex size="1">5km</Flex>
  </Flex>
  <Flex dir="row" gap={3} align="center" css={$tableStyles.row.toStyles()}>
    <Checkbox style={$checkboxStyles} />
    <Flex size="1">Floyd</Flex>
    <Flex size="1">Dog</Flex>
    <Flex size="1">Pug</Flex>
    <Flex size="1">3km</Flex>
  </Flex>
</Flex>

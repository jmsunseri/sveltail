import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import { HeaderStyle } from './Components/Header/HeaderStyle';
import { primaryButton, secondaryButton, header } from './DefaultStyles';

const headerStyles = writable<HeaderStyle>(header);
const primaryButtonStyles = writable<ButtonStyles>(primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(secondaryButton);

export { headerStyles, primaryButtonStyles, secondaryButtonStyles };

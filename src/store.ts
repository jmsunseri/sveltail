import { writable } from 'svelte/store';
import type { ButtonStyles } from './Components/Button/Models/ButtonStyles';
import { primaryButton, secondaryButton } from './DefaultStyles';

const headerStyles = writable('');
const primaryButtonStyles = writable<ButtonStyles>(primaryButton);
const secondaryButtonStyles = writable<ButtonStyles>(secondaryButton);

export { headerStyles, primaryButtonStyles, secondaryButtonStyles };

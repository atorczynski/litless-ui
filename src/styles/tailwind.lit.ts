import { css } from 'lit';
import { unsafeCSS } from 'lit';

import styles from '../output.css?inline';

export const tailwindStyles = css`
  ${unsafeCSS(styles)}
`;

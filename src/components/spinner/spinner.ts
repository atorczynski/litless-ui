import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwindStyles } from '../../styles/tailwind.lit.js';

@customElement('less-spinner')
export class LoadingSpinner extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div
        class="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
          Loading...
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'less-spinner': LoadingSpinner;
  }
}

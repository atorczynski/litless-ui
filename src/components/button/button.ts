import { html } from 'lit';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tailwindStyles } from '../../styles/tailwind.lit.js';

import '../spinner/spinner.js';

@customElement('less-button')
export class Button extends LitElement {
  static styles = [tailwindStyles];

  @property({ type: String })
  variant: 'primary' | 'secondary' = 'primary';

  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  loading: boolean = false;

  base = 'rounded-md px-4 py-2 text-white transition-colors duration-75';

  private getVariantClass() {
    if (this.disabled) {
      return `${this.base} bg-gray-500 hover:bg-gray-500 opacity-50 cursor-not-allowed`;
    }
    const variants = {
      primary: 'bg-primary hover:bg-primary-dark',
      secondary: 'bg-secondary hover:bg-secondary-dark'
    };
    return `${this.base} ${variants[this.variant]}`;
  }

  private getSizeClass() {
    const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    return sizes[this.size];
  }

  private getLoadingClass() {
    return this.loading ? 'opacity-50 cursor-not-allowed' : '';
  }

  render() {
    return html`
      <button
        variant=${this.variant}
        size=${this.size}
        ?disabled=${this.disabled}
        ?loading=${this.loading}
        class="${this.getVariantClass()} ${this.getSizeClass()} ${this.getLoadingClass()}"
      >
        ${this.loading ? html`<loading-spinner></loading-spinner>` : html`<slot></slot>`}
      </button>
    `;
  }
}

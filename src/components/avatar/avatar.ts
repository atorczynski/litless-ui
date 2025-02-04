import { LitElement, html } from 'lit';
import { property } from 'lit-element';
import { customElement } from 'lit/decorators.js';
import { tailwindStyles } from '../../styles/tailwind.lit.js';
import { when } from 'lit/directives/when.js';

@customElement('less-avatar')
export class Avatar extends LitElement {
  static styles = [tailwindStyles];

  @property({ type: String })
  image: string = '';

  @property({ type: String })
  alt: string = '';

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  shape: 'circle' | 'square' | 'rounded' = 'circle';

  baseclass = 'w-12 h-12 overflow-hidden';

  private getShapeClass() {
    if (this.shape === 'circle') {
      return 'rounded-full';
    }
    if (this.shape === 'square') {
      return 'rounded-none';
    }
    return 'rounded-md';
  }

  private getLabelClass() {
    if (this.label) {
      return 'bg-primary text-white text-sm font-medium text-center text-white m-auto';
    }
    return '';
  }

  render() {
    return html`<div class="${this.baseclass} ${this.getShapeClass()} ${this.getLabelClass()}} flex">
      ${when(
        this.image,
        () => html`<img src=${this.image} alt=${this.alt} />`,
        () => html`<span class=${this.getLabelClass()}>${this.label}</span>`
      )}
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'less-avatar': Avatar;
  }
}

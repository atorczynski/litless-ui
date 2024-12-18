import { html } from 'lit';
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button')
export class Button extends LitElement {
  render() {
    return html`<button>
      <slot></slot>
    </button>`;
  }
}

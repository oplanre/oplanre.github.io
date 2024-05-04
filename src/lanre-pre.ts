import { LitElement, css, html } from 'lit'
import { customElement} from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lanre-pre')
export class LanrePre extends LitElement {
  render() {
    return html`
      <pre>
          <slot></slot>
      </pre>
    `
  }
  static styles = css`
  :host {
    display: block;
    max-width: 50%;
    padding: 16px;
  }

  pre {
    background-color: #f4f4f4;
    border: 3px solid #f36d33;
    color: #333;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }
   
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'lanre-pre': LanrePre
  }
}

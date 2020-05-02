import {LitElement, html, css, customElement} from 'lit-element';

@customElement('knd-button')
export class KndButton extends LitElement {

    static styles = css`
        button {
          background-color: green;
        }`;

    render() {
        return html`<button><slot></slot></button>!`;
    }

}

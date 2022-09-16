import { html, css, LitElement } from 'lit';

export class WebSeriesCard extends LitElement {
  static get styles() {
    return css`
      /*@media (min-width: 800px) {
        :host {
          border-radius: 20px;
          background-color: #f2f2f2;
          padding: 2rem;
          flex: 50%;
          flex-direction: row;
          border: 0.2rem solid #d6eaf8;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(3, minmax(0, 1fr));
        }
      }
      @media (max-width: 800px) {
        :host {
          border-radius: 20px;
          background-color: #f2f2f2;
          padding: 2rem;
          border: 0.2rem solid #d6eaf8;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-columns: repeat(0, minmax(0, 1fr));
          grid-template-rows: repeat(6, minmax(0, 1fr));
        }
      }
*/
      div {
        background-color: rgb(255, 255, 255);
        margin: 1rem 1rem;
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: 0.1rem solid #1b4f72;
      }
    `;
  }

  render() {
    return html`
      <div>
        <span>
          TITLE<br />
          director<br />
          stars<br />
          streaming platform<br />
          <button>DELETE</button>
        </span>
      </div>
    `;
  }
}
// window.customElements.define('web-series-card', WebSeriesCard);

// eslint-disable-next-line max-classes-per-file
import { LitElement, html, css } from 'lit';
// import { WebSeries } from './WebSeries.js';
import { webSeriesOverview } from './webSeriesOverview.js';

import { webSeriesForm } from './webSeriesForm.js';

window.customElements.define('web-series-form', webSeriesForm);
window.customElements.define('web-series-overview', webSeriesOverview);

export class WebSeries extends LitElement {
  static get properties() {
    return {
      card: { type: Array },
    };
  }

  // passing values to card
  constructor() {
    super();
    this.card = '';
  }

  // adding eventlistener to form element
  // connectedCallback() {
  //   super.connectedCallback();
  //   const child = document.querySelector('form');
  //   child.addEventListener('form-submit', e => {
  //     e.preventDefault();
  //     this.title = e.detail.title;
  //     this.stars = e.detail.stars;
  //     this.director = e.detail.director;
  //     this.streamingPlatform = e.detail.streamingPlatform;
  //   });
  // }

  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        display: flex;
        flex-wrap: nowrap;
      }
      @media (max-width: 800px) {
        :host {
          display: grid;
          grid-template-columns: 1fr;
          box-sizing: border-box;
          gap: 1rem;
        }
      }
    `;
  }

  createCard(e) {
    // console.log(e.detail);
    this.card = [...this.card, e.detail];
  }

  render() {
    return html`
      <web-series-form @addingcards=${this.createCard}></web-series-form>
      <web-series-overview .card=${this.card}></web-series-overview>
    `;
  }
}

window.customElements.define('web-series', WebSeries);

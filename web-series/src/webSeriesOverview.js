// eslint-disable-next-line max-classes-per-file
import { html, css } from 'lit';

import { WebSeriesCard } from './web-series-card.js';

customElements.define('web-series-card', WebSeriesCard);

export class webSeriesOverview extends WebSeriesCard {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // adding values through attribute
  connectedCallback() {
    super.connectedCallback();
    this.title = this.getAttribute('title');
    this.director = this.getAttribute('director');
    this.stars = this.getAttribute('stars');
    this.streamingPlatform = this.getAttribute('streamingPlatform');
  }

  static get styles() {
    return css`
      @media (min-width: 800px) {
        :host {
          border-radius: 20px;
          background-color: #f2f2f2;
          padding: 2rem;
          flex: 50%;
          flex-direction: row;
          border: 0.2rem solid #d6eaf8;
          display: grid;
          grid-gap: 15px;
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
          grid-gap: 15px;
          grid-template-columns: 1fr;
          grid-template-columns: repeat(0, minmax(0, 1fr));
          grid-template-rows: repeat(6, minmax(0, 1fr));
        }
      }
    `;
  }

  // connecting values
  render() {
    return html`
      <web-series-card
        id="card"
        title=${this.title}
        director=${this.director}
        stars=${this.stars}
        streamingPlatform=${this.streamingPlatform}
      ></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
    `;
  }
}

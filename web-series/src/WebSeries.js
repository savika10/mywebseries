// eslint-disable-next-line max-classes-per-file
import { LitElement, html, css } from 'lit';

import { WebSeriesCard } from './web-series-card.js';

customElements.define('web-series-card', WebSeriesCard);

export class WebSeries extends LitElement {
  // passing values to card
  constructor() {
    super();
    this.title = 'my';
  }

  // adding eventlistener to form element
  connectedCallback() {
    super.connectedCallback();
    const child = document.querySelector('form');
    child.addEventListener('form-submit', e => {
      this.title = e.detail.title;
      this.stars = e.detail.stars;
      this.director = e.detail.director;
      this.streamingPlatform = e.detail.streamingPlatform;
    });
  }
  /*  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  } */

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

  render() {
    return html`
      <web-series-form></web-series-form>
      <web-series-overview
        title=${this.title}
        director=${this.director}
        stars=${this.stars}
        streamingPlatform=${this.streamingPlatform}
      ></web-series-overview>
    `;
  }
}

class webSeriesForm extends LitElement {
  // dispatching event
  firstUpdated() {
    const shadow = this.shadowRoot;
    const form = shadow.querySelector('form');
    form.submit = e => {
      e.preventDefault();
      const myEvent = new CustomEvent('form-submit', {
        bubbles: true,
        composed: true,
        detail: {
          title: this.shadowRoot.getElementById('title').value,
          director: this.shadowRoot.getElementById('director').value,
          stars: this.shadowRoot.getElementById('stars').value,
          streamingPlatform:
            this.shadowRoot.getElementById('streamingPlatform').value,
        },
      });
      this.dispatchEvent(myEvent);
    };
  }

  static get styles() {
    return css`
      :host {
        border-radius: 20px;
        background-color: #f2f2f2;
        padding: 2rem;
        flex: 50%;
        border: 0.2rem solid #d6eaf8;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      input[type='text'],
      select,
      textarea {
        width: 100%;
        padding: 1.2rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.4rem;
        box-sizing: border-box;
        margin-top: 0.6rem;
        margin-bottom: 1.6rem;
        resize: vertical;
      }
      .submit {
        display: flex;
        flex-direction: row-reverse;
      }
      #name:hover {
        background-color: #74b0db;
        color: #050404;
      }
      #name {
        background-color: #1b4f72;
        color: white;
        padding: 1.2rem 2rem;
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;
        transition: background-color 1s;
        transition: color 1s;
      }
    `;
  }

  render() {
    return html`
      <form name="Myform" id="Web-series-form" class="container1">
        <h4>
          TITLE:
          <input
            id="title"
            type="text"
            name="name"
            value=""
            placeholder="Title Name"
          />
        </h4>
        <h4>
          DIRECTOR:
          <input
            id="director"
            type="text"
            name="name"
            value=""
            placeholder="Directors Name"
          />
        </h4>
        <h4>
          STARS:
          <input
            id="stars"
            type="text"
            name="name"
            value=""
            placeholder="Stars Name"
          />
        </h4>
        <h4>
          STREAMING PLATFORM:
          <select id="streamingPlatform" name="streamingPlatformDropdown">
            <option value="none">none</option>
            <option value="Netflix">Netflix</option>
            <option value="Prime">Prime</option>
            <option value="Viki">Viki</option>
            <option value="Hotstar">Hotstar</option>
          </select>
        </h4>
        <h4 class="submit">
          <button type="submit" id="name" value="ADD">ADD</button>
        </h4>
      </form>
    `;
  }
}

class webSeriesOverview extends WebSeriesCard {
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
customElements.define('web-series-form', webSeriesForm);
customElements.define('web-series-overview', webSeriesOverview);
window.customElements.define('web-series', WebSeries);

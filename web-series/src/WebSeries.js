// eslint-disable-next-line max-classes-per-file
import { LitElement, html, css } from 'lit';

import { WebSeriesCard } from './web-series-card.js';

customElements.define('web-series-card', WebSeriesCard);

export class WebSeries extends LitElement {
  firstUpdated() {
    const obj = {
      title: 'hi',
      stars: 'bi',
      director: 'mama',
      streamingPlatform: 'hehe',
    };
    const shadow = this.shadowRoot;
    const webseriesOverview = shadow.querySelector('web-series-overview');
    webseriesOverview.data = obj;
    /* this.addEventListener('myEvent', e => {
      const value = e.detail;
      const shadow = this.shadowRoot;
      const webseriesOverview = shadow.querySelector('web-series-overview');
      webseriesOverview.data = value;
    }); */
  }

  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  }

  /* constructor() {
    super();
    this.title = 'hello';
    this.director = 'my';
    this.stars = 'kep';
    this.streamingPlatform = 'viu';
    this.addEventListener('form-submit', this.formsubmit);
this.addEventListener('form-submit', this.formsubmit);
    this.attachShadow({ mode: 'open' });
  } */

  // constructor() {
  //   super();
  // }
  // const webseriesform = document.querySelector('web-series-form');
  // const clone = document.importNode(webseriesform.Content, true);
  // this.attachShadow({ mode: 'open' });
  // this.shadowRoot.appendChild(webseriesform);

  // const webseriesoverview = document.querySelector('web-series-overview');
  // const clone2 = document.importNode(webseriesoverview.Content, true);
  // this.attachShadow({ mode: 'open' });
  // this.shadowRoot.appendChild(webseriesoverview);

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
      <web-series-form></web-series-form>;
      <web-series-overview></web-series-overview>
    `;
  }
}
// customElements.define('web-series', WebSeries);

class webSeriesForm extends LitElement {
  submit() {
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
    /* this.count = 0;
    const shadow = this.shadowRoot;
    const form = shadow.querySelector('form');
    form.onclick = e => {
      this.count += 1;
       const obj = {
        title: this.shadowRoot.getElementById('title').value,
        director: this.shadowRoot.getElementById('director').value,
        stars: this.shadowRoot.getElementById('stars').value,
        streamingPlatform:
          this.shadowRoot.getElementById('streamingPlatform').value,
      }; 

      this.dispatchEvent(
        new CustomEvent('clicked', {
          bubbles: true,
          composed: true,
          detail: this.count,
        })
      );
    }; */
  }

  // let count = 0;
  // const form1 = document.querySelector('form');
  /* constructor(title, director, stars, streamingPlatform) {
    super();
    this.title = title;
    this.director = director;
    this.stars = stars;
    this.streamingPlatform = streamingPlatform;
  } */
  /* constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.formsubmit = this.formsubmit.bind(this);
    this.title = '';
    this.director = '';
    this.stars = '';
    this.streamingPlatform = '';
    this.dispatchEvent(
      new CustomEvent('form-submit', {
        bubbles: true,
        composed: true,
      })
    );
  }
*/
  /* static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  }
*/
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
      <form
        @submit=${this.submit}
        name="Myform"
        id="Web-series-form"
        class="container1"
      >
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

  /*  formsubmit(e) {
    // let count = 1;
    // this.done = true;
    e.preventDefault();

    const title = this.shadowRoot.getElementById('title').value;
    const director = this.shadowRoot.getElementById('director').value;
    const stars = this.shadowRoot.getElementById('stars').value;
    const streamingPlatform =
      this.shadowRoot.getElementById('streamingPlatform').value;
    this.title = [...this.title, { title }];
    this.title = [...this.title, { director }];
    this.title = [...this.title, { stars }];
    this.title = [...this.title, { streamingPlatform }];
  } */
  // const values = new WebSeries(title, director, stars, streamingPlatform);

  // count += 1;
  // this.console.log((this.title = 'title'));
  // this.console.log(title, director, stars, streamingPlatform);
  // console.log('fd');
  // const ui = new UI();
  // if (count <= 6) {
  // ui.addWebSeriesToList(value);
  // }
  // clear fields
  // ui.clearFields();
}

customElements.define('web-series-form', webSeriesForm);

class webSeriesOverview extends WebSeriesCard {
  /* connectedCallback() {
    super.connectedCallback();
    const webseriescard = this.shadowRoot.querySelector(WebSeriesCard);
    // const clone3 = document.importNode(webseriescard.Content, true);
    // this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(webseriescard);
  } */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // connectedCallback() {
  // super.connectedCallback();
  //    this.title = this.getAttribute('title');
  //  this.director = this.getAttribute('director');
  // }
  static get properties() {
    return {
      data: { type: Object },
    };
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

  /*  div {
        background-color: rgb(255, 255, 255);
        margin: 1rem 1rem;
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: 0.1rem solid #1b4f72;
      }
    `;
  } 
*/
  render() {
    return html`
      <web-series-card
        id="card"
        title=${this.data.title}
        director=${this.data.director}
        stars=${this.data.stars}
        streamingPlatform=${this.data.streamingPlatform}
      ></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
      <web-series-card></web-series-card>
    `;
  }
}

customElements.define('web-series-overview', webSeriesOverview);
window.customElements.define('web-series', WebSeries);

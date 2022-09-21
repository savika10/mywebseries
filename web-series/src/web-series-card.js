import { html, css, LitElement } from 'lit';

export class WebSeriesCard extends LitElement {
  constructor() {
    super();
    this.title = 'Title';
    this.stars = 'stars';
    this.director = 'dir';
    this.streamingPlatform = 'streaming';
  }

  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streamingPlatform: { type: String },
    };
  }

  static get styles() {
    return css`
      .flip-card {
        background-color: rgb(255, 255, 255);
        width: auto;
        height: 100%;
        border: 1px solid #f1f1f1;
        perspective: 500px;
        border: 0.1rem solid #1b4f72;
        overflow: hidden;
      }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;

        transition: transform 1s;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        transform-style: preserve-3d;
      }

      /* Do an horizontal flip when you move the mouse over the flip box container */
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
        transition: transform 0.5s;
      }

      /* Position the front and back side */
      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        backface-visibility: hidden;
      }

      /* Style the front side (fallback if image is missing) */
      .flip-card-front {
        background-image: radial-gradient(circle, #d6eaf8, #3498db);
        color: black;
        text-align: center;
      }

      /* Style the back side */
      .flip-card-back {
        background-color: white;
        color: black;
        text-align: center;

        padding-top: 50px;
        transform: rotateY(180deg);
      }
      p {
        text-align: center;
        padding: 50px;
      }
    `;
  }

  render() {
    return html`
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><p>${this.title}</p></div>
          <div class="flip-card-back">
            <span>
              ${this.director}<br />
              ${this.stars}<br />
              ${this.streamingPlatform}<br />
              <button>DELETE</button>
            </span>
          </div>
        </div>
      </div>
    `;
  }
}
// window.customElements.define('web-series-card', WebSeriesCard);

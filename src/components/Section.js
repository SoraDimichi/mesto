export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  render(cards) {
    cards.forEach((card) => {
      return this._renderer(card);
    });
  }

  prependCard(card) {
    this._container.prepend(card);
  }

  appendCard(card) {
    this._container.append(card);
  }
}

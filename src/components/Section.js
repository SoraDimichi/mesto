export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items
    this._renderer = renderer

    this._container = document.querySelector(containerSelector)
  }

  render() {
    this._renderedItems.forEach(({ name, link }) => {
      return this._renderer({ name, link })
    })
  }

  addItem(card) {
    this._container.prepend(card)
  }
}

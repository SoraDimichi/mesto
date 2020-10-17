export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  render() {
    this._renderedItems.forEach((item) => {
      if (item.firstInput === undefined) {
        item.firstInput = item.name;
        delete item.name;
      }
      if (item.secondInput === undefined) {
        item.secondInput = item.link;
        delete item.link;
      }
      return this._renderer(item);
    });
  }

  addItem(card) {
    this._container.prepend(card);
  }
}

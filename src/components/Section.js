export default class Section {
  constructor(containerSelector ) {
    this._container = containerSelector;
  }

  addItems(element) {
    this._container.prepend(element);
  }
}

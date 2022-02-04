export class Theme {
  #switchEl;

  constructor(elementName, eventName) {
    this.elementName = elementName;
    this.eventName = eventName;
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById(this.elementName);
  }

  #addEvent() {
    this.#switchEl.addEventListener(this.eventName, (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
  }
}

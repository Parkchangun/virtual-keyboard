export class Keyboard {
  private switchEl;
  private fontSelectEl;
  private containerEl;
  private keyboardEl;
  private inputGroupEl;
  private inputEl;
  private keyPress = false;
  private mouseDown = false;

  constructor() {
    this.assignElement();
    this.addEvent();
  }

  private assignElement() {
    this.containerEl = document.getElementById("container");
    this.switchEl = this.containerEl.querySelector("#switch");
    this.fontSelectEl = this.containerEl.querySelector("#font");
    this.keyboardEl = this.containerEl.querySelector("#keyboard");
    this.inputGroupEl = this.containerEl.querySelector("#input-group");
    this.inputEl = this.inputGroupEl.querySelector("#input");
  }

  private addEvent() {
    this.switchEl.addEventListener("change", this.onChangeTheme);
    this.fontSelectEl.addEventListener("change", this.onChangeFont);
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", this.onKeyUp.bind(this));
    this.inputEl.addEventListener("input", this.onInput);
    this.keyboardEl.addEventListener("mousedown", this.onMouseDown.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  private onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }

  private onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }

  private onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }

  private onKeyDown(event) {
    if (this.mouseDown) return;

    this.keyPress = true;
    if (this.inputEl === document.activeElement) {
      this.inputGroupEl.classList.toggle(
        "error",
        /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
      );
    }
    this.keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active");
  }

  private onKeyUp(event) {
    if (this.mouseDown) return;

    this.keyPress = false;
    this.keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
  }

  private onMouseDown(event) {
    if (this.keyPress) return;

    this.mouseDown = true;
    event.target.closest("div.key")?.classList.add("active");
  }

  private onMouseUp(event) {
    if (this.keyPress) return;

    this.mouseDown = false;
    const keyEl = event.target.closest("div.key");
    const isActive = !!keyEl?.classList.contains("active");
    const val = keyEl?.dataset.val;

    if (isActive && !!val && val !== "Space" && val !== "Backspace") {
      this.inputEl.value += val;
    } else if (isActive && val === "Space") {
      this.inputEl.value += " ";
    } else if (isActive && val === "Backspace") {
      this.inputEl.value = this.inputEl.value.slice(0, -1);
    }

    this.keyboardEl.querySelector(".active")?.classList.remove("active");
  }
}

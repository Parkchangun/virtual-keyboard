var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Keyboard_instances, _Keyboard_switchEl, _Keyboard_fontSelectEl, _Keyboard_containerEl, _Keyboard_keyboardEl, _Keyboard_inputGroupEl, _Keyboard_inputEl, _Keyboard_keyPress, _Keyboard_mouseDown, _Keyboard_assignElement, _Keyboard_addEvent, _Keyboard_onChangeTheme, _Keyboard_onChangeFont, _Keyboard_onInput, _Keyboard_onKeyDown, _Keyboard_onKeyUp, _Keyboard_onMouseDown, _Keyboard_onMouseUp;
export class Keyboard {
    constructor() {
        _Keyboard_instances.add(this);
        _Keyboard_switchEl.set(this, void 0);
        _Keyboard_fontSelectEl.set(this, void 0);
        _Keyboard_containerEl.set(this, void 0);
        _Keyboard_keyboardEl.set(this, void 0);
        _Keyboard_inputGroupEl.set(this, void 0);
        _Keyboard_inputEl.set(this, void 0);
        _Keyboard_keyPress.set(this, false);
        _Keyboard_mouseDown.set(this, false);
        __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_assignElement).call(this);
        __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_addEvent).call(this);
    }
}
_Keyboard_switchEl = new WeakMap(), _Keyboard_fontSelectEl = new WeakMap(), _Keyboard_containerEl = new WeakMap(), _Keyboard_keyboardEl = new WeakMap(), _Keyboard_inputGroupEl = new WeakMap(), _Keyboard_inputEl = new WeakMap(), _Keyboard_keyPress = new WeakMap(), _Keyboard_mouseDown = new WeakMap(), _Keyboard_instances = new WeakSet(), _Keyboard_assignElement = function _Keyboard_assignElement() {
    __classPrivateFieldSet(this, _Keyboard_containerEl, document.getElementById("container"), "f");
    __classPrivateFieldSet(this, _Keyboard_switchEl, __classPrivateFieldGet(this, _Keyboard_containerEl, "f").querySelector("#switch"), "f");
    __classPrivateFieldSet(this, _Keyboard_fontSelectEl, __classPrivateFieldGet(this, _Keyboard_containerEl, "f").querySelector("#font"), "f");
    __classPrivateFieldSet(this, _Keyboard_keyboardEl, __classPrivateFieldGet(this, _Keyboard_containerEl, "f").querySelector("#keyboard"), "f");
    __classPrivateFieldSet(this, _Keyboard_inputGroupEl, __classPrivateFieldGet(this, _Keyboard_containerEl, "f").querySelector("#input-group"), "f");
    __classPrivateFieldSet(this, _Keyboard_inputEl, __classPrivateFieldGet(this, _Keyboard_inputGroupEl, "f").querySelector("#input"), "f");
}, _Keyboard_addEvent = function _Keyboard_addEvent() {
    __classPrivateFieldGet(this, _Keyboard_switchEl, "f").addEventListener("change", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onChangeTheme));
    __classPrivateFieldGet(this, _Keyboard_fontSelectEl, "f").addEventListener("change", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onChangeFont));
    document.addEventListener("keydown", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onKeyDown).bind(this));
    document.addEventListener("keyup", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onKeyUp).bind(this));
    __classPrivateFieldGet(this, _Keyboard_inputEl, "f").addEventListener("input", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onInput));
    __classPrivateFieldGet(this, _Keyboard_keyboardEl, "f").addEventListener("mousedown", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onMouseDown).bind(this));
    document.addEventListener("mouseup", __classPrivateFieldGet(this, _Keyboard_instances, "m", _Keyboard_onMouseUp).bind(this));
}, _Keyboard_onChangeTheme = function _Keyboard_onChangeTheme(event) {
    document.documentElement.setAttribute("theme", event.target.checked ? "dark-mode" : "");
}, _Keyboard_onChangeFont = function _Keyboard_onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
}, _Keyboard_onInput = function _Keyboard_onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
}, _Keyboard_onKeyDown = function _Keyboard_onKeyDown(event) {
    var _a;
    if (__classPrivateFieldGet(this, _Keyboard_mouseDown, "f"))
        return;
    __classPrivateFieldSet(this, _Keyboard_keyPress, true, "f");
    if (__classPrivateFieldGet(this, _Keyboard_inputEl, "f") === document.activeElement) {
        __classPrivateFieldGet(this, _Keyboard_inputGroupEl, "f").classList.toggle("error", /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
    }
    (_a = __classPrivateFieldGet(this, _Keyboard_keyboardEl, "f")
        .querySelector(`[data-code=${event.code}]`)) === null || _a === void 0 ? void 0 : _a.classList.add("active");
}, _Keyboard_onKeyUp = function _Keyboard_onKeyUp(event) {
    var _a;
    if (__classPrivateFieldGet(this, _Keyboard_mouseDown, "f"))
        return;
    __classPrivateFieldSet(this, _Keyboard_keyPress, false, "f");
    (_a = __classPrivateFieldGet(this, _Keyboard_keyboardEl, "f")
        .querySelector(`[data-code=${event.code}]`)) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
}, _Keyboard_onMouseDown = function _Keyboard_onMouseDown(event) {
    var _a;
    if (__classPrivateFieldGet(this, _Keyboard_keyPress, "f"))
        return;
    __classPrivateFieldSet(this, _Keyboard_mouseDown, true, "f");
    (_a = event.target.closest("div.key")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
}, _Keyboard_onMouseUp = function _Keyboard_onMouseUp(event) {
    var _a;
    if (__classPrivateFieldGet(this, _Keyboard_keyPress, "f"))
        return;
    __classPrivateFieldSet(this, _Keyboard_mouseDown, false, "f");
    const keyEl = event.target.closest("div.key");
    const isActive = !!(keyEl === null || keyEl === void 0 ? void 0 : keyEl.classList.contains("active"));
    const val = keyEl === null || keyEl === void 0 ? void 0 : keyEl.dataset.val;
    if (isActive && !!val && val !== "Space" && val !== "Backspace") {
        __classPrivateFieldGet(this, _Keyboard_inputEl, "f").value += val;
    }
    else if (isActive && val === "Space") {
        __classPrivateFieldGet(this, _Keyboard_inputEl, "f").value += " ";
    }
    else if (isActive && val === "Backspace") {
        __classPrivateFieldGet(this, _Keyboard_inputEl, "f").value = __classPrivateFieldGet(this, _Keyboard_inputEl, "f").value.slice(0, -1);
    }
    (_a = __classPrivateFieldGet(this, _Keyboard_keyboardEl, "f").querySelector(".active")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
};

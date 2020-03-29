class RadioOption extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<img src="./assets/icons/radio_button_unchecked.svg" /><span class="label"></span>`;
    this.spanLabel = this.querySelector("span.label");
    this.checkbox = this.querySelector("img");
    this.updateCheckbox();
    this.addEventListener("click", () => (this.checked = !this.checked));
  }
  set label(content) {
    this.spanLabel.innerHTML = content;
  }
  get label() {
    return this.spanLabel.innerHTML;
  }
  set checked(status) {
    if (status) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
    this.updateCheckbox();
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  updateCheckbox() {
    if (this.hasAttribute("checked")) {
      this.checkbox.src = `./assets/icons/radio_button_checked.svg`;
    } else {
      this.checkbox.src = `./assets/icons/radio_button_unchecked.svg`;
    }
  }
}

window.customElements.define("radio-option", RadioOption);

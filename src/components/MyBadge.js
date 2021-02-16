class MyBadge extends HTMLElement {
    static get observedAttributes() {
        return ['pos'];
    }
    template() {
        return `<style>
                :host {
                    display: inline-block;
                    background-color: #007bff;
                    border-radius: 12px;
                    color: white;
                    padding: 4px;
                    padding-left: 8px;
                    overflow: hidden;
                }
                :host([danger]) {
                    background-color: #dc3545;
                }
                .removeBtn {
                    cursor: pointer;
                    padding: 6px;
                    position: relative;
                    right: -4px;
                }
                .removeBtn:hover {
                    background-color: black;
                    opacity: .75;
                }
             </style>
                <div>
                  ${this.getAttribute('pos') || ''} <slot></slot>
                  <span class="removeBtn" ><slot name="remove"></slot></span>
                </div>`;
    }
    constructor() {
        super();
        this._render = () => {
          this._shadowRoot.innerHTML = this.template();
        };
        this.onRemoveClick = () => {
            if(confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.")) {
                this.remove();
                this.dispatchEvent(new CustomEvent('remove'));
                console.log("removed");
            }
        };
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._render();
    }

    connectedCallback() {
      const removeBtn = this._shadowRoot.querySelector('.removeBtn');
      removeBtn.addEventListener('click', this.onRemoveClick);
    }
    attributeChangedCallback() {
     this._render();
    }
    disconnectedCallback() {
      const removeBtn = this._shadowRoot.querySelector('.removeBtn');
      removeBtn.removeEventListener('click', this.onRemoveClick);
    }
}
window.customElements.define('my-badge', MyBadge);
// import { LitElement, html } from 'lit-element'
// import { html, render } from 'https://unpkg.com/lit-html?module'
import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
// import { html, render } from './node_modules/lit-html/lit-html.js';
// import {LitElement} from './node_modules/lit-element/lit-element.js'

class Header extends LitElement {
    static get styles() {
        return css`
      .my-header { text-align: center; }
      .my-header-top {
          font-size: 30px;
      }
      .my-header-bottom {
          font-size: 25px;
      }
    `;
    }
    render() {
        return html`
      <div class="my-header">
        <div class="my-header-top">Sasha Kramer</div>
        <div class="my-header-bottom">Creative Developer</div>
      </div>
    `;
    }
}

class Skills extends LitElement {
    static get styles(){
        return css``
    }

    render() {
        return html`
            <div class="skills">
                <div class="skills-header">
                    Skills
                </div>
                <div class="skills-body">
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Vue.js</li>
                        <li>React.js</li>
                        <li>React Native</li>
                        <li>AngularJS</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        `
    }
}

customElements.define('my-header', Header);
customElements.define('my-skills', Skills);
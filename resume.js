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

class JobHistory extends LitElement {
    static get styles(){
        return css``
    }

    render(){
        return html`
            <div>
                <div class="job-header">
                    Work History
                </div>
                <job-list></job-list>
            </div>
        `
    }
}

class JobList extends LitElement {
    constructor() {
        super();
        this.myArray = [
            {
                company: 'TransUnion',
                start_date: 'Jun 2019',
                end_date: 'Current',
                title: 'Software Engineer'
            },
            {
                company: 'TruSignal',
                start_date: 'Oct 2016',
                end_date: 'Jun 2019',
                title: 'Software Engineer'
            },
        ]
        // this.message = 'Loading';
        // this.addEventListener('stuff-loaded', (e) => { this.message = e.detail });
        // this.loadStuff();
    }
    static get styles() {
        return css`
            .job-list {

            }
            .job-entry {
                border: solid 1px #ccc;
                border-radius: 5px;
                display: grid;
                grid-template-areas:
                    "company company"
                    "title title"
                    "start end"
                ;
                width: 300px;
                margin-top: 10px;
                justify-items: center;
            }

            .company-name {
                grid-area: company;
            }
            .title {
                grid-area: title;
            }
            .start-date {
                grid-area: start;
            }
            .end-date{
                grid-area: end;
            }

        `
    }

    render(){
        // return history.map(h=>{
        return html`
            <div class="job-list">
                ${this.myArray.map(i => html`<div class="job-entry">
                    <div class="company-name">
                        ${i.company}
                    </div>
                    <div class="title">
                        ${i.title}
                    </div>
                    <div class="start-date">
                        ${i.start_date}
                    </div>
                    <div class="end-date">
                        ${i.end_date}
                    </div>
                </div>`)} 
            </div>
        `
        // })
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
customElements.define('job-history', JobHistory)
customElements.define('job-list', JobList)
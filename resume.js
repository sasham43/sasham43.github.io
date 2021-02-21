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
                title: 'Software Engineer',
                description: `Design and program user interfaces for multiple web applications (both internal and customer-facing). Program back end systems (writing API routes and database queries) to support front-end applications. Design and maintain custom backend systems in AWS to support web applications and data processing workflows.`
            },
            {
                company: 'TruSignal',
                start_date: 'Oct 2016',
                end_date: 'Jun 2019',
                title: 'Software Engineer',
                description: `Design and program user interfaces for multiple web applications (both internal and customer-facing). Program back end systems (writing API routes and database queries) to support front-end applications. Design and maintain custom backend systems in AWS to support web applications and data processing workflows.`
            },
            {
                company: 'RTS Solutionz',
                start_date: 'Jan 2016',
                end_date: 'Mar 2016',
                title: 'A/V Programmer',
                description: `Programmed Crestron A/V systems for 24 meeting rooms and two large multipurpose rooms. Designed and programmed user interfaces for end users and technical support personnel. Designed and implemented a custom camera tracking system for Cisco VTC platform.`
            },
            {
                company: 'National Capitol Contracting',
                start_date: 'Jan 2015',
                end_date: 'May 2015',
                title: 'A/V Programmer',
                description: `Designed, programmed, and implemented audiovisual systems for connected rooms (conference rooms, auditoriums, and training centers). Developed user interfaces for both end users and technical staff. Programmed control interfaces for audio, video and teleconferencing equipment. Performed troubleshooting and maintenance on existing systems. Familiarity with both Crestron and AMX systems.`
            },
            {
                company: 'National Capitol Contracting',
                start_date: 'Apr 2012',
                end_date: 'Jan 2015',
                title: 'Multimedia Editor',
                description: `Acted as an editor for a variety of transcripts, including federal government meetings, court cases, and television interviews. Generated closed captions for videos to meet accessibility standards. Led webcasts for government meetings and trainings including website creation, server creation, and videography.`
            },
            {
                company: 'National Capitol Contracting',
                start_date: 'Sep 2011',
                end_date: 'Apr 2012',
                title: 'Transcriber',
                description: `Transcribed a wide variety of digital audio, from federal government meetings to Charlie Rose interviews.`
            },
        ]
        // this.message = 'Loading';
        // this.addEventListener('stuff-loaded', (e) => { this.message = e.detail });
        // this.loadStuff();
    }
    static get styles() {
        return css`
            .job-list {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }
            .job-entry {
                border: solid 1px #ccc;
                border-radius: 5px;
                display: grid;
                grid-template-areas:
                    "company company"
                    "title title"
                    "start end"
                    "description description"
                ;
                // width: 300px;
                margin: 10px;

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
            .description {
                grid-area: description;
                padding: 4px;
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
                    <div class="description">
                        ${i.description}
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
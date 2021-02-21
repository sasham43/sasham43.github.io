// import { LitElement, html } from 'lit-element'
// import { html, render } from 'https://unpkg.com/lit-html?module'
import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
// import { html, render } from './node_modules/lit-html/lit-html.js';
// import {LitElement} from './node_modules/lit-element/lit-element.js'

class Main extends LitElement {
    static get styles(){
        return css`
            .resume {
                // width: 400px;
                margin: 10px auto;
                background-color: #fff;
                border-radius: 15px;
                width: 50%;
                display: grid;
                grid-template-areas:
                    "header  header header header"
                    "skills skills about about"
                    ". history history ."
                ;
            }
            my-header {
                grid-area: header;
            }
            my-skills {
                grid-area: skills;
            }
            about-me {
                grid-area: about;
            }
            job-history {
                grid-area: history;
            }

            .resume-section {
                border: solid 1px black;
                border-radius: 10px;
                padding: 5px;
                padding-top: 10px;
                margin: 4px;
                position: relative;
            }
        `
    }

    render(){
        return html`
            <div class="resume">
                <my-header></my-header>
                <my-skills class="resume-section"></my-skills>
                <about-me class="resume-section"></about-me>
                <job-history class="resume-section"></job-history>
            </div>
        `
    }
}

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

class About extends LitElement {
    constructor(){
        super()
        this.blurb = `
            As a developer, I utilized my creativity daily to inspire.  
            I love writing beautiful code that generates beautiful mark-up and beautiful user interfaces.  
            I like to learn new ways to do things and regularly seek out new solutions in my free time.  
            I've developed video games, built custom hardware, and generated creative ideation in personal projects to explore the limit of dreamscapes.
            I believe a diversity of experience makes one richer, so I dance ballet and play D&D.
        `
    }

    static get styles(){
        return css`
            .about-title {
                position: absolute;
                left: calc(50% - 20px);
                top: -12px;
                background-color: white;
                padding-left: 4px;
                padding-right: 4px;
            }
        `
    }

    render(){
        return html`
            <div class="about resume-section">
                <div class="about-title">
                    About
                </div>
                <div class="about-content">
                    ${this.blurb}
                </div>
            </div>
        `
    }
}

class JobHistory extends LitElement {
    static get styles(){
        return css``
    }

    render(){
        return html`
            <div class="resume-section>
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
            <div class="skills resume-section">
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
                        <li>TouchDesigner</li>
                        <li>Unity3D</li>
                    </ul>
                </div>
            </div>
        `
    }
}

customElements.define('my-resume', Main)
customElements.define('my-header', Header);
customElements.define('my-skills', Skills);
customElements.define('job-history', JobHistory)
customElements.define('job-list', JobList)
customElements.define('about-me', About)
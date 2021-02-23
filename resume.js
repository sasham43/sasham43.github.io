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
                // background-color: #fff;
                // background-color: rgba(0,0,0,0.9);
                background-color: var(--bg-color);
                border-radius: 15px;
                width: 50%;
                display: grid;
                grid-template-areas:
                    "header  header header header"
                    "contact contact about about"
                    "skills skills about about"
                    "history history history history"
                ;
                grid-row-gap: 22px;
                grid-column-gap: 20px;
                padding-left: 15px;
                padding-right: 15px;
                padding-bottom: 15px;
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
            contact-info {
                grid-area: contact;
            }

            .resume-section {
                border: solid 1px black;
                border-radius: 10px;
                padding: 5px;
                padding-top: 18px;
                margin: 4px;
                position: relative;
                box-shadow:
                    0 0 0 3px #fff,
                    0 0 0 6px #000,
                    0 0 0 9px #fff,
                    0 0 0 10px #000,
                    0 0 0 11px #fff;
            }
            .contact-title,
            .skills-title,
            .job-history-title,
            .about-title {
                position: absolute;
                left: calc(50% - 20px);
                top: -22px;
                // background-color: white;
                background-color: var(--bg-color);
                padding-left: 4px;
                padding-right: 4px;
                font-family: 'VT323', monospace;
                font-size: 25px;
                padding: 0 25px;
                border-radius: 20px;
                border: solid 3px;
            }
            .about-title {
                // color: #F26419;
                color: var(--about-color);
                border-color: var(--about-color);
                
            }
            .skills-title {
                // color: #F6AE2D;
                color: var(--skills-color);
                border-color: var(--skills-color);
                
            }
            .contact-title {
                // color: #86BBD8;
                color: var(--contact-color);
                border-color: var(--contact-color);
                
            }
            .job-history-title {
                // color: #33658A;
                color: var(--job-history-color);
                border-color: var(--job-history-color);
                
            }

            .about.resume-section {
                box-shadow:
                    0 0 0 3px var(--bg-color),
                    0 0 0 6px var(--about-color),
                    0 0 0 9px var(--bg-color),
                    0 0 0 10px var(--about-color),
                    0 0 0 11px var(--bg-color);
                border-color: var(--about-color);
                background-color: var(--about-bg-color);
                color: black;
            }
            .skills.resume-section {
                box-shadow:
                    0 0 0 3px var(--bg-color),
                    0 0 0 6px var(--skills-color),
                    0 0 0 9px var(--bg-color),
                    0 0 0 10px var(--skills-color),
                    0 0 0 11px var(--bg-color);
                border-color: var(--skills-color);
                background-color: var(--skills-bg-color);
                color: black;
            }
            .contact.resume-section {
                box-shadow:
                    0 0 0 3px var(--bg-color),
                    0 0 0 6px var(--contact-color),
                    0 0 0 9px var(--bg-color),
                    0 0 0 10px var(--contact-color),
                    0 0 0 11px var(--bg-color);
                border-color: var(--contact-color);
                background-color: var(--contact-bg-color);
            }
            .job-history.resume-section {
                box-shadow:
                    0 0 0 3px var(--bg-color),
                    0 0 0 6px var(--job-history-color),
                    0 0 0 9px var(--bg-color),
                    0 0 0 10px var(--job-history-color),
                    0 0 0 11px var(--bg-color);
                border-color: var(--job-history-color);
                background-color: var(--job-history-bg-color);
            }
        `
    }

    render(){
        return html`
            <div class="resume">
                <my-header></my-header>
                <my-skills></my-skills>
                <contact-info></contact-info>
                <about-me></about-me>                
                <job-history></job-history>
            </div>
        `
    }
}

class Contact extends Main {
    static get styles(){
        return [super.styles]
    }

    render(){
        return html`
            <div class="contact resume-section">
                <div class="contact-title">
                    Contact
                </div>
                <div class="contact-info">
                    <div>
                        <a target="_blank" href="http://www.sasha-kramer.com">www.sasha-kramer.com</a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/sasha-kramer-69b95231/">LinkedIn</a>
                    </div>
                    <div>
                        <a target="_blank" href="http://github.com/sasham43">github.com/sasham43</a>
                    </div>
                </div>
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

class About extends Main {
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
        return [super.styles,css`
            // .about-title {
            //     position: absolute;
            //     left: calc(50% - 20px);
            //     top: -12px;
            //     background-color: white;
            //     padding-left: 4px;
            //     padding-right: 4px;
            // }
        `]
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

class JobHistory extends Main {
    // static get styles(){
    //     return [super.styles, css``]
    // }
    constructor() {
        super();
        this.myArray = [
            {
                company: 'TransUnion',
                start_date: 'Jun 2019',
                end_date: 'Current',
                title: 'Software Engineer',
                description: `Design and program user interfaces for multiple web applications (both internal and customer-facing).\nProgram back end systems (writing API routes and database queries) to support front-end applications.\nDesign and maintain custom backend systems in AWS to support web applications and data processing workflows.`
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
        return [css`
            .job-list {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }
            .job-list>div:first-child {
                grid-column: 1 / 3;
                grid-row: 1 / 3;
            }
            .job-list>div:first-child>.description {
                max-height: 80%;
            }
            .job-entry {
                border: solid 1px #ccc;
                border-radius: 5px;
                display: grid;
                grid-template-rows: 30px 30px 30px 1fr;
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
                max-height: 100px;
                overflow: scroll;
            }

        `, super.styles]
    }

    // render() {
    //     // return history.map(h=>{
    //     return html`
    //         <div class="job-list">
    //             ${this.myArray.map(i => html`<div class="job-entry">
    //                 <div class="company-name">
    //                     ${i.company}
    //                 </div>
    //                 <div class="title">
    //                     ${i.title}
    //                 </div>
    //                 <div class="start-date">
    //                     ${i.start_date}
    //                 </div>
    //                 <div class="end-date">
    //                     ${i.end_date}
    //                 </div>
    //                 <div class="description">
    //                     ${i.description}
    //                 </div>
    //             </div>`)} 
    //         </div>
    //     `
    //     // })
    // }

    render(){
        return html`
            <div class="job-history resume-section">
                <div class="job-history-title">
                    Work History
                </div>
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
            </div>
        `
    }
}

// class JobList extends LitElement {
//     constructor() {
//         super();
//         this.myArray = [
//             {
//                 company: 'TransUnion',
//                 start_date: 'Jun 2019',
//                 end_date: 'Current',
//                 title: 'Software Engineer',
//                 description: `Design and program user interfaces for multiple web applications (both internal and customer-facing). Program back end systems (writing API routes and database queries) to support front-end applications. Design and maintain custom backend systems in AWS to support web applications and data processing workflows.`
//             },
//             {
//                 company: 'TruSignal',
//                 start_date: 'Oct 2016',
//                 end_date: 'Jun 2019',
//                 title: 'Software Engineer',
//                 description: `Design and program user interfaces for multiple web applications (both internal and customer-facing). Program back end systems (writing API routes and database queries) to support front-end applications. Design and maintain custom backend systems in AWS to support web applications and data processing workflows.`
//             },
//             {
//                 company: 'RTS Solutionz',
//                 start_date: 'Jan 2016',
//                 end_date: 'Mar 2016',
//                 title: 'A/V Programmer',
//                 description: `Programmed Crestron A/V systems for 24 meeting rooms and two large multipurpose rooms. Designed and programmed user interfaces for end users and technical support personnel. Designed and implemented a custom camera tracking system for Cisco VTC platform.`
//             },
//             {
//                 company: 'National Capitol Contracting',
//                 start_date: 'Jan 2015',
//                 end_date: 'May 2015',
//                 title: 'A/V Programmer',
//                 description: `Designed, programmed, and implemented audiovisual systems for connected rooms (conference rooms, auditoriums, and training centers). Developed user interfaces for both end users and technical staff. Programmed control interfaces for audio, video and teleconferencing equipment. Performed troubleshooting and maintenance on existing systems. Familiarity with both Crestron and AMX systems.`
//             },
//             {
//                 company: 'National Capitol Contracting',
//                 start_date: 'Apr 2012',
//                 end_date: 'Jan 2015',
//                 title: 'Multimedia Editor',
//                 description: `Acted as an editor for a variety of transcripts, including federal government meetings, court cases, and television interviews. Generated closed captions for videos to meet accessibility standards. Led webcasts for government meetings and trainings including website creation, server creation, and videography.`
//             },
//             {
//                 company: 'National Capitol Contracting',
//                 start_date: 'Sep 2011',
//                 end_date: 'Apr 2012',
//                 title: 'Transcriber',
//                 description: `Transcribed a wide variety of digital audio, from federal government meetings to Charlie Rose interviews.`
//             },
//         ]
//         // this.message = 'Loading';
//         // this.addEventListener('stuff-loaded', (e) => { this.message = e.detail });
//         // this.loadStuff();
//     }
//     static get styles() {
//         return css`
//             .job-list {
//                 display: grid;
//                 grid-template-columns: 1fr 1fr 1fr;
//             }
//             .job-entry {
//                 border: solid 1px #ccc;
//                 border-radius: 5px;
//                 display: grid;
//                 grid-template-areas:
//                     "company company"
//                     "title title"
//                     "start end"
//                     "description description"
//                 ;
//                 // width: 300px;
//                 margin: 10px;
//                 justify-items: center;
//             }

//             .company-name {
//                 grid-area: company;
//             }
//             .title {
//                 grid-area: title;
//             }
//             .start-date {
//                 grid-area: start;
//             }
//             .end-date{
//                 grid-area: end;
//             }
//             .description {
//                 grid-area: description;
//                 padding: 4px;
//             }

//         `
//     }

//     render(){
//         // return history.map(h=>{
//         return html`
//             <div class="job-list">
//                 ${this.myArray.map(i => html`<div class="job-entry">
//                     <div class="company-name">
//                         ${i.company}
//                     </div>
//                     <div class="title">
//                         ${i.title}
//                     </div>
//                     <div class="start-date">
//                         ${i.start_date}
//                     </div>
//                     <div class="end-date">
//                         ${i.end_date}
//                     </div>
//                     <div class="description">
//                         ${i.description}
//                     </div>
//                 </div>`)} 
//             </div>
//         `
//         // })
//     }
// }

class Skills extends Main {
    static get styles(){
        return [super.styles, css`
            .skills-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                // grid-template-rows: 5;
            }
        `]
    }

    render() {
        return html`
            <div class="skills resume-section">
                <div class="skills-title">
                    Skills
                </div>
                <div class="skills-body">
                    <div class="skills-container">
                        <div>JavaScript</div>
                        <div>Python</div>
                        <div>Vue.js</div>
                        <div>React.js</div>
                        <div>React Native</div>
                        <div>AngularJS</div>
                        <div>Node.js</div>
                        <div>SQL</div>
                        <div>PostgreSQL</div>
                        <div>AWS</div>
                        <div>TouchDesigner</div>
                        <div>Unity3D</div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('my-resume', Main)
customElements.define('my-header', Header);
customElements.define('my-skills', Skills);
customElements.define('job-history', JobHistory)
// customElements.define('job-list', JobList)
customElements.define('about-me', About)
customElements.define('contact-info', Contact)
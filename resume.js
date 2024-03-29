import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import Fontawesome from './fontawesome.js'

class Main extends LitElement {
    static get styles(){
        return css`
           

            .resume {
                margin: 10px auto;
                background-color: var(--bg-color);
                border-radius: 15px;
                width: 50%;
                display: grid;
                grid-template-areas:
                    "header  header header header"
                    "contact contact about about"
                    "skills skills about about"
                    "education education about about"
                    "history history history history"
                ;
                grid-row-gap: 30px;
                grid-column-gap: 20px;
                padding-left: 15px;
                padding-right: 15px;
                padding-bottom: 15px;
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            @media (max-width: 550px) {
                
                .resume {
                    grid-template-areas:
                        "header"
                        "contact"
                        "skills"
                        "education"
                        "about"
                        "history"
                    ;
                    // width: 100%;
                    width: calc(100% - 12px);
                    margin: 0;
                    grid-template-columns: 1fr;
                    padding-left: 6px;
                    padding-right: 6px;
                }


            }
            @media(min-width: 550px) and (max-width: 1400px){
                .resume {
                    width: 90%;
                }
            }
            



            my-header {
                grid-area: header;
            }
            my-skills {
                grid-area: skills;
                display: flex;
                flex-direction: column;
                align-items: stretch;
            }
            about-me {
                grid-area: about;
                display: flex;
                align-items: stretch;
            }
            work-history {
                grid-area: history;
            }
            contact-info {
                grid-area: contact;
                display: flex;
            }
            my-education {
                grid-area: education;
                display: flex;
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
            .area-title {
                position: absolute;
                top: -26px;
                background-color: var(--bg-color);
                padding-left: 4px;
                padding-right: 4px;
                font-family: 'VT323', monospace;
                font-size: 25px;
                padding: 0 25px;
                border-radius: 20px;
                border: solid 3px;
            }
            .resume-section:hover .area-title {
                color: white;
            }
            .education-title {
                color: var(--education-color);
                border-color: var(--education-color);
            }
            .about-title {
                color: var(--about-color);
                border-color: var(--about-color);
                
            }
            .skills-title {
                color: var(--skills-color);
                border-color: var(--skills-color);
                
            }
            .contact-title {
                color: var(--contact-color);
                border-color: var(--contact-color);
                
            }
            .job-history-title {
                color: var(--job-history-bg-color);
                border-color: var(--job-history-color);
            }

            .title-left {
                left: 10px;
            }
            .title-right {
                right: 10px;
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
            .education.resume-section {
                box-shadow:
                    0 0 0 3px var(--bg-color),
                    0 0 0 6px var(--education-color),
                    0 0 0 9px var(--bg-color),
                    0 0 0 10px var(--education-color),
                    0 0 0 11px var(--bg-color);
                border-color: var(--education-color);
                background-color: var(--education-bg-color);
            }
            .work-history.resume-section {
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
                <my-education></my-education>     
                <work-history></work-history>
            </div>
        `
    }
}

class Education extends Main {
    static get styles(){
        return [
            super.styles,
            css`
                .education {
                    flex-grow: 1;
                }
                * {
                    color: black;
                }
            `
        ]
    }

    render(){
        return html`
            <div class="education resume-section">
                <div class="education-title area-title">
                    Education
                </div>
                <div class="education-info">
                    <ul>
                        <li>Certificate of Full Stack Engineering - Prime Digital Academy 2016</li>
                        <li>Bachelor of Arts (History) - James Madison University 2011</li>
                    </ul>
                </div>
            </div>
        `
    }
}

class Contact extends Main {
    static get styles(){
        return [
            Fontawesome,
            super.styles,
            css`
                * {
                    color: black;
                }
                *:hover {
                    color: white;
                }
                a {
                    text-decoration: none;
                }
                a>span {
                    text-decoration: underline;
                }
                .contact {
                    display: flex;
                    align-items: space-between;
                    flex-grow: 1
                }

                .contact-info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    flex-grow: 1;
                }
                @media(min-width: 550px) and (max-width: 775px){
                    .contact-info {
                        grid-template-columns: 1fr;
                    }
                }
            `
        ]
    }

    render(){
        return html`
            <div class="contact resume-section">
                <div class="contact-title title-left area-title">
                    Contact
                </div>
                <div class="contact-info">
                    <div>
                        <a target="_blank" href="http://www.sasha-kramer.com">
                            <i class="fas fa-globe"></i>
                            <span>www.sasha-kramer.com</span>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="mailto:sashasemail@gmail.com">
                            <i class="far fa-envelope"></i>
                            <span>sashasemail@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/sasha-kramer">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="http://github.com/sasham43">
                            <i class="fab fa-github"></i>
                            <span>github.com/sasham43</span>
                        </a>
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
        this.me_blurb = `I love programming. I came to it rather late in life so it was not always something I dreamed of doing, but from those first moments copy-pasting VBA macro code in Word and watching a document stitch itself together I was hooked. I’m so fascinated by all the different avenues that are opened to those with a little bit of base knowledge and a desire to learn. I’ve designed AV touch panels, built my own analog VR system, started building a video game, written apps for smart watches and iPhones, and I’m still so excited to see what’s next.
        `
        // this.me_blurb = `
        //     As a developer, I utilized my creativity daily to inspire.  
        //     I love writing beautiful code that generates beautiful mark-up and beautiful user interfaces.  
        //     I like to learn new ways to do things and regularly seek out new solutions in my free time.  
        //     I've developed video games, built custom hardware, and generated creative ideation in personal projects to explore the limit of dreamscapes.
        //     I believe a diversity of experience makes one richer, so I dance ballet and play D&D.
        // `
        this.project_blurb = `I built this project in Polymer as a way of introducing myself to the library. I've been curious about Polymer since I saw a presentation about it at MidwestJS in 2017, where I was also introduced to Vue. This was near the beginning of my journey as a software developer and so I was interested in the juxtaposition of these two front-end frameworks. Vue seemed far more powerful and has gone on to become one of the three biggest front-end Javascript frameworks on the market, and since I started using Vue on a regular basis two years ago, it's easily my favorite. Polymer dropped off the map for me for a while, and I recently discovered that it was still chugging along, promising quick and efficient reusable user interface modules. After building this little page with it, I can say that I would hesitate to use it on a fully featured project, but it is perfect for a more simplified use case. I had fun with it, and I hope Polymer continues to grow.
        `

        this.me_title = 'About Me'
        this.project_title = 'About Project'

        console.log("%c" + 'About This Project', "color:" + 'chartreuse' + ";font-weight:bold;")
        console.log("%c" + this.project_blurb.replace('.\n', '. '), "color:" + 'chartreuse' + ";")

        // set blurb
        this.blurb = this.me_blurb
        this.title = this.me_title
    }

    static get properties(){
        return {
            blurb: {},
            title: {},
        }
    }

    static get styles(){
        return [super.styles,css`
            .about-content {
                font-size: 18px;
            }
        `]
    }

    // changeAbout(){
    //     if(this.title == this.me_title){
    //         this.title = this.project_title
    //         this.blurb = this.project_blurb
    //     } else {
    //         this.title = this.me_title
    //         this.blurb = this.me_blurb
    //     }
    // }

    render(){
        return html`
            <div class="about resume-section">
                <div class="about-title area-title title-right">
                    ${this.title}
                </div>
                <div class="about-content">
                    ${this.blurb}
                </div>
            </div>
        `
    }
}

class WorkHistory extends Main {
    constructor(){
        super()
        this.currentJob = {
            index: 0,
            company: 'Leesa Sleep',
            start_date: 'July 2021',
            end_date: 'Current',
            title: 'Full Stack Software Engineer',
            description: `
                Implement pixel perfect  UI/UX for a high traffic retail website.\n
                Manage backend connections between a headless CMS, Microsoft Azure, Shopify, and Oracle NetSuite\n
                Work with product owners to design and implement website components in conjunction with a custom CMS.\n
                Work with product owners to design and implement UI elements.\n
                Utilize agile workflow methodology to write stories and complete work.`
        }
        // this.currentJob = {
        //     index: 0,
        //     company: 'TruSignal (acquired) / TransUnion',
        //     start_date: 'Oct 2016',
        //     end_date: 'Current',
        //     title: 'Full Stack Software Engineer',
        //     description: `
        //         Design and program user interfaces for multiple web applications (both internal and customer-facing).\n
        //         Program back end systems (writing API routes and database queries) to support front-end applications.\n
        //         Design and maintain custom backend systems in AWS to support web applications and data processing workflows (including Lambda and Step Functions).\n
        //         Work with product owners to design and implement UI elements.\n
        //         Utilize agile workflow methodology to write stories and complete work.`
        // }
        this.otherJobs = [
            {
                index: 1,
                company: 'TruSignal (acquired) / TransUnion',
                start_date: 'Oct 2016',
                end_date: 'July 2021',
                title: 'Full Stack Software Engineer',
                description: `
                    Design and program user interfaces for multiple web applications (both internal and customer-facing).\n
                    Program back end systems (writing API routes and database queries) to support front-end applications.\n
                    Design and maintain custom backend systems in AWS to support web applications and data processing workflows (including Lambda and Step Functions).\n
                    Work with product owners to design and implement UI elements.\n
                    Utilize agile workflow methodology to write stories and complete work.`
            },
            {
                index: 2,
                company: 'RTS Solutionz',
                start_date: 'Jan 2016',
                end_date: 'Mar 2016',
                title: 'A/V Programmer',
                description: `
                    Programmed Crestron A/V systems for 24 meeting rooms and two large multipurpose rooms.\n
                    Designed and programmed user interfaces for end users and technical support personnel.\n
                    Designed and implemented a custom camera tracking system for Cisco VTC platform.`
            },
            {
                index: 3,
                company: 'National Capitol Contracting',
                start_date: 'Jan 2015',
                end_date: 'May 2015',
                title: 'A/V Programmer',
                description: `
                    Designed, programmed, and implemented audiovisual systems for connected rooms (conference rooms, auditoriums, and training centers).\n
                    Developed user interfaces for both end users and technical staff.\n
                    Programmed control interfaces for audio, video and teleconferencing equipment.\n
                    Performed troubleshooting and maintenance on existing systems.\n
                    Familiarity with both Crestron and AMX systems.`
            },
            {
                index: 4,
                company: 'National Capitol Contracting',
                start_date: 'Apr 2012',
                end_date: 'Jan 2015',
                title: 'Multimedia Editor',
                description: `
                    Acted as an editor for a variety of transcripts, including federal government meetings, court cases, and television interviews.\n
                    Generated closed captions for videos to meet accessibility standards.\n
                    Led webcasts for government meetings and trainings including website creation, server creation, and videography.`
            },
            {
                index: 5,
                company: 'National Capitol Contracting',
                start_date: 'Sep 2011',
                end_date: 'Apr 2012',
                title: 'Transcriber',
                description: `
                    Transcribed a wide variety of digital audio, from federal government meetings to Charlie Rose interviews.\n
                    Assisted in the creation of closed-caption video files for a variety of content.\n
                    Digitized audio and video for dissemination to remote workers.`
            },
        ]
    }

    static get properties() {
        return {
            currentJob: {},
            otherJobs: {},
        };
    }

    static get styles(){
        return [
            super.styles,
            css`
                .work-history {
                    display: grid;
                    grid-template-columns: 3fr 1fr;
                    grid-column-gap: 10px;
                    grid-row-gap: 4px;
                    grid-template-areas:
                        "main-job other-job"
                        "main-job other-job"
                        "main-job other-job"
                    ;
                }
                @media(max-width: 900px){
                    .work-history {
                        grid-template-areas:
                            "main-job"
                            "other-job"
                        ;
                        grid-template-columns: 1fr;
                    }
                }

                .main-job {
                    grid-area: main-job;
                    font-size: 17px;
                }
                .other-jobs {
                    grid-area: other-job;
                }
                .main-job,
                .other-job {
                    border: solid 2px white;
                    border-radius: 15px;
                    padding: 4px;
                    color: white;
                }
                .other-job {
                    margin-top: 2px;
                    cursor: pointer;
                }
                .other-job:hover {
                    color: black;
                    border-color: black;
                }
                .company,
                .title,
                .dates {
                    text-align: center;
                }
                .description {
                    min-height: 200px;
                }
                @media(max-width:500px){
                    .description {
                        min-height: 350px;
                    }
                    .description ul {
                        padding-left: 20px;
                    }
                }
                @media(min-width: 900px) and (max-width: 1500px){
                    .other-job {
                        min-height: 128px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                }
            `
        ]
    }

    clickJob(e,job){
        this.otherJobs = this.otherJobs.map(j=>{
            if(j.index == job.index){
                return this.currentJob
            } else {
                return j
            }
        })
        this.currentJob = job
    }
    sortJobs(a,b){
        if(a.index > b.index){
            return 1
        } else if (a.index < b.index){
            return -1
        }
        return 0
    }

    render(){
        return html`
            <div class="work-history resume-section">
                <div class="job-history-title area-title title-right">
                    Work History
                </div>
                <div class="main-job">
                    <div class="company">
                        ${this.currentJob.company}
                    </div>
                    <div class="title">
                        ${this.currentJob.title}
                    </div>
                    <div class="dates">
                        ${this.currentJob.start_date} - ${this.currentJob.end_date}
                    </div>
                    <div class="description">
                        <ul>
                            ${this.currentJob.description.split(`.\n`).map(d=>{
                                return html`<li>${d}</li>`
                            })}
                        </ul>
                    </div>
                </div>
                <div class="other-jobs">
                    ${this.otherJobs.sort(this.sortJobs).map(job=>{
                        return html`
                            <div @click="${(e)=>this.clickJob(e, job)}" class="other-job">
                                <div class="company">
                                    ${job.company}
                                </div>
                                <div class="title">
                                    ${job.title}
                                </div>
                                <div class="dates">
                                    ${job.start_date} - ${job.end_date}
                                </div>
                            </div>
                        `
                    })}
                </div>
            </div>
        `
    }
}




class Skills extends Main {
    static get styles(){
        return [super.styles, css`
            .skills {
                flex-grow: 1;
            }
            .skills-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .skills-container ul {
                list-style: square;
                margin: 0;
            }
        `]
    }

    render() {
        return html`
            <div class="skills resume-section">
                <div class="skills-title area-title title-left">
                    Skills
                </div>
                <div class="skills-body">
                    <div class="skills-container">
                        <ul><li>JavaScript</li></ul>
                        <ul><li>Python</li></ul>
                        <ul><li>Vue.js</li></ul>
                        <ul><li>React.js</li></ul>
                        <ul><li>React Native</li></ul>
                        <ul><li>AngularJS</li></ul>
                        <ul><li>Node.js</li></ul>
                        <ul><li>SQL</li></ul>
                        <ul><li>PostgreSQL</li></ul>
                        <ul><li>AWS</li></ul>
                        <ul><li>TouchDesigner</li></ul>
                        <ul><li>Unity3D</li></ul>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('my-resume', Main)
customElements.define('my-header', Header)
customElements.define('my-skills', Skills)
customElements.define('work-history', WorkHistory)
customElements.define('about-me', About)
customElements.define('contact-info', Contact)
customElements.define('my-education', Education)
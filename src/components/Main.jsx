import "../styles/Main.css"

import introUrl from "../assets/images/illustration-intro.png"
import productiveUrl from "../assets/images/illustration-stay-productive.png"
import curveMobile from "../assets/images/bg-curvy-mobile.svg"
import curveDesktop from "../assets/images/bg-curvy-desktop.svg"

import Argument from "./Argument.jsx";
import Testimony from "./Testimony.jsx";
import Form from "./Form.jsx";
import Button from "./Button.jsx";

import {Arguments} from "../data.js";
import {Testimonies} from "../data.js";

function Main() {

    return (
        <main>
            <div className="container">

                <div className="main-intro">
                    <img src={introUrl} alt=""/>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever
                        you need, share and collaborate with friends family, and co-workers.</p>
                    <Button>Get Started</Button>
                </div>

                <section className="main-arguments">
                    {
                        Arguments.map(({url, title, content}) => (
                            <Argument key={title} imgUrl={url} title={title} paragraph={content} />
                        ))
                    }

                    <picture>
                        <source srcSet={curveDesktop} media="(min-width: 375px)" />
                        <img className="bg-curve" src={curveMobile} alt="" />
                    </picture>
                </section>

                <section className="main-productive">
                    <img src={productiveUrl} alt=""/>
                    <div className="wrapper">
                        <h2>Stay productive, wherever you are</h2>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            attachments required.</p>
                        <span>
                            <a href="#" >See how Fylo works</a>
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><circle id="b" cx="6" cy="6" r="6"/><filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fillRule="evenodd"><g transform="translate(2 2)"><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#62E0D9" xlinkHref="#b"/></g><path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330"/></g></svg>
                        </span>
                    </div>
                </section>

                <section className="main-testimony">
                    {
                        Testimonies.map(({profileUrl, name, role, content}) => (
                            <Testimony key={name} profileUrl={profileUrl} name={name} role={role} content={content} />
                        ))
                    }
                </section>

                <Form />
            </div>
        </main>
    );
}

export default Main;
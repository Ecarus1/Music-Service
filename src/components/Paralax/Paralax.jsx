import { useEffect, useRef } from "react";
import { throttle } from "throttle-debounce";

import "./Paralax.scss";
function Paralax () {
    const starSmol = "image/paralax/star_smol.png";
    const starBig = "image/paralax/star_big.png";
    const cloud = "image/paralax/cloud.png";
    const moon = "image/paralax/moon.png";
    const glade = "image/paralax/glade.png";
    const cave = "image/paralax/cave.png";

    const starSmolElem = useRef(null);
    const starBigElem = useRef(null);
    const cloudElem = useRef(null);
    const moonElem = useRef(null);
    const gladeElem = useRef(null);
    const caveElem = useRef(null);

    // useEffect(() => {
    //     console.log(gg.current.style.left);
    //     gg.current.style.left = 1000 + "px";
    // }, []);
    useEffect(() => {
        window.addEventListener("scroll", throttleFunc);
        
        return () => {
            window.removeEventListener("scroll", throttleFunc);
        };
    });

    const throttleFunc = throttle(300, () => {
        let value = window.scrollY;
        starSmolElem.current.style.left = value * 0.25 + "px";
        starBigElem.current.style.left = value * 0.9 + "px";
        starSmolElem.current.style.top = value * 0.35 + "px";
        starBigElem.current.style.top = value * 0.35 + "px";
        moonElem.current.style.top = value * 1.05 + "px";
        cloudElem.current.style.top = value * 0.25 + "px";
        gladeElem.current.style.top = value * 0.35 + "px";
        console.log(glade);
    });

    // const onScrollPage = () => {
    //     let value = window.scrollY;
    //     starSmolElem.current.style.left = value * 0.25 + "px";
    //     starBigElem.current.style.left = value * 0.9 + "px";
    //     starSmolElem.current.style.top = value * 0.35 + "px";
    //     starBigElem.current.style.top = value * 0.35 + "px";
    //     moonElem.current.style.top = value * 1.05 + "px";
    //     cloudElem.current.style.top = value * 0.25 + "px";
    //     gladeElem.current.style.top = value * 0.35 + "px";
    //     console.log(glade);
    // };
    return(
        <>
            <section className="texture">
                <img className="texture__picture" ref={starSmolElem} src={starSmol} alt="star_smol" id="star_small"/>
                <img className="texture__picture" ref={starBigElem} src={starBig} alt="star_big" id="star_big"/>
                <img className="texture__picture cloud" ref={cloudElem} src={cloud} alt="cloud" id="cloud"/>
                <img className="texture__picture moon" ref={moonElem} src={moon} alt="moon" id="moon"/>
                <img className="texture__picture" ref={gladeElem} src={glade} alt="glade" id="glade"/>
                <img className="texture__picture" ref={caveElem} src={cave} alt="cave" id="cave"/>
            </section>
        </>
    );
}

export default Paralax;
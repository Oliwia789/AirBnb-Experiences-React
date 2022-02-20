import img1 from "../assets/image 28.png"
import img2 from "../assets/image 30.png"
import img3 from "../assets/image 26.png"
import img4 from "../assets/image 27.png"
import img5 from "../assets/image 29.png"
import img6 from "../assets/image 22.png"
import img7 from "../assets/image 23.png"
import img8 from "../assets/image 25.png"
import img9 from "../assets/image 24.png"

function Hero() {
    return (
        <section>
            <div className="wrapper">
                <img src={img1} alt="" className="one"></img>
                <img src={img2} alt="" className="two"></img>
                <img src={img3} alt="" className="three"></img>
                <img src={img4} alt="" className="four"></img>
                <img src={img5} alt="" className="five"></img>
                <img src={img6} alt="" className="six"></img>
                <img src={img7} alt="" className="seven"></img>
                <img src={img8} alt="" className="eight"></img>
                <img src={img9} alt="" className="nine"></img>
            </div>
            <div className="title">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero
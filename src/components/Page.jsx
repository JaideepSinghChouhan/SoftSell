import ChatBot from "./ChatBot";
import Contactform from "./ContactForm";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testinomials from "./Testinomials";
import WhyChooseUs from "./WhyChooseUs";

export default function Page(){
    return(
        <>
        <Hero/>
        <HowItWorks/>
        <WhyChooseUs/>
        <Testinomials/>
        <Contactform/>
        <Footer/>
        <ChatBot/>
        </>
    )
}
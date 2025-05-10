import { Typewriter } from 'react-simple-typewriter';
import NavBar from './NavBAr';

export default function Hero (){

return(
     <section className="relative flex flex-col bg-purple-600 text-white py-20 text-center px-4 h-screen justify-center items-center">
        <NavBar/>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          The <br />
            <span className="text-yellow-300">
            <Typewriter
              words={['Marketplace', 'Resale Hub', 'Software Buyer', 'License Partner']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span> 
          <br />
          for Unused Software
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Sell your extra software licenses instantly and get the best price.
        </p>
        <a
        href='#contact' 
        className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition">
          Sell My Licenses
        </a>
      </div>
    </section>
    )

};
import { Typewriter } from 'react-simple-typewriter';
import NavBar from './NavBAr';

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-purple-600 text-white min-h-screen pt-28 pb-16 px-4 text-center justify-center items-center">
      <NavBar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
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
        <p className="text-base sm:text-lg lg:text-xl mb-8">
          Sell your extra software licenses instantly and get the best price.
        </p>
        <a
          href="#contact"
          className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition text-sm sm:text-base"
        >
          Sell My Licenses
        </a>
      </div>
    </section>
  );
}

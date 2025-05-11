export default function NavBar(){
    return(
        <header className="w-full absolute top-0 left-0 z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          <span className="text-gray-100">Soft</span>
          <span className="text-black">Sell</span>
        </h1>
        <a
          href="#contact"
          className="bg-white text-purple-600 font-semibold py-2 px-5 sm:px-6 rounded-full hover:bg-blue-100 transition text-sm sm:text-base"
        >
          Sell
        </a>
      </div>
    </header>
        
    )
}
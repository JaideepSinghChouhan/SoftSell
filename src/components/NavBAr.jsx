export default function NavBar(){
    return(
        <header className="flex justify-around gap-200 w-full absolute top-0 mt-5">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
        <span className="text-gray-100">Soft</span><span className="text-black">Sell</span>
        </h1>
        <div className="flex items-center gap-4">
          <a
        href='#contact' 
        className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition">
          Sell
        </a>
        </div>
        </header>
        
    )
}
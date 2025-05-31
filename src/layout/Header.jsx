function Header(){
    return(
        <header className="w-full bg-amberPrimary py-4 px-10 flex items-center h-[82px]">
            <div className="text-white text-3xl font-medium flex justify-between w-full">
                <h1 >Images Galery</h1>
                <h1 className="hover:scale-120 underline hover:cursor-pointer">Favorites</h1>
            </div>
        </header>
    )
}
export default Header
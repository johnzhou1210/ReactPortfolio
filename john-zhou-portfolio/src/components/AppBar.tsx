function AppBar() {
    return (
        <header className=" bg-slate-900 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold" >John Zhou</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-indigo-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-indigo-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-indigo-200">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AppBar;
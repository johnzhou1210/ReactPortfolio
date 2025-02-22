function AppBar() {
    return (
        <header className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold" >John Zhou</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-blue-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-blue-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-blue-200">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AppBar;
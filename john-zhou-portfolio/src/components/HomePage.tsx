function HomePage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="relative h-full w-full">
          {/* background layer */}
          <div className="flex h-full w-full items-center justify-center bg-indigo-700">
          <div className="w-full h-screen grid grid-cols-2 gap-4 p-4">
              <button className="bg-red-300 text-center text-white font-semibold text-7xl content-center rounded-3xl">About</button>
              <button className="bg-orange-300 text-center text-white font-semibold text-7xl content-center rounded-3xl">Portfolio</button>
              <button className="bg-green-300 text-center text-white font-semibold text-7xl content-center rounded-3xl">Contact</button>
              <button className="bg-blue-300 text-center text-white font-semibold text-7xl content-center rounded-3xl">Resume</button>
            </div>
          </div>

          {/* overlay layer */}
          <div className=" outline-8 outline-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-100 inset-0 bg-indigo-700 bg-opacity-20 rounded-3xl flex items-center justify-center">
           <span className="text-white font-bold text-7xl">John Zhou</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

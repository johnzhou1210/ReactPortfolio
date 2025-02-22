
// function TabBar() {
   

    

//     return (
//         <div className='bg-gray-200 p-4'>
//             <div className='flex space-x-4'>
//                 {tabs.map((tab) => (
//                     <button key={tab.value} 
//                     className={`flex-1 py-2 font-semibold text-center ${
//                         activeTab === tab.value ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
//                     }`}
//                     onClick={()=>setActiveTab(tab.value)}
                    
//                     >{tab.name}
//                     </button>
//                 ))}
//             </div>
//             <div className='mt-4'>
//                 {activeTab === 'home' && <HomePage />}
//                 {activeTab === 'about' && <AboutPage />}
//                 {activeTab === 'portfolio' && <PortfolioPage />}
//                 {activeTab === 'contact' && <ContactPage />}
//             </div>
//         </div>
//     );
// }

// export default TabBar
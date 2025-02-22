import React, {useState} from 'react';

function TabBar() {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        {name: 'Home', value: 'home'},
        {name: 'About', value: 'about'},
        {name: 'Portfolio', value: 'portfolio'},
        {name: 'Contact', value: 'contact'},

    ];

    return (
        <div className='bg-gray-200 p-4'>
            <div className='flex space-x-4'>
                {tabs.map((tab) => (
                    <button key={tab.value} 
                    className={`flex-1 py-2 font-semibold text-center ${
                        activeTab === tab.value ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
                    }`}
                    
                    
                    >{tab.name}</button>
                ))}
            </div>
        </div>
    );
}

export default TabBar
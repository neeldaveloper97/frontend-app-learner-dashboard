import { useEffect, useRef, useState } from 'react';
import { CaretDown, CaretRight, Gear, LogoIcon, SignOut, UserCircle } from '../../assets/svg';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const MenuItem = ({ icon: Icon, label, onClick, disabled = false }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full flex items-center gap-3 py-2 text-sm text-left transition-colors ${disabled
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
        >
            <img src={Icon} alt="" />
            {label}
        </button>
    );

    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                        alt="Brian F."
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className='hidden md:flex items-center'>
                        <span className="text-sm font-medium text-gray-900">Brian F.</span>
                        <img src={CaretDown} alt="" />
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-full mt-5 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden p-4" style={{
                        right: 0
                    }}>
                        {/* User Profile Section */}
                        <div className="pb-3 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                                    alt="Brian Ferric"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Brian Ferric
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        brian.ferric@gmail.com
                                    </p>
                                </div>
                                <button className='cursor-pointer'>
                                    <img src={CaretRight} alt="" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="">
                            <MenuItem
                                icon={UserCircle}
                                label="Account"
                                onClick={() => {
                                    console.log('Account clicked');
                                    setIsOpen(false);
                                }}
                            />
                            <MenuItem
                                icon={Gear}
                                label="Setting"
                                onClick={() => {
                                    console.log('Settings clicked');
                                    setIsOpen(false);
                                }}
                                disabled={true}
                            />
                            <div className='border-t border-gray-100'>
                                <MenuItem
                                    icon={SignOut}
                                    label="Logout"
                                    onClick={() => {
                                        console.log('Logout clicked');
                                        setIsOpen(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDropdown;
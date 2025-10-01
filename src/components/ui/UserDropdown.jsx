import { useEffect, useRef, useState } from 'react';
import { CaretDown, CaretRight, Gear, LogoIcon, SignOut, UserCircle } from '../../assets/svg';
import { getEdxUserInfo } from '../../utils/edxUser';


const iconMap = {
    Profile: UserCircle,
    Account: Gear,        // or UserCircle depending on design
    Setting: Gear,
    'Sign Out': SignOut,
};


const UserDropdown = ({ userMenu = [], username = 'User Name' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const user = getEdxUserInfo();

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

    const MenuItem = ({ label, href, disabled = false }) => {
        const Icon = iconMap[label] || UserCircle; // fallback icon
        return (
            <a
                disabled={disabled}
                href={href}
                style={{
                    pointerEvents: disabled ? 'none' : 'auto',
                }}
                className={`w-full flex items-center gap-3 py-2 text-sm text-left transition-colors ${disabled
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
            >
                <img src={Icon} alt="" className="w-4 h-4" />
                {label}
            </a>
        );
    };

    const capitalizeFirstLetter = (str = '') => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };



    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto">

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                    <img
                        src={user?.profileImage}
                        alt="Brian F."
                        className="border w-8 h-8 rounded-full object-cover"
                    />
                    <div className='hidden md:flex items-center'>
                        <span className="text-sm font-medium text-gray-900">{capitalizeFirstLetter(user?.username)}</span>
                        <img src={CaretDown} alt="" />
                    </div>
                </button>



                {isOpen && (
                    <div
                        className="absolute top-full mt-5 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden p-4"
                        style={{ right: 0 }}
                    >
                        {/* Profile section */}
                        <div className="pb-3 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <img
                                    src={user?.profileImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"}
                                    alt="Profile"
                                    className="border w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate mb-0">
                                        {capitalizeFirstLetter(user?.username)}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate mb-0">
                                        {user?.email}
                                    </p>
                                </div>
                                <button className="cursor-pointer">
                                    <img src={CaretRight} alt="" />
                                </button>
                            </div>
                        </div>

                        {/* Dynamic sections */}
                        <div>
                            {userMenu.map((section, idx) => (
                                <div
                                    key={idx}
                                    className={`${idx > 0 ? 'border-t border-gray-100 mt-2 pt-2' : 'border-t border-gray-100'}`}
                                >
                                    {section.items.map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            label={item.content}
                                            href={item.href}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default UserDropdown;
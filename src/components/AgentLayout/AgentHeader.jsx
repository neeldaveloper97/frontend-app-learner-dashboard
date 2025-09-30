import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bell, DialPadIcon, DotsNine, MagnifyingGlass } from "../../assets/svg";
import { Button } from '../ui/Button';
import Input from '../ui/Input';
import UserDropdown from '../ui/UserDropdown';

// Menu icon component for mobile toggle
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export default function AgentHeader({
    sidebarCollapsed,
    setSidebarCollapsed,
    pageTitle,
    onToggleSidebar,
    isMobile,
    sidebarOpen
}) {
    const { user } = useSelector((state) => state.auth);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <>
            <header className="bg-white border-b border-gray-200 p-3.5 sm:px-6 sm:py-4 sticky top-0 z-30">
                <div className="flex items-center justify-between">
                    {/* Left Side - Mobile Toggle & Search */}
                    <div className="flex items-center gap-3">
                        {/* Mobile Sidebar Toggle */}
                        {isMobile && (
                            <button
                                className="sidebar-toggle p-2 rounded-lg hover:bg-gray-100 md:hidden"
                                onClick={onToggleSidebar}
                                aria-label="Toggle sidebar"
                            >
                                <MenuIcon />
                            </button>
                        )}

                        {/* Search Bar - Hide on very small screens */}
                        <div className="hidden sm:block">
                            <Input leftIcon={MagnifyingGlass} placeholder="Search..." />
                        </div>
                    </div>

                    {/* Right Side - Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className='flex items-center divide-x divide-contentBorderPrimary'>
                            <div className='px-2 sm:px-3'>
                                <button className="p-2 rounded-full bg-green-100 text-green-400 cursor-pointer">
                                    <DialPadIcon />
                                </button>
                            </div>
                            <div className='px-2 sm:px-3'>
                                <button className="p-2 rounded-full bg-transparent hover:bg-neutral-50 cursor-pointer">
                                    <img src={Bell} alt="Notifications" />
                                </button>
                            </div>
                            <div className='px-2 sm:px-3 hidden sm:block'>
                                <button className="p-2 rounded-full bg-transparent hover:bg-neutral-50 cursor-pointer">
                                    <img src={DotsNine} alt="More options" />
                                </button>
                            </div>
                        </div>

                        {/* Hide "Join as Partner" button on mobile */}
                        <div className="hidden sm:block">
                            <Button variant='outline'>Join as Partner</Button>
                        </div>

                        <UserDropdown />
                    </div>
                </div>

                {/* Mobile Search Bar - Show below header on small screens */}
                <div className="sm:hidden mt-3">
                    <Input leftIcon={MagnifyingGlass} placeholder="Search..." />
                </div>
            </header>
        </>
    );
}
import { useState } from 'react';
import { Bell, DialPadIcon, DotsNine, MagnifyingGlass } from "../../assets/svg";
import Input from '../ui/Input';
import UserDropdown from '../ui/UserDropdown';
import AgentAppsPopup from './AgentAppsPopup';

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
    sidebarOpen,
    menu = { mainMenu: [], userMenu: [] }
}) {

    const [showPricingDialog, setShowPricingDialog] = useState(false)
    const [isAppsOpen, setIsAppsOpen] = useState(false);
    const handleGoWithCampus = () => {
        setShowPricingDialog(false);
        // Add any additional logic for campus plan
    };
    const handleJoinAsPartner = () => {
        setShowPricingDialog(false);
        // Add any additional logic for partner plan
    };
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
                            <div className='px-2 sm:px-3 hidden sm:block relative'>
                                <button
                                    onClick={() => setIsAppsOpen((s) => !s)}
                                    className="p-2 rounded-full bg-transparent hover:bg-neutral-50 cursor-pointer"
                                    aria-expanded={isAppsOpen}
                                    aria-haspopup="true"
                                >
                                    <img src={DotsNine} alt="More options" />
                                </button>
                                <AgentAppsPopup isOpen={isAppsOpen} onClose={() => setIsAppsOpen(false)} />
                            </div>
                        </div>

                        {/* Hide "Join as Partner" button on mobile */}
                        <div className="hidden sm:block" onClick={() => setShowPricingDialog(!showPricingDialog)}>
                            <button variant='outline' style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                borderColor: '#000',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                minHeight: '42px'
                            }}>Join as Partner</button>
                        </div>

                        <UserDropdown userMenu={menu.userMenu} />
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
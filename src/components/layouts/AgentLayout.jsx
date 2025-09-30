import { useState, cloneElement, useEffect } from 'react';
import Sidebar from '../AgentLayout/Sidebar';
import AgentHeader from '../AgentLayout/AgentHeader';
import { useLocation } from 'react-router-dom';

export default function AgentLayout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768; // md breakpoint
            setIsMobile(mobile);
            if (mobile) {
                setSidebarCollapsed(false); // Always expanded on mobile when open
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, sidebarOpen]);

    const getPageTitle = () => {
        const path = location.pathname;
        if (path === '/dashboard') return 'Dashboard';
        if (path === '/explore-courses') return 'Explore Courses';
        if (path === '/my-courses') return 'My Courses';
        if (path === '/certifications') return 'Certifications';
        if (path === '/learn-with-us') return 'Learn with Us';
        if (path.includes('/courses')) return 'Courses';
        if (path.includes('/community')) return 'Community';
        if (path.includes('/profile')) return 'Profile';
        if (path.includes('/settings')) return 'Settings';
        return 'Dashboard';
    };

    const childrenWithProps = cloneElement(children, { sidebarCollapsed, isMobile });

    const handleSidebarToggle = () => {
        if (isMobile) {
            setSidebarOpen(!sidebarOpen);
        } else {
            setSidebarCollapsed(!sidebarCollapsed);
        }
    };

    return (
        <>
            <main className="relative h-screen overflow-hidden">
                {/* Overlay for mobile */}
                {isMobile && sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className={`
                    sidebar fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out
                    ${isMobile
                        ? `w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
                        : `${sidebarCollapsed ? 'w-20' : 'w-64'} translate-x-0`
                    }
                `} >
                    <Sidebar
                        sidebarCollapsed={isMobile ? false : sidebarCollapsed}
                        setSidebarCollapsed={setSidebarCollapsed}
                        isMobile={isMobile}
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                </div>

                {/* Main Content */}
                <section
                    className={`flex flex-col h-full transition-all duration-300 ease-in-out`}
                    style={{
                        marginLeft: isMobile ? "0px" : sidebarCollapsed ? "80px" : "256px",
                    }}
                >
                    <AgentHeader
                        sidebarCollapsed={sidebarCollapsed}
                        setSidebarCollapsed={setSidebarCollapsed}
                        pageTitle={getPageTitle()}
                        onToggleSidebar={handleSidebarToggle}
                        isMobile={isMobile}
                        sidebarOpen={sidebarOpen}
                    />

                    <div className='flex-1 overflow-auto'>
                        <div className="bg-white border-b border-contentBorderPrimary">
                            <div className="px-4 sm:px-6 py-4">
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {getPageTitle()}
                                </h1>
                            </div>
                        </div>
                        <div className="flex-1">
                            {childrenWithProps}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
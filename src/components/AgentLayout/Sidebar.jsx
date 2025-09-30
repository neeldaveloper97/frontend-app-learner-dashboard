import { Book, Card, CaretDoubleHorizontal, ChartPie, Compass, LogoIcon, LogoText, Student } from "../../assets/svg";

const Sidebar = ({ sidebarCollapsed, setSidebarCollapsed }) => {

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    const sideBarItems = [
        {
            label: null, // no label for the top group
            items: [
                { name: 'Dashboard', icon: ChartPie, path: '/learner-dashboard/' },
                { name: 'Explore Courses', icon: Compass, path: 'http://local.openedx.io:8000/courses' },
            ],
        },
        {
            label: 'MY LEARNING',
            items: [
                { name: 'Courses', icon: Student, path: '/my-courses' },
                { name: 'Certifications', icon: Card, path: '/certifications' },
            ],
        },
        {
            label: null, // bottom group (no label, just spacing)
            items: [
                { name: 'Learn with us', icon: Book, path: '/learn-with-us' },
            ],
        },
    ];
    return (
        <>
            <aside
                className='flex flex-col shadow-[0px_4px_32px_0px_#00000029] overflow-hidden text-white transition-all duration-300 ease-in-out bg-darkColor h-screen sticky top-0'
                style={{ width: sidebarCollapsed ? '80px' : '256px' }}
            >
                <div className='flex items-center w-full p-4 border-b border-white/25'>
                    <img
                        src={LogoIcon}
                        alt="Logo"
                        className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div className={`ml-3 transition-all duration-300 ease-in-out ${sidebarCollapsed
                        ? 'opacity-0 scale-95 translate-x-[-10px] w-0'
                        : 'opacity-100 scale-100 translate-x-0 w-auto'
                        }`}>
                        {!sidebarCollapsed && (
                            <img
                                src={LogoText}
                                alt="Logo Text"
                                className="transition-opacity duration-300 delay-100"
                            />
                        )}
                    </div>
                </div>

                <nav className="flex flex-col flex-1">
                    <ul className=" divide-y divide-white/25"> {/* spacing between groups */}
                        {sideBarItems.map((group, groupIndex) => (
                            <li key={groupIndex} className='px-4 py-5'>
                                {group.label && (
                                    <div
                                        className={`text-xs font-semibold text-contentDarkSecondary uppercase tracking-wider px-3 pb-2 transition-all duration-300 ${sidebarCollapsed ? 'opacity-0 h-0' : 'opacity-100 h-auto'
                                            }`}
                                    >
                                        {group.label}
                                    </div>
                                )}
                                <ul className="space-y-1">
                                    {group.items.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.path}
                                                className={
                                                    `flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 rounded-lg hover:bg-white/10 hover:text-white group ` +
                                                    (sidebarCollapsed ? 'justify-center' : 'justify-start')
                                                }
                                                title={sidebarCollapsed ? item.name : ''}
                                            >
                                                <div className="flex-shrink-0 w-5 h-5">
                                                    <img src={item.icon} alt="" />
                                                </div>
                                                <span
                                                    className={`text-contentDarkSecondary text-sm transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${sidebarCollapsed ? 'hidden opacity-0 scale-95 -translate-x-2 max-w-0 ml-0' : 'opacity-100 scale-100 translate-x-0 max-w- [200px] ml-3'}`}
                                                >
                                                    {item.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Toggle Button - positioned at the border */}
            <button
                onClick={toggleSidebar}
                className="absolute z-[9998] hidden md:flex items-center justify-center transition-all duration-200 bg-white rounded shadow-lg size-7 top-7 hover:shadow-xl hover:bg-gray-50"
                style={{
                    left: sidebarCollapsed ? '65px' : '242px',
                    transition: 'left 0.3s ease-in-out'
                }}
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                <img
                    className={`w-4 h-4 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-0' : 'rotate-180'}`}
                    src={CaretDoubleHorizontal}
                    alt=""
                />
            </button>
        </>
    )
}

export default Sidebar
import React from 'react';
import PropTypes from 'prop-types';
import { cloneElement, useEffect, useState } from 'react';

import { Container ,Col, Row } from '@openedx/paragon';

import { AppContext } from '@edx/frontend-platform/react';
import { useLocation } from 'react-router-dom';
import AgentHeader from '../../components/AgentLayout/AgentHeader';
import Sidebar from '../../components/AgentLayout/Sidebar';
import hooks from './hooks';
import { reduxHooks } from 'hooks';
import WidgetSidebarSlot from 'plugin-slots/WidgetSidebarSlot';
import { useLearnerDashboardHeaderMenu } from '../LearnerDashboardHeader/hooks';


export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 8, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 0 },
  },
};

export const DashboardLayout = ({ children }) => {
  const {
    isCollapsed,
    sidebarShowing,
  } = hooks.useDashboardLayoutData();

  const courseListColumnProps = sidebarShowing
    ? columnConfig.courseList.withSidebar
    : columnConfig.courseList.noSidebar;
  const { authenticatedUser } = React.useContext(AppContext);
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const exploreCoursesClick = () => {
      findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));
    };
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

  const learnerHomeHeaderMenu = useLearnerDashboardHeaderMenu({
    courseSearchUrl,
    authenticatedUser,
    exploreCoursesClick,
  });


  return (
    <div fluid size="xl" className='h-full p-0 mx-0 w-full max-w-full'>
      <div className={`
                    sidebar fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out
                    ${isMobile
          ? `w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
          : `${sidebarCollapsed ? 'w-20' : 'w-64'} translate-x-0`
        }
                `}>
        <Sidebar
          sidebarCollapsed={isMobile ? false : sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
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
          menu={learnerHomeHeaderMenu}
        />

        <div className='flex-1 overflow-auto'>
          <div className="flex-1">
            {children}
            <Row>
                <Col {...courseListColumnProps} className="course-list-column">
                </Col>
                <Col {...columnConfig.sidebar} className={['sidebar-column', !isCollapsed && 'not-collapsed']}>
                <WidgetSidebarSlot />
                </Col>
                </Row>
          </div>
        </div>
      </section>
    </div>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;

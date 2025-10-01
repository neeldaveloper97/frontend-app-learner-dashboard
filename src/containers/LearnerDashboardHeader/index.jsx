import React from 'react';

import { AppContext } from '@edx/frontend-platform/react';
import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';
import ConfirmEmailBanner from './ConfirmEmailBanner';
import { findCoursesNavClicked, useLearnerDashboardHeaderMenu } from './hooks';
import AgentHeader from '../../components/AgentLayout/AgentHeader';
import './index.scss';

export const LearnerDashboardHeader = () => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();

  const exploreCoursesClick = () => {
    findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));
  };

  const learnerHomeHeaderMenu = useLearnerDashboardHeaderMenu({
    courseSearchUrl,
    authenticatedUser,
    exploreCoursesClick,
  });



  return (
    <>
      <ConfirmEmailBanner />
      {/* <Header
        mainMenuItems={learnerHomeHeaderMenu.mainMenu}
        secondaryMenuItems={learnerHomeHeaderMenu.secondaryMenu}
        userMenuItems={learnerHomeHeaderMenu.userMenu}
      /> */}
      {/* <MasqueradeBar /> */}
    </>
  );AgentHeader
};

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;

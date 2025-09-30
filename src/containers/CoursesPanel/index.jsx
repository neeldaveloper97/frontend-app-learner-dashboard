import React, { useState } from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';

import { reduxHooks } from 'hooks';
import {
  CourseFilterControls,
} from 'containers/CourseFilterControls';
import CourseListSlot from 'plugin-slots/CourseListSlot';
import NoCoursesViewSlot from 'plugin-slots/NoCoursesViewSlot';

import { useCourseListData } from './hooks';

import messages from './messages';

import './index.scss';
import PricingDialog from '../../components/PricingDialog';

/**
 * Renders the list of CourseCards, as well as the controls (CourseFilterControls) for modifying the list.
 * Also houses the NoCoursesView to display if the user hasn't enrolled in any courses.
 * @returns List of courses as CourseCards or empty state
*/
export const CoursesPanel = () => {
  const { formatMessage } = useIntl();
  const hasCourses = reduxHooks.useHasCourses();
  const courseListData = useCourseListData();
  return (
    <div className="course-list-container">
      {/* <PricingDialog
        isOpen={showPricingDialog}
        onClose={() => setShowPricingDialog(false)}
        onGoWithCampus={handleGoWithCampus}
        onJoinAsPartner={handleJoinAsPartner}
      /> */}
      <div className="course-list-heading-container p-3.5 border-b border-contentBorderPrimary">
        <h2 className="course-list-title">{formatMessage(messages.myCourses)}</h2>
        <div className="course-filter-controls-container">
          <CourseFilterControls {...courseListData.filterOptions} />
        </div>
      </div>
      <div className='p-4 sm:p-8'>
        {hasCourses ? <CourseListSlot courseListData={courseListData} /> : <NoCoursesViewSlot />}
      </div>
    </div>
  );
};

CoursesPanel.propTypes = {};

export default CoursesPanel;

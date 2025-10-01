
import { useIntl } from '@edx/frontend-platform/i18n';
import courseImg from '../../assets/jpg/courseImg.jpg';
import { reduxHooks } from 'hooks';
import CourseListSlot from 'plugin-slots/CourseListSlot';
import NoCoursesViewSlot from 'plugin-slots/NoCoursesViewSlot';

import { useCourseListData } from './hooks';


import './index.scss';
import CourseShowcase from '../../components/CourseShowcase';
import TrustedCompanies from '../../components/TrustedCompanies';
import ExploreCategories from '../../components/ExploreCategories';
import { getEdxUserInfo } from '../../utils/edxUser';

/**
 * Renders the list of CourseCards, as well as the controls (CourseFilterControls) for modifying the list.
 * Also houses the NoCoursesView to display if the user hasn't enrolled in any courses.
 * @returns List of courses as CourseCards or empty state
*/
export const CoursesPanel = () => {
  const { formatMessage } = useIntl();
  const hasCourses = reduxHooks.useHasCourses();
  const courseListData = useCourseListData();

  const popularCourses = [
    {
      id: 1,
      title: "The Complete Full-Stack Web Development Bootcamp",
      rating: "4.4",
      reviewCount: "10,789",
      startIn: "7 Days",
      bookingPercentage: 82,
      imageUrl: courseImg,
      courseUrl: "/"
    },
    {
      id: 2,
      title: "The Complete Full-Stack Web Development Bootcamp",
      rating: "4.4",
      reviewCount: "10,789",
      startIn: "7 Days",
      bookingPercentage: 82,
      imageUrl: courseImg,
      courseUrl: "/"
    },
    {
      id: 3,
      title: "The Complete Full-Stack Web Development Bootcamp",
      rating: "4.4",
      reviewCount: "10,789",
      startIn: "7 Days",
      bookingPercentage: 82,
      imageUrl: courseImg,
      courseUrl: "/"
    },
    {
      id: 4,
      title: "The Complete Full-Stack Web Development Bootcamp",
      rating: "4.4",
      reviewCount: "10,789",
      startIn: "7 Days",
      bookingPercentage: 82,
      imageUrl: courseImg,
      courseUrl: "/"
    }
  ];

  const user = getEdxUserInfo();
  const capitalizeFirstLetter = (str = '') => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log("courseListData", courseListData)

  return (
    <div className="course-list-container">
      {/* <PricingDialog
        isOpen={showPricingDialog}
        onClose={() => setShowPricingDialog(false)}
        onGoWithCampus={handleGoWithCampus}
        onJoinAsPartner={handleJoinAsPartner}
      /> */}
      <div className="course-list-heading-container p-3.5 border-b border-contentBorderPrimary">
        {/* <h2 className="">{formatMessage(messages.myCourses)}</h2> */}
        <h2 className="">Dashboard</h2>
        {/* <div className="course-filter-controls-container">
          <CourseFilterControls {...courseListData.filterOptions} />
        </div> */}
      </div>
      <div className='p-4 sm:p-8'>
        <div className="bg-primary rounded-lg p-4">
          <div className="flex items-center gap-8">
            {/* Profile Picture */}
            <div className="size-16 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={user?.profileImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"}
                alt="Brian Ferric"
                className="size-full object-cover"
              />
            </div>

            {/* Greeting Text */}
            <div className="flex-1">
              <h2 className="text-2xl font-medium leading-6 text-black">
                Hi, {capitalizeFirstLetter(user.username) || 'User'}
              </h2>
              <p className=" font-medium leading-6 text-black text-sm underline cursor-pointer hover:text-gray-900 transition-colors">
                Add occupation and interests.
              </p>
            </div>
          </div>
        </div>
        {hasCourses ?
          // <>
          <CourseShowcase
            heading={<>Explore <span className="font-semibold">Active Courses</span></>}
            courseData={courseListData.visibleList}
            footerButton
          />
          // <CourseListSlot courseListData={courseListData} /> </>  }
          : <NoCoursesViewSlot />}

        <TrustedCompanies />
        <ExploreCategories />
      </div>
    </div>
  );
};

CoursesPanel.propTypes = {};

export default CoursesPanel;

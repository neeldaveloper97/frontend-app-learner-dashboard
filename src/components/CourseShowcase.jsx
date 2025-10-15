    import { useState } from 'react';
    import PropTypes from 'prop-types';
    import CourseCard from './CourseCard';
    import { Button } from './ui/Button';
    import noCourseImg from '../assets/jpg/no_course_image.png';

    const CourseShowcase = ({ heading, courseData, headerButton, footerButton, variant = 'upcoming' }) => {
        const [showAll, setShowAll] = useState(false);
        const visibleCourses = Array.isArray(courseData)
            ? (showAll ? courseData : courseData.slice(0, 4))
            : [];
        return (
            <div>
                <div className="py-2 flex items-center justify-between">
                    <p className="text-2xl">{heading}</p>
                    {headerButton && <Button className="min-w-[210px]">Explore All Courses</Button>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                    {visibleCourses.map((course) => {
                        // debugger
                        const capitalizeFirstLetter = (str = '') => {
                            if (!str) return '';
                            return str.charAt(0).toUpperCase() + str.slice(1);
                        };

                        return (
                            <CourseCard
                                key={course.cardId}
                                title={capitalizeFirstLetter(course.course?.courseName) || capitalizeFirstLetter(course.title)}
                                courseOverview={course.course?.courseOverview || course.courseOverview}
                                rating={course.rating}
                                reviewCount={course.reviewCount}
                                startIn={course.courseRun?.startDate || course.startIn}
                                bookingPercentage={course.bookingPercentage}
                                imageUrl={`https://campus-dev.nextere.com${course.course?.bannerImgSrc}` || noCourseImg}
                                variant={variant}
                                currentPrice={course.currentPrice}
                                originalPrice={course.originalPrice}
                                brandName={course.brandName}
                                onViewCourse={() => {}}
                                courseNumber={course.course?.courseNumber ?? course.number}
                                courseProviderName={capitalizeFirstLetter(course.courseProvider?.name) || capitalizeFirstLetter(course.courseProviderName)}
                                courseHomeURL={course.courseRun?.homeUrl ?? `https://campus-dev.nextere.com/courses/${course.id}/about`}
                                courseMode={course.mode}

                            />
                        )
                    })}
                </div>
                {
                    courseData?.length > 4 ? 
                    footerButton && <div className="pt-4">
                        <Button variant="outline" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'Show All Courses'}</Button>
                    </div> : null
                }

            </div>
        )
    }

    CourseShowcase.propTypes = {
        heading: PropTypes.string,
        courseData: PropTypes.arrayOf(PropTypes.object),
        headerButton: PropTypes.bool,
        footerButton: PropTypes.bool,
        variant: PropTypes.string,
    };
    
    export default CourseShowcase;
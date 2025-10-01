import CourseCard from "./CourseCard";
import { Button } from "./ui/Button";

const CourseShowcase = ({ heading, courseData, headerButton, footerButton, variant = "upcoming" }) => {

    console.log("courseData", courseData)
    return (
        <div>
            <div className="py-2 flex items-center justify-between">
                <p className="text-2xl">{heading}</p>
                {headerButton && <Button className="min-w-[210px]">Explore All Courses</Button>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {courseData.map((course) => {
                    // debugger
                    const capitalizeFirstLetter = (str = '') => {
                        if (!str) return '';
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    };

                    return (
                        <CourseCard
                            key={course.cardId}
                            title={capitalizeFirstLetter(course.course.courseName)}
                            rating={course.rating}
                            reviewCount={course.reviewCount}
                            startIn={course.startIn}
                            bookingPercentage={course.bookingPercentage}
                            imageUrl={`https://campus-dev.nextere.com/${course.course?.bannerImgSrc}`}
                            variant={variant}
                            currentPrice={course.currentPrice}
                            originalPrice={course.originalPrice}
                            brandName={course.brandName}
                            courseUrl={course.courseUrl}
                            onViewCourse={() => console.log(`Begin course ${course.id}`)}
                            courseNumber={course.course.courseNumber}
                            courseProviderName={capitalizeFirstLetter(course.courseProvider?.name)}
                            courseHomeURL={course.courseRun.homeUrl}
                        />
                    )
                })}
            </div>
            {
                footerButton && <div className="pt-4">
                    <Button variant="outline" >Show All Courses</Button>
                </div>
            }

        </div>
    )
}

export default CourseShowcase
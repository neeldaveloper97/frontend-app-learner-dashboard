import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCourseDiscovery } from '../../hooks/api';
import CourseCard from '../../components/CourseCard';
import CourseShowcase from '../../components/CourseShowcase';
import { Button } from '../../components/ui/Button';
import ExploreCategories from '../../components/ExploreCategories';

import DashboardLayout from '../Dashboard/DashboardLayout';
import noCourseImg from "../../assets/jpg/no_course_image.png"

export default function ExploreCourses() {
    const [activeTab, setActiveTab] = useState("roles"); // main tab
    const [activeSubTab, setActiveSubTab] = useState("development"); // sub tab
    const location = useLocation();
    const isChildRoute = location.pathname.includes('/course-details/') || location.pathname.includes('/provider-details/');
    
    const { courses, loading, error } = useCourseDiscovery();
    
    const [mappedCourses, setMappedCourses] = useState([]);
    
    useEffect(() => {
        console.log('Course Discovery Response:', { courses, loading, error });
        if (courses && Array.isArray(courses)) {
            const mapped = courses.map(course => ({
                id: course.data.id,
                title: course.data.content.display_name,
                overview: course.data.content.overview,
                number: course.data.number,
                org: course.data.org,
                imageUrl: noCourseImg,
                start: course.data.start,
                language:course.data.language,
                courseUrl:`course-details/${course.data.id}`,
            }));
            setMappedCourses(mapped);
            console.log('Mapped Courses:', mapped); 
        }
    }, [courses, loading, error]);


    const coursesData = {
        roles: {
            development: [
                { title: "Frontend Developer Roadmap", rating: "4.6", reviewCount: "5,432", startIn: "5 Days", bookingPercentage: 90 },
                { title: "Backend with Node.js", rating: "4.5", reviewCount: "3,210", startIn: "10 Days", bookingPercentage: 75 },
            ],
            business: [
                { title: "Business Analytics with Excel", rating: "4.4", reviewCount: "4,678", startIn: "6 Days", bookingPercentage: 70 },
            ],
        },
        category: {
            design: [
                { title: "UI/UX Design Fundamentals", rating: "4.7", reviewCount: "8,122", startIn: "2 Days", bookingPercentage: 85},
            ],
            it: [
                { title: "Cloud Computing Basics", rating: "4.6", reviewCount: "7,000", startIn: "12 Days", bookingPercentage: 80 },
            ],
        },
        certifications: {
            aws: [
                { title: "AWS Certified Solutions Architect", rating: "4.8", reviewCount: "12,345", startIn: "14 Days", bookingPercentage: 92 },
            ],
            google: [
                { title: "Google Data Analytics Certificate", rating: "4.6", reviewCount: "9,876", startIn: "20 Days", bookingPercentage: 80 },
            ],
        },
    };
    // const popularCourses = [
    //     {
    //         id: 1,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         startIn: "7 Days",
    //         bookingPercentage: 82,
    //         imageUrl: courseImg,
    //         courseUrl: "course-details/1"
    //     },
    //     {
    //         id: 2,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         startIn: "7 Days",
    //         bookingPercentage: 82,
    //         imageUrl: courseImg,
    //         courseUrl: "course-details/2"
    //     },
    //     {
    //         id: 3,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         startIn: "7 Days",
    //         bookingPercentage: 82,
    //         imageUrl: courseImg,
    //         courseUrl: "course-details/3"
    //     },
    //     {
    //         id: 4,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         startIn: "7 Days",
    //         bookingPercentage: 82,
    //         imageUrl: courseImg,
    //         courseUrl: "course-details/4"
    //     }
    // ];
    // const freeCoursesData = [
    //     {
    //         id: 9,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         brandName: ibmLogo,
    //         courseUrl: "course-details/9"
    //     },
    //     {
    //         id: 10,
    //         title: "Introduction to JavaScript Programming",
    //         rating: "4.3",
    //         reviewCount: "15,234",
    //         brandName: ibmLogo,
    //         courseUrl: "course-details/10"
    //     },
    //     {
    //         id: 11,
    //         title: "Python for Beginners",
    //         rating: "4.5",
    //         reviewCount: "18,567",
    //         brandName: ibmLogo,
    //         courseUrl: "course-details/11"
    //     },
    //     {
    //         id: 12,
    //         title: "Web Design Fundamentals",
    //         rating: "4.2",
    //         reviewCount: "9,876",
    //         brandName: ibmLogo,
    //         courseUrl: "course-details/12"
    //     }
    // ];
    // const pricingCoursesData = [
    //     {
    //         id: 5,
    //         title: "The Complete Full-Stack Web Development Bootcamp",
    //         rating: "4.4",
    //         reviewCount: "10,789",
    //         currentPrice: "₹399",
    //         originalPrice: "₹3,100",
    //         courseUrl: "course-details/5"
    //     },
    //     {
    //         id: 6,
    //         title: "Advanced React Development Masterclass",
    //         rating: "4.6",
    //         reviewCount: "8,432",
    //         currentPrice: "₹599",
    //         originalPrice: "₹4,200",
    //         courseUrl: "course-details/6"
    //     },
    //     {
    //         id: 7,
    //         title: "Python Data Science Bootcamp",
    //         rating: "4.5",
    //         reviewCount: "12,156",
    //         currentPrice: "₹799",
    //         originalPrice: "₹5,500",
    //         courseUrl: "course-details/7"
    //     },
    //     {
    //         id: 8,
    //         title: "Machine Learning Fundamentals",
    //         rating: "4.7",
    //         reviewCount: "6,789",
    //         currentPrice: "₹999",
    //         originalPrice: "₹6,800",
    //         courseUrl: "course-details/8"
    //     }
    // ];

    const topics = [
        "Python",
        "Large Language Models (LLM)",
        "Generative AI (GenAI)",
        "Angular",
        "Google Flutter",
        "SQL",
        "Machine Lerning",
        "Unity",
        "C++ (programming language)",
        "Data Science",
        "Generative AI (GenAI)",
        "Python",
        "Large Language Models (LLM)",
        "Angular",
        "Google Flutter",
    ]

    const subCategories = Object.keys(coursesData[activeTab]);

    const renderCourses = () =>
        coursesData[activeTab][activeSubTab]?.map((course, idx) => (
            <CourseCard
                key={idx}
                title={course.title}
                rating={course.rating}
                reviewCount={course.reviewCount}
                startIn={course.startIn}
                bookingPercentage={course.bookingPercentage}
                onViewCourse={() => {course.courseUrl}}
            />
        ));

    const [activeQuestion, setActiveQuestion] = useState(-1);

    const faqData = [
        {
            id: 1,
            question: "Level",
            answer: (
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="beginner" className="cursor-pointer" />
                        <label htmlFor="beginner" className="text-sm">Beginner</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="intermediate" className="cursor-pointer" />
                        <label htmlFor="intermediate" className="text-sm">Intermediate</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="advanced" className="cursor-pointer" />
                        <label htmlFor="advanced" className="text-sm">Advanced</label>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            question: "Subcategory",
            answer: (
                <div className="space-y-2">
                    <select className="w-full border rounded-md px-3 py-2 text-sm">
                        <option>Web Development</option>
                        <option>Data Science</option>
                        <option>UI/UX</option>
                    </select>
                </div>
            ),
        },
        {
            id: 3,
            question: "Topics",
            answer: (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                </div>
            ),
        },
        {
            id: 4,
            question: "Price",
            answer: (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                </div>
            ),
        },
        {
            id: 5,
            question: "Duration",
            answer: (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                </div>
            ),
        },
        {
            id: 6,
            question: "Instructors",
            answer: (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                </div>
            ),
        },
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? -1 : index);
    };

    return (
        <>
        
            {isChildRoute ? (
                <Outlet />
            ) : (
                <>
                <DashboardLayout>
            {/* MAIN TABS */}
            <div className="px-8 flex gap-6 border-b">
                <Button
                    variant="ghost"
                    className={`!p-4 rounded-none border-b-2 ${activeTab === "roles" ? "border-black" : "border-transparent"}`}
                    onClick={() => {
                        setActiveTab("roles");
                        setActiveSubTab(Object.keys(coursesData.roles)[0]);
                    }}
                >
                    Explore by Roles
                </Button>
                <Button
                    variant="ghost"
                    className={`!p-4 rounded-none border-b-2 ${activeTab === "category" ? "border-black" : "border-transparent"}`}
                    onClick={() => {
                        setActiveTab("category");
                        setActiveSubTab(Object.keys(coursesData.category)[0]);
                    }}
                >
                    Explore by Category
                </Button>
                <Button
                    variant="ghost"
                    className={`!p-4 rounded-none border-b-2 ${activeTab === "certifications" ? "border-black" : "border-transparent"}`}
                    onClick={() => {
                        setActiveTab("certifications");
                        setActiveSubTab(Object.keys(coursesData.certifications)[0]);
                    }}
                >
                    Explore by Certifications
                </Button>
            </div>

            {/* SUB TABS */}
            <div className="px-8 bg-black flex gap-4">
                {subCategories.map((sub) => (
                    <Button
                        key={sub}
                        variant="ghost"
                        className={`py-4 px-3 capitalize text-white ${activeSubTab === sub ? "font-semibold" : "font-regular"}`}
                        onClick={() => setActiveSubTab(sub)}
                    >
                        {sub}
                    </Button>
                ))}
            </div>

            {/* TAB CONTENT */}
            <div className="space-y-6 p-4 sm:p-8">
                {activeTab === "roles" && (
                    <>
                        <div>              
                            <div className='mt-5 flex items-end divide-x divide-contentBorderPrimary'>
                                <div style={{ paddingRight: 24 }}>
                                    <div className="relative w-44">
                                        <select id="subcategory" name="subcategory" className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 px-2 pr-10 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue="all" >
                                            <option value="all">Biginner</option>
                                            <option value="frontend">Frontend</option>
                                            <option value="backend">Backend</option>
                                            <option value="design">Design</option>
                                        </select>
                                        <span className="pointer-events-none absolute inset-y-0 flex items-center text-gray-400" style={{ right: "12px" }}>
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 24 }}>
                                    <div className="relative w-64">
                                        <label htmlFor="subcategory" className="absolute -top-2 bg-white px-1 text-xs text-gray-500" style={{ left: "8px" }} > Sub Category </label>

                                        <select id="subcategory" name="subcategory" className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 px-2 pr-10 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue="all" >
                                            <option value="all">All</option>
                                            <option value="frontend">Frontend</option>
                                            <option value="backend">Backend</option>
                                            <option value="design">Design</option>
                                        </select>
                                        <span className="pointer-events-none absolute inset-y-0 flex items-center text-gray-400" style={{ right: "12px" }}>
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {renderCourses()}
                        </div> */}
                    </>
                )}

                {
                    activeTab === "category" && (
                        <div>
                            <div className="pb-4 border-b border-contentBorderPrimary">
                                <h2 className="text-4xl font-medium">Category Courses</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {renderCourses()}
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === "certifications" && (
                        <div>
                            <div className="pb-4 border-b border-contentBorderPrimary">
                                <h2 className="text-4xl font-medium">Certification Courses</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {renderCourses()}
                            </div>
                        </div>
                    )
                }

                {/* <div className="text-center">
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        Load More Courses
                    </button>
                </div> */}
            </div>

            <div className='space-y-6 p-4 sm:p-8'>
                <CourseShowcase
                    heading={<>Courses for <span className="font-semibold">Beginners to Professionals</span></>}
                    courseData={mappedCourses}
                    variant="coursePrice"
                    headerButton
                />
                <CourseShowcase
                    heading={<>Most popular <span className="font-semibold">Courses that Starting Soon</span></>}
                    courseData={mappedCourses}
                    footerButton
                />

                <div>
                    <div className='py-2 flex items-center justify-between'>
                        <h2 className='text-3xl text-gray-900 mb-2'>Popular <span className='font-bold'>Topics</span></h2>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-6'>
                        {
                            topics.map((topic) => (
                                <p className='flex items-center justify-center p-3.5 lg:px-6 lg:py-4 h-full align-middle border border-contentBorderSecondary text-center rounded-md hover:bg-primary text-sm font-semibold'>{topic}</p>
                            ))
                        }
                    </div>
                </div>

                {/* Explore Categories Section */}
                <ExploreCategories />

                <div className='pt-16 border-t border-[#E4E4E4]'>
                    <div className='py-2 flex items-center justify-between'>
                        <h2 className='text-3xl text-gray-900 mb-2'>All Development <span className='font-bold'>Courses</span></h2>
                        <p className='font-semibold text-[#727272]'>1000 results</p>
                    </div>
                    <div className='grid lg:grid-cols-12 gap-6 pt-6'>
                        <div className='lg:col-span-3'>
                            <div className='bg-[#F9F9F9] rounded-lg border border-contentBorderPrimary'>
                                <div className='p-4'>
                                    <p className='text-black font-semibold text-base'>Filters</p>
                                </div>
                                <div className="">
                                    {faqData.map((faq, index) => (
                                        <div
                                            key={faq.id}
                                            className="overflow-hidden transition-all duration-300"
                                        >
                                            {/* FAQ Question */}
                                            <div
                                                onClick={() => toggleQuestion(index)}
                                                className={`faq_question cursor-pointer border-t border-contentBorderPrimary h-[50px] px-[20px] py-[13px] flex items-center justify-between transition-all duration-300 ${activeQuestion === index
                                                    ? "bg-primary-400 text-black"
                                                    : "bg-transparent text-body-text hover:text-primary-400"
                                                    }`}
                                            >
                                                <div className="faq_question-text">
                                                    <h3 className="text-left font-medium text-sm">
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                                <div className="icon ml-4">
                                                    <span
                                                        className={`w-6 h-6 origin-center inline-flex items-center justify-center transition-transform duration-300 ${activeQuestion === index ? "rotate-180 text-white" : "rotate-0 text-body-text"}`}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M16.25 7.5L10 13.75L3.75 7.5"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    {/* <Icon icon="fluent-chevron-down-12-regular" width="24" height="24" className={`w-6 h-6 transition-transform duration-300 ${activeQuestion === index ? "rotate-180 text-white" : "rotate-0 text-body-text"
                                                    }`} /> */}
                                                </div>
                                            </div>

                                            {/* Answer Container */}
                                            <div
                                                className={`answercont transition-all duration-500 ease-in-out overflow-hidden ${activeQuestion === index ? "max-h-96" : "max-h-0"
                                                    }`}
                                                style={{
                                                    maxHeight: activeQuestion === index ? "1000px" : "0px",
                                                }}
                                            >
                                                <div className="answer px-5 pb-5 text-left">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='lg:col-span-9'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {mappedCourses.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        title={course.title}
                                        rating="4.5"
                                        reviewCount="1,234"
                                        startIn="7 Days"
                                        bookingPercentage={85}
                                        imageUrl={course.imageUrl}
                                        variant="coursePrice"
                                        courseUrl={course.courseUrl}
                                        courseNumber={course.number}
                                        courseId={course.id}
                                        onViewCourse={() => console.log(`View course ${course.id}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </DashboardLayout>
                </>
            )}

        
        </>
    );
}

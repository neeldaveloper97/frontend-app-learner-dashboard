import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import courseImg from '../../assets/jpg/courseImg2.png';
import ibmLogo from '../../assets/jpg/ibm.png';
import msLogo from '../../assets/jpg/ms.png';
import { ChevronLeftIcon } from '../../assets/svg';
import CourseCard from '../../components/CourseCard';
import CourseShowcase from '../../components/CourseShowcase';
import DashboardLayout from '../../containers/Dashboard/DashboardLayout';

export default function ProviderPage() {
    const { id } = useParams();
    const [activeQuestion, setActiveQuestion] = useState(-1);

    const provider = {
        id: id || 'microsoft',
        name: 'Microsoft',
        description:
            'Our goal at Microsoft is to empower every individual and organization on the planet to achieve more. In this next revolution of digital transformation, growth is being driven by technology. Our integrated cloud approach creates an unmatched platform for digital transformation. We address the real-world needs of customers by seamlessly integrating Microsoft 365, Dynamics 365, LinkedIn, GitHub, Microsoft Power Platform, and Azure to unlock business value for every organization—from large enterprises to family-run businesses. The backbone and foundation of this is Azure.',
        logo: msLogo,
        courses: [
            { id: 'c1', title: 'The Complete Full-Stack Web Development Bootcamp', price: '₹399', imageUrl: '/src/assests/jpg/courseImg.jpg' },
            { id: 'c2', title: 'Machine Learning Fundamentals', price: '₹799', imageUrl: '/src/assests/jpg/courseImg.jpg' },
            { id: 'c3', title: 'Advanced React', price: '₹599', imageUrl: '/src/assests/jpg/courseImg.jpg' },
        ],
    };
    const freeCoursesData = [
        {
            id: 9,
            title: "The Complete Full-Stack Web Development Bootcamp",
            rating: "4.4",
            reviewCount: "10,789",
            brandName: ibmLogo
        },
        {
            id: 10,
            title: "Introduction to JavaScript Programming",
            rating: "4.3",
            reviewCount: "15,234",
            brandName: ibmLogo
        },
        {
            id: 11,
            title: "Python for Beginners",
            rating: "4.5",
            reviewCount: "18,567",
            brandName: ibmLogo
        },
        {
            id: 12,
            title: "Web Design Fundamentals",
            rating: "4.2",
            reviewCount: "9,876",
            brandName: ibmLogo
        }
    ];
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

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? -1 : index);
    };

    return (
        <>
        <DashboardLayout>
            <div className='px-4 sm:px-6 py-4 bg-white border-b border-contentBorderPrimary flex lg:items-center gap-3 lg:flex-row flex-col'>
                <Link to="/explore-courses" aria-label="Back to explore" className="inline-flex items-center text-sm text-gray-600 hover:text-primary">
                    <ChevronLeftIcon />
                </Link>
                <p className='text-xl sm:text-2xl font-bold text-gray-900'>Microsoft</p>
            </div>
            <div className="p-4 lg:p-8 space-y-8">
                <div className='w-full h-60 lg:h-100 overflow-hidden rounded-2xl relative'>
                    <span className='absolute block inset-0 size-full bg-black/30'></span>
                    <img src={courseImg} alt="" className='size-full object-cover' />
                </div>
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="w-3xs h-20">
                        <img src={provider.logo} alt={provider.name} className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl font-semibold">{provider.name}</h1>
                        <p className="text-base text-black mt-4">{provider.description}</p>
                    </div>
                </div>
                <div className='pt-8'>
                    <div className='py-4 border-b border-[#E4E4E4]'>
                        <h6 className='font-medium text-3xl'>Certificates + Specializations</h6>
                    </div>
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
                </div>
                <CourseShowcase
                    courseData={freeCoursesData}
                    variant="free"
                    headerButton={false}
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
                <div className="pt-8">
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
                                                    <div className="answer px-5 py-2 text-left">
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
                                    {popularCourses.map((course) => (
                                        <CourseCard
                                            key={course.id}
                                            title={course.title}
                                            rating={course.rating}
                                            reviewCount={course.reviewCount}
                                            startIn={course.startIn}
                                            bookingPercentage={course.bookingPercentage}
                                            imageUrl={course.imageUrl }
                                            variant="coursePrice"
                                            currentPrice={course.currentPrice}
                                            originalPrice={course.originalPrice}
                                            brandName={course.brandName}
                                            courseUrl={course.socialShareUrl}
                                            onViewCourse={() => console.log(`View course ${course.id}`)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </DashboardLayout>
        </>
    );
}

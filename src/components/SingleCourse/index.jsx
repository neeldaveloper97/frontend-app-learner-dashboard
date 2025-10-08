import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import courseImg from '../../assets/jpg/courseImg.jpg';
import msLogo from '../../assets/jpg/ms.png';
import profile from '../../assets/jpg/profile.png';
import { ChevronLeftIcon } from '../../assets/svg';
import CourseOverviewContent from '../../components/CourseOverviewContent';
import ExploreCategories from '../../components/ExploreCategories';
import { Button } from '../../components/ui/Button';
import DashboardLayout from '../../containers/Dashboard/DashboardLayout';


export default function SingleCourse() {
    const { id } = useParams();
    const [course] = useState({
        id: id || '1',
        title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]',
        shortDescription: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.',
        rating: '4.6',
        reviewCount: '6,432',
        price: '₹399',
        originalPrice: '₹3,100',
        imageUrl: courseImg,
        instructor: {
            name: 'John Doe',
            role: 'Senior ML Engineer',
            rating: '4.8',
            totalLearners: 12500,
            courseCount: 12,
            instructorImage: courseImg,
        },
        whatYouWillLearn: [
            'Build projects as you learn concepts to get a taste of building applications on a small scale',
            'Learn everything you need to know to work in interface design, motion graphics, and editorial design',
        ],
        skills: ['Python', 'Pandas', 'Scikit-Learn', 'Deep Learning', 'Model Deployment'],
        curriculum: [
            { title: 'Intro & Setup', lessons: 4 },
            { title: 'Data Processing', lessons: 6 },
            { title: 'Supervised Learning', lessons: 10 },
            { title: 'Unsupervised Learning', lessons: 6 },
            { title: 'Deployment', lessons: 4 },
        ],
    });
    const [enrolling, setEnrolling] = useState(false);

    const renderStarIcons = (rating, size = 'w-4 h-4') => {
        const val = parseFloat(rating) || 0;
        const rounded = Math.round(val * 2) / 2;
        const full = Math.floor(rounded);
        const hasHalf = rounded - full === 0.5;
        const uid = Math.random().toString(36).slice(2, 8);

        return [...Array(5)].map((_, i) => {
            const isFull = i < full;
            const isHalf = i === full && hasHalf;

            if (isFull) {
                return (
                    <svg key={i} className={`${size} text-yellow-400`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }

            if (isHalf) {
                const gradId = `grad-${uid}-${i}`;
                return (
                    <svg key={i} className={`${size}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id={gradId} x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop offset="50%" stopColor="#FBBF24" />
                                <stop offset="50%" stopColor="#FFFFFF29" />
                            </linearGradient>
                        </defs>
                        <path fill={`url(#${gradId})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }

            return (
                <svg key={i} className={`${size} text-gray-300`} viewBox="0 0 20 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        });
    };
    const handleEnroll = async () => {
        if (!course) return;
        setEnrolling(true);
        try {
            await courseService.enrollCourse(course.id).catch(() => null);
            // simple feedback — in a real app use toasts
            alert('Enrolled successfully (mock)');
        } catch (err) {
            alert('Enrollment failed');
        } finally {
            setEnrolling(false);
        }
    };

    return (
        <>
        <DashboardLayout>
            <div className='px-4 sm:px-6 py-4 bg-white border-b border-contentBorderPrimary flex lg:items-center gap-3 lg:flex-row flex-col'>
                <Link to="/explore-courses/" aria-label="Back to explore" className="inline-flex items-center text-sm text-gray-600 hover:text-primary">
                    <ChevronLeftIcon />
                </Link>

                <nav className="ml-3" aria-label="Breadcrumb">
                    {(() => {
                        const breadcrumbs = [
                            { label: 'Machine Learning', to: '/courses?category=machine-learning' },
                            { label: 'Data Science', to: '/courses?category=data-science' },
                            { label: 'Development', to: '/courses?category=development' },
                        ];
                        return (
                            <ol className="flex items-center text-base text-gray-900 mb-0">
                                {breadcrumbs.map((crumb, idx) => {
                                    const isLast = idx === breadcrumbs.length - 1;
                                    return (
                                        <li key={crumb.label} className="inline-flex items-center">
                                            {isLast ? (
                                                <span className="font-medium text-contentDarkSecondary" aria-current="page">{crumb.label}</span>
                                            ) : (
                                                <Link to={crumb.to} className="font-medium text-gray-900 hover:underline">{crumb.label}</Link>
                                            )}

                                            {!isLast && (
                                                <span className="mx-1.5 text-gray-300" aria-hidden>
                                                    /
                                                </span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ol>
                        );
                    })()}
                </nav>
            </div>
            <div className="p-4 lg:p-8 space-y-8">
                <div className="">
                    <div className="lg:col-span-8 space-y-6">
                        {/* BANNER */}
                        <div className="flex items-start gap-6 bg-darkColor p-3.5 lg:p-10 rounded-2xl justify-between xl:flex-row flex-col">
                            <div className='max-w-[730px] w-full'>
                                <h1 className="text-4xl font-semibold text-white">{course.title}</h1>
                                <p className="text-lg font-normal text-white mt-6">{course.shortDescription}</p>
                                <div className="mt-3 flex flex-col gap-2">
                                    <p className="flex items-center text-sm gap-2">
                                        <span className='text-contentYellow500 font-semibold text-sm'>{course.rating}</span>
                                        <span className='flex'>
                                            {renderStarIcons(course.rating, 'w-3.5 h-3.5')}
                                        </span>
                                        <span className="text-sm text-contentBlue200 underline">({course.reviewCount} ratings)</span>
                                        <span className='text-white'>(10,789)</span>
                                    </p>
                                    <p className='text-white text-xs'>
                                        <span>Created by: </span>
                                        <Link to="/providers/google" className="text-sm text-contentBlue200 underline">GOOGLE</Link>
                                    </p>
                                    <p className='text-white text-xs leading-5'>Last updated 10/2023  • English  • English [Auto]</p>
                                    <p className='text-white text-xs leading-5'>
                                        <span>Course: </span>
                                        <span>Beginner level</span>
                                    </p>
                                </div>
                            </div>
                            <div className='xl:max-w-[376px] border border-contentBorderPrimary w-full bg-white p-4 pb-6 rounded-2xl relative z-50 -mb-[500px] xl:-mb-[300px] shadow-[0px_5px_16px_0px_#00000014]' >
                                <div className="h-56 relative rounded-2xl overflow-hidden shadow-sm">
                                    <img src={course.imageUrl} alt="course" className="w-full h-full object-cover" />
                                    <span className='absolute size-full bg-black/30 inset-0 z-50'></span>
                                    <span className='size-24 absolute bg-opacity-30 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition z-[999]' style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}>
                                        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.6">
                                                <path d="M48.598 85.0467C68.728 85.0467 85.0466 68.7281 85.0466 48.5981C85.0466 28.4681 68.728 12.1495 48.598 12.1495C28.468 12.1495 12.1494 28.4681 12.1494 48.5981C12.1494 68.7281 28.468 85.0467 48.598 85.0467Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M60.7477 48.5981L42.5234 36.4486V60.7477L60.7477 48.5981Z" fill="white" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div className='pt-6'>
                                    <p className='text-4xl font-semibold text-black'>₹399 <span className='text-[#D8D8D8] text-xl line-through'>₹3,109</span></p>
                                    <p className='pt-2'>Start from Today!</p>
                                    <div className='pt-4'>
                                        <p className='text-lg font-semibold text-black'>Flexible schedule</p>
                                        <ul className='list-disc list-inside text-sm text-black mt-2'>
                                            <li>Learn at your own pace anytime</li>
                                            <li>Cancel anytime</li>
                                        </ul>
                                    </div>
                                    <div className='pt-4'>
                                        <Button className="w-full">Add to Cart</Button>
                                        <p className='flex flex-col text-xs text-black mt-2 gap-1 text-center'>
                                            <span>30-Day Money-Back Guarantee</span>
                                            <span>Full Lifetime Access</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* WHAT YOULL LEARN */}
                        <div className='grid grid-cols-1 xl:grid-cols-12 gap-6 mt-[500px] xl:mt-0'>
                            <div className="xl:col-span-8">
                                <h2 className="text-2xl font-semibold text-black">What you'll learn</h2>
                                <p className='pt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <ul className="list-disc list-inside text-sm text-black pt-6 grid md:grid-cols-2 gap-6">
                                    {course.whatYouWillLearn.map((item, idx) => (
                                        <li key={idx} className="text-base text-black">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="xl:col-span-8">
                                <h2 className="text-2xl font-semibold">Skills</h2>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {course.skills.map((s, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-md text-sm bg-[#F2F2F2]">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="xl:col-span-8 pt-4">
                                <h2 className="text-2xl font-semibold">There are 4 modules in this course</h2>
                                <p className='pt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 xl:grid-cols-12 gap-6'>
                            <div className='xl:col-span-8'>
                                <CourseOverviewContent />
                            </div>
                            <div className='xl:col-span-4'>
                                <div className='xl:max-w-[376px] border border-contentBorderPrimary w-full bg-white p-4 pb-6 rounded-2xl relative z-50 shadow-[0px_5px_16px_0px_#00000014]'>
                                    <div>
                                        <p className='text-lg font-semibold'>Instructor</p>
                                        <div className="flex items-center gap-2 pt-1">
                                            <p className="flex items-center gap-1 px-1 py-0.5 bg-contentYellow50 rounded-sm w-fit">
                                                <span className="font-medium text-[10px]">4.4</span>
                                                <span className="flex text-contentYellow500">
                                                    <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </span>
                                            </p>
                                            <span className="text-[10px] text-[#727272]">Instructor Rating</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 pt-4 pb-4 border-b border-contentBorderPrimary'>
                                        <div className='size-16 rounded-full overflow-hidden'>
                                            <img src={msLogo} alt="" className='size-full object-cover' />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-black'>Microsoft</p>
                                            <p className='font-normal text-xs'>7 Courses</p>
                                        </div>
                                    </div>
                                    <div className='pt-4'>
                                        <p className='text-lg font-semibold'>Offered by</p>
                                        <div className='flex items-center gap-3 pt-4 pb-4'>
                                            <div className='w-[100px] h-14 rounded-md border border-contentBorderPrimary overflow-hidden'>
                                                <img src={msLogo} alt="" className='size-full object-cover' />
                                            </div>
                                            <div>
                                                <p className='font-semibold text-base text-black'>Microsoft</p>
                                                <a href='#' className='font-normal text-xs text-[#1976D2]'>Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ExploreCategories heading={<><span className='font-semibold'>People also buy</span></>} />
                        <div>
                            <p className='text-2xl font-semibold pb-6'>Testimonials</p>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                <div className='p-6 border border-contentBorderPrimary w-full bg-white pb-6 rounded-2xl relative z-50'
                                    style={{
                                        boxShadow: "0px 5px 16px 0px #00000014"
                                    }}>
                                    <p className='pb-4 border-b border-contentBorderPrimary'>Simplify consent management with our digital solutions, which allow you to easily obtain, track, and manage CMS consent electronically. This eliminates the need for paper forms and manual tracking, reducing the risk of lost or incomplete consent records.</p>
                                    <div className='flex items-center gap-3 pt-4'>
                                        <div className='size-12 rounded-full overflow-hidden'>
                                            <img src={profile} className='size-full object-cover' alt="" />
                                        </div>
                                        <div>
                                            <p>Micheal Johson</p>
                                            <p>CEO - Async</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-6 border border-contentBorderPrimary w-full bg-white pb-6 rounded-2xl relative z-50'
                                    style={{
                                        boxShadow: "0px 5px 16px 0px #00000014"
                                    }}>
                                    <p className='pb-4 border-b border-contentBorderPrimary'>Simplify consent management with our digital solutions, which allow you to easily obtain, track, and manage CMS consent electronically. This eliminates the need for paper forms and manual tracking, reducing the risk of lost or incomplete consent records.</p>
                                    <div className='flex items-center gap-3 pt-4'>
                                        <div className='size-12 rounded-full overflow-hidden'>
                                            <img src={profile} className='size-full object-cover' alt="" />
                                        </div>
                                        <div>
                                            <p>Micheal Johson</p>
                                            <p>CEO - Async</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-6 border border-contentBorderPrimary w-full bg-white pb-6 rounded-2xl relative z-50'
                                    style={{ boxShadow: "0px 5px 16px 0px #00000014" }}>
                                    <p className='pb-4 border-b border-contentBorderPrimary'>Simplify consent management with our digital solutions, which allow you to easily obtain, track, and manage CMS consent electronically. This eliminates the need for paper forms and manual tracking, reducing the risk of lost or incomplete consent records.</p>
                                    <div className='flex items-center gap-3 pt-4'>
                                        <div className='size-12 rounded-full overflow-hidden'>
                                            <img src={profile} className='size-full object-cover' alt="" />
                                        </div>
                                        <div>
                                            <p>Micheal Johson</p>
                                            <p>CEO - Async</p>
                                        </div>
                                    </div>
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

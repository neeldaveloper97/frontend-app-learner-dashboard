import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import courseImg from '../../assets/jpg/courseImg.jpg';
import profileImg from '../../assets/jpg/profile.png';
import { ChevronLeftIcon } from '../../assets/svg';
import CourseShowcase from '../../components/CourseShowcase';
import CourseSlider from '../../containers/CourseSlider';
import { Button } from '../../components/ui/Button';
import DashboardLayout from '../../containers/Dashboard/DashboardLayout';

export default function InstructorPage() {
    const { id } = useParams();

    // static instructor data for now
    const instructor = {
        id: id || 'instructor-1',
        name: 'Laurence Lii',
        title: 'Instructor',
        headline: 'Laurence is a Data Scientist and ML Engineer with 10+ years of experience. He builds practical, project-based courses to help learners ship real models.',
        about: `Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.`,
        image: profileImg,
        stats: {
            rating: '4.4',
            learners: '12,345',
            courses: 8,
        },
    };

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const courses = [
        { id: 'c1', title: 'The Complete Full-Stack Web Development Bootcamp', rating: '4.4', reviewCount: '10,789', price: '₹399', imageUrl: courseImg },
        { id: 'c2', title: 'Machine Learning Fundamentals', rating: '4.7', reviewCount: '6,789', price: '₹999', imageUrl: courseImg },
        { id: 'c3', title: 'Python for Data Science', rating: '4.5', reviewCount: '12,156', price: '₹799', imageUrl: courseImg },
        { id: 'c4', title: 'Advanced React', rating: '4.6', reviewCount: '8,432', price: '₹599', imageUrl: courseImg },
        { id: 'c1', title: 'The Complete Full-Stack Web Development Bootcamp', rating: '4.4', reviewCount: '10,789', price: '₹399', imageUrl: courseImg },
        { id: 'c2', title: 'Machine Learning Fundamentals', rating: '4.7', reviewCount: '6,789', price: '₹999', imageUrl: courseImg },
        { id: 'c3', title: 'Python for Data Science', rating: '4.5', reviewCount: '12,156', price: '₹799', imageUrl: courseImg },
        { id: 'c4', title: 'Advanced React', rating: '4.6', reviewCount: '8,432', price: '₹599', imageUrl: courseImg },
        { id: 'c1', title: 'The Complete Full-Stack Web Development Bootcamp', rating: '4.4', reviewCount: '10,789', price: '₹399', imageUrl: courseImg },
        { id: 'c2', title: 'Machine Learning Fundamentals', rating: '4.7', reviewCount: '6,789', price: '₹999', imageUrl: courseImg },
        { id: 'c3', title: 'Python for Data Science', rating: '4.5', reviewCount: '12,156', price: '₹799', imageUrl: courseImg },
        { id: 'c4', title: 'Advanced React', rating: '4.6', reviewCount: '8,432', price: '₹599', imageUrl: courseImg },
        { id: 'c1', title: 'The Complete Full-Stack Web Development Bootcamp', rating: '4.4', reviewCount: '10,789', price: '₹399', imageUrl: courseImg },
        { id: 'c2', title: 'Machine Learning Fundamentals', rating: '4.7', reviewCount: '6,789', price: '₹999', imageUrl: courseImg },
        { id: 'c3', title: 'Python for Data Science', rating: '4.5', reviewCount: '12,156', price: '₹799', imageUrl: courseImg },
        { id: 'c4', title: 'Advanced React', rating: '4.6', reviewCount: '8,432', price: '₹599', imageUrl: courseImg },
    ];

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

    const OPTIONS = { slidesToScroll: 'auto' }
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
        <DashboardLayout>
            <div className='px-4 sm:px-6 py-4 bg-white border-b border-contentBorderPrimary flex lg:items-center gap-3 lg:flex-row flex-col'>
                <Link to="/explore-courses" aria-label="Back to explore" className="inline-flex items-center text-sm text-gray-600 hover:text-primary">
                    <ChevronLeftIcon />
                </Link>
                <p className='font-medium text-gray-900'>Laurence Lii</p>
            </div>
            <div className="p-6 lg:p-8 space-y-8">
                <div className="flex items-start gap-6 bg-darkColor p-3.5 lg:p-10 rounded-2xl justify-between xl:flex-row flex-col">
                    <div className='max-w-[730px] w-full'>
                        <p className='text-primary text-2xl font-semibold pb-6'>Instructor</p>
                        <h1 className="text-4xl font-semibold text-white pb-6">{instructor.name}</h1>
                        <p className="text-lg font-normal text-white pb-4">{instructor.about}</p>
                        <div className="flex flex-col gap-2">
                            <p className="flex items-center text-sm gap-2">
                                <span className='text-contentYellow500 font-semibold text-sm'>{instructor.stats.rating}</span>
                                <span className='flex'>
                                    {renderStarIcons(instructor.stats.rating, 'w-3.5 h-3.5')}
                                </span>
                                <span className="text-sm text-contentBlue200 underline">({instructor.stats.learners} ratings)</span>
                                <span className='text-white'>(10,789)</span>
                            </p>
                            <p className='text-white text-xs leading-5'>Last updated 10/2023  • English  • English [Auto]</p>
                        </div>
                    </div>
                    <div className='xl:max-w-[376px] border border-contentBorderPrimary w-full bg-white p-4 pb-6 rounded-2xl relative z-50 -mb-[500px] xl:-mb-[300px] shadow-[0px_5px_16px_0px_#00000014]' >
                        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-sm">
                            <img src={instructor.image} alt="course" className="w-full h-full object-cover" />
                        </div>
                        <div className='pt-6'>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-[500px] xl:mt-0">
                    <div className="xl:col-span-8">
                        <h4 className="text-2xl font-semibold">About me</h4>
                        <div className='pt-4 space-y-4'>
                            <p>I'm here to help you learn, achieve your dreams, come join me on this amazing adventure todayGoogle Developers Expert - GSuite</p>
                            <p>Providing Web development courses and digital marketing strategy courses since 2002.</p>
                            <p>Innovative technology expert with a wide range of real world experience. Providing Smart digital solutions online for both small and enterprise level businesses.</p>
                            <p>"I have a passion for anything digital technology related, enjoy programming and the challenge of developing successful digital experiences. As an experienced developer, I created my first computer applications in 1990, and my first website in 1998.  I enjoy sharing my knowledge with others and want to help you share in the wonderful opportunities that the internet provides."</p>
                            <p>"My courses are designed to help you achieve your goals, learn and update skills" <br /><strong>Background:</strong> An experienced web application developer, having worked on multiple enterprise level applications, hundreds of websites, business solutions and many unique and innovative web applications.  Web application development areas of expertise include HTML, CSS, JavaScript, JQuery, Bootstrap, PHP and MySQL. Anything to do with web creation and digital experience. Passionate about everything to do with web application development, programming to online marketing with a strong focus on social media and SEO.</p>
                        </div>
                    </div>
                </div>
                <CourseSlider slides={SLIDES} options={OPTIONS} />
                <CourseShowcase heading={<>My all <span className='font-semibold'>Courses ({courses.length})</span></>} variant="free" courseData={courses} />
            </div>
            </DashboardLayout>
        </>
    );
}

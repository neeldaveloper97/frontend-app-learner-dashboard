import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import InstructorCard from "../../containers/InstructorCard/index.jsx";

import "swiper/css";
import "swiper/css/navigation";
import { NextButton, PrevButton, usePrevNextButtons } from "../ui/EmblaCarouselArrowButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";

// Sample instructor data - you can replace this with your actual data
const INSTRUCTORS_DATA = [
    {
        id: 1,
        instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Lukkie Numoris",
        role: "Web Developer, Designer, and Teacher",
        rating: 4.4,
        totalLearners: 2177128,
        courseCount: 7,
        instructorUrl:`instructor-details/1`
    },
    {
        id: 2,
        instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Marcus Johnson",
        role: "Full-Stack Developer and Tech Educator",
        rating: 4.6,
        totalLearners: 1854321,
        courseCount: 12,
        instructorUrl:`instructor-details/2`
    },
    {
        id: 3,
        instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Sarah Chen",
        role: "Data Scientist and Machine Learning Expert",
        rating: 4.8,
        totalLearners: 3245678,
        courseCount: 15,
        instructorUrl:`instructor-details/3`
    },
    {
        id: 4,
        instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "David Rodriguez",
        role: "UI/UX Designer and Frontend Specialist",
        rating: 4.5,
        totalLearners: 1987654,
        courseCount: 9,
        instructorUrl:`instructor-details/4`
    },
    {
        id: 5,
        instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Emily Watson",
        role: "Python Developer and AI Researcher",
        rating: 4.7,
        totalLearners: 2567890,
        courseCount: 11,
        instructorUrl:`instructor-details/5`
    },
    {
        id: 6,
        instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Alex Thompson",
        role: "DevOps Engineer and Cloud Architect",
        rating: 4.3,
        totalLearners: 1423456,
        courseCount: 8,
        instructorUrl:`instructor-details/6`
    },
    {
        id: 7,
        instructorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Jessica Park",
        role: "Mobile App Developer and iOS Specialist",
        rating: 4.6,
        totalLearners: 1876543,
        courseCount: 13,
        instructorUrl:`instructor-details/7`
    },
    {
        id: 8,
        instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format",
        instructorName: "Michael Chen",
        role: "Blockchain Developer and Crypto Expert",
        rating: 4.7,
        totalLearners: 2134567,
        courseCount: 10,
        instructorUrl:`instructor-details/8`
    }
];

const PopularInstructors = ({ sidebarCollapsed }) => {
    const [containerWidth, setContainerWidth] = useState('100%');
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

        const OPTIONS = { slidesToScroll: 'auto' }
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

        const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    useEffect(() => {
        const updateWidth = () => {
            const isMobile = window.innerWidth < 640; // Tailwind "sm" breakpoint
            if (isMobile) {
                setContainerWidth("100vw");
            } else {
                const sidebarWidth = sidebarCollapsed ? 80 : 250;
                const padding = 64; // 32px on each side (p-8 in parent)
                const availableWidth = `calc(100vw - ${sidebarWidth + padding}px)`;
                setContainerWidth(availableWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [sidebarCollapsed]);

    const handleViewProfile = (instructorId) => {
        console.log(`View profile for instructor ${instructorId}`);
        // Add your navigation logic here
    };

        const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>

        <section className="embla">
            <div className="embla__controls !flex lg:justify-between flex-col lg:flex-row">
                <div className='flex gap-4 items-center'>
                   <h2 className='text-2xl text-gray-900'>Learn with Popular  <span className='font-semibold'>Instructors</span></h2>
                </div>
                <div className="embla__buttons !flex lg:grid">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
            <div className="embla__viewport pt-6" ref={emblaRef}>
                <div className="embla__container">
                       {INSTRUCTORS_DATA.map((instructor, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                 <div className="h-full"> {/* Fixed width for consistent card sizing */}
                                <InstructorCard
                                    instructorImage={instructor.instructorImage}
                                    instructorName={instructor.instructorName}
                                    role={instructor.role}
                                    rating={instructor.rating}
                                    totalLearners={instructor.totalLearners}
                                    courseCount={instructor.courseCount}
                                    onViewProfile={() => handleViewProfile(instructor.id)}
                                    instructorUrl={instructor.instructorUrl}
                                />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default PopularInstructors;
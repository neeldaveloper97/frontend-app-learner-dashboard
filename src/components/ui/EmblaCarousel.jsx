import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const EmblaCarousel = ({ slides, options, heading }) => {
    return (
        <div className="w-full overflow-hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={false}
                grabCursor={true}
                touchEventsTarget="container"
                preventClicks={false}
                preventClicksPropagation={false}
                autoHeight={true} // 👈 keeps swiper container sized correctly
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                {...options}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ paddingBottom: '20px' }}
            >
                {slides?.map((instructor, index) => (
                    <SwiperSlide
                        key={instructor.id || index}
                        className="h-auto" // 👈 ensures slide wraps content height
                    >
                        <div className="rounded-2xl overflow-hidden relative shadow-[0px_5px_16px_0px_#00000014] h-full flex flex-col">
                            {/* Image */}
                            <div className="h-64 flex-shrink-0">
                                <img
                                    src={instructor.instructorImage}
                                    alt={instructor.instructorName}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-6 px-4 flex-1"> {/* 👈 use flex-1, not flex-grow */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {instructor.instructorName}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{instructor.role}</p>
                                <p className="text-gray-900 font-medium mb-2">
                                    {instructor.totalLearners?.toLocaleString()} Total learners
                                </p>
                                <p className="text-gray-900 font-medium mb-4">
                                    {instructor.courseCount} Courses
                                </p>
                            </div>

                            {/* Footer button */}
                            <button
                                className="text-contentDarkInformative hover:text-contentDarkInformative border-t border-contentBorderPrimary transition-colors font-medium text-sm flex items-center justify-center gap-1 p-4 w-full"
                                onClick={() =>
                                    console.log('View course for:', instructor.instructorName)
                                }
                            >
                                View Course
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default EmblaCarousel

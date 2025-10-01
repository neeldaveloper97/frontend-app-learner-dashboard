import { Button } from "./ui/Button";

export default function CourseCard({
    title,
    rating,
    reviewCount,
    startIn,
    bookingPercentage,
    imageUrl,
    onViewCourse,
    variant = "upcoming", // "upcoming", "pricing", "free", "coursePrice"
    currentPrice,
    originalPrice,
    brandLogo,
    brandName,
    courseUrl,
    courseNumber,
    courseProviderName,
    courseHomeURL
}) {
   
    return (
        <div className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col shadow-[0px_5px_16px_0px_#00000014]">
            {/* Image Section */}
            <div className="bg-black relative">
                {/* Placeholder for course image - you can replace with actual image */}
                <div className="h-64 relative">
                    <img src={imageUrl} className="size-full object-cover" alt="CourseMain Bg" />
                    <span className="block absolute size-full inset-0 bg-gradient-to-b from-black/0 to-black/80"></span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1">
                {/* Brand Logo for Free Courses */}
                {variant === "free" && brandName && (
                    <div className="mb-3">
                        <img src={brandName} alt="" />
                    </div>
                )}

                {/* Course Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {title || "The Complete Full-Stack Web Development Bootcamp."}
                <p className="text-sm text-gray-600 mb-3">{courseNumber || "ES501"}</p>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{courseProviderName|| "OXford"}</h4>
                </h3>
                {/* Course URL */}

                {/* Rating */}
                <div className="flex items-center mb-4">
                    <span className="text-orange-500 font-semibold mr-2">{rating || "4.4"}</span>
                    <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">({reviewCount || "10,789"})</span>
                </div>

                {/* Variant-specific content */}
                {variant === "upcoming" && (
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Start in</p>
                            <p className="text-lg font-bold text-gray-900">{startIn || "7 Days"}</p>
                        </div>

                        {/* Circular Progress */}
                        <div className="flex items-center">
                            <div className="relative size-16">
                                <svg className="size-16 transform -rotate-90" viewBox="0 0 36 36">
                                    {/* Background circle */}
                                    <path
                                        className="text-gray-200"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    {/* Progress circle */}
                                    <path
                                        className="text-primary"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        fill="none"
                                        strokeDasharray={`${bookingPercentage || 82}, 100`}
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-sm font-bold text-gray-900">{bookingPercentage || 82}%</span>
                                    <span className="text-[10px] text-gray-500">Booked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {variant === "pricing" || variant === "coursePrice" && (
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">{currentPrice || "₹399"}</span>
                            {originalPrice && (
                                <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
                            )}
                        </div>
                    </div>
                )}

            </div>
            {/* Action Button */}
            {variant === "free" || variant === "coursePrice" ? (
                <button
                    onClick={onViewCourse}
                    className="text-contentDarkInformative hover:text-contentDarkInformative border-t border-contentBorderPrimary transition-colors font-medium text-sm flex items-center justify-center gap-1 p-4"
                    style={{
                        padding: "20px 16px"
                    }}
                >
                    Begin Course
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
            ) : (
                <a href={courseHomeURL} className="flex items-center justify-center w-full bg-primary rounded-t-none text-black hover:bg-cyan-500 transition-colors font-medium text-sm" style={{
                    padding: "20px 16px"
                }}>
                    Begin Course
                </a>
            )}
        </div>
    );
}

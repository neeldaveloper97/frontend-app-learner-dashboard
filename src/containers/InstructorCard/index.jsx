const InstructorCard = ({
    instructorImage,
    instructorName,
    role,
    rating,
    totalLearners,
    courseCount,
    onViewProfile,
    instructorUrl
}) => {
    return (
        <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden flex flex-col h-full">
            {/* Instructor Image */}
            <div className="h-[260px]">
                <img
                    src={instructorImage}
                    alt={instructorName}
                    className="size-full object-cover"
                />
            </div>

            <div className="py-5 px-4 flex-1">
                <div>
                    <h3 className="text-lg leading-7 font-bold text-gray-900">
                        {instructorName}
                    </h3>
                    <p className="text-contentDarkSecondary text-sm">
                        {role}
                    </p>
                </div>

                <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                        <p className="flex items-center gap-1 px-1 py-0.5 bg-contentYellow50 rounded-sm">
                            <span className="font-medium text-[10px]">{rating}</span>
                            <span className="flex text-contentYellow500">
                                <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                        </p>
                        <span className="text-[10px] text-[#727272]">Instructor Rating</span>
                    </div>

                    <div className="text-black">
                        <p className="font-medium mb-1 text-[10px]">
                            <span className="font-semibold">{totalLearners.toLocaleString()}</span> Total learners
                        </p>
                        <p className="font-medium text-[10px]">
                            <span className="font-semibold">{courseCount}</span> Courses
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <a
                href={instructorUrl}
                
                className="text-contentDarkInformative hover:text-blue-700 transition-colors font-medium text-sm flex items-center justify-center py-4 w-full border-t border-contentBorderPrimary"
            >
                View Profile
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
    );
};

export default InstructorCard;
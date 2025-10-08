import React from 'react';

const ExploreCategoryCard = ({
    title,
    brandName,
    description,
    isHighlighted = false,
    onExplore,
    certificateImage
}) => {
    return (
        <div className="relative rounded-2xl transition-all duration-300 hover:shadow-lg h-fit bg-[#F9F9F933]">
            {isHighlighted && (
                <div className='rounded-2xl absolute inset-0 mask-exclude' style={{
                    padding: '4px 1px 1px 1px',
                    mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'exclude',
                    background: 'linear-gradient(45deg, #14EF86, #15EDE7)'
                }}></div>
            )}

            <div
                className={`py-4 px-4 rounded-2xl ${isHighlighted ? 'bg-transparent' : 'border border-[#00000029]'}`}
                style={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
                </h3>
                <div className="flex items-center mb-4 h-[140px]">
                    <img src={certificateImage} className="size-full object-cover" alt="" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>
                <button
                     onClick={() => window.location.href = `${window.location.href}${onExplore}`}
                    className="text-contentDarkInformative hover:text-blue-700 transition-colors font-medium text-sm flex items-center gap-1"
                >
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ExploreCategoryCard;
import ExploreCategoryCard from './ExploreCategoryCard';
import msLogo from '../../src/assets/jpg/ms.png';

const ExploreCategories = () => {
    const categories = [
        {
            id: 1,
            title: "Data Science",
            brandName: "Microsoft",
            description: "Our goal at Microsoft is to empower every individual and organization on the planet to achieve more. Through our comprehensive data science programs, we help learners master the tools and techniques needed to extract insights from data.",
            isHighlighted: true,
            providerUrl:"provider-details/1"
        },
        {
            id: 2,
            title: "Web Development",
            brandName: "Microsoft",
            description: "Build modern web applications with our comprehensive web development curriculum. Learn the latest technologies and frameworks to create responsive, interactive websites.",
            isHighlighted: false,
            providerUrl:"provider-details/2"
        },
        {
            id: 3,
            title: "Cloud Computing",
            brandName: "Microsoft",
            description: "Master cloud technologies and services. Learn to deploy, manage, and scale applications in the cloud with industry-leading platforms and tools.",
            isHighlighted: false,
            providerUrl:"provider-details/3"
        },
        {
            id: 4,
            title: "AI & Machine Learning",
            brandName: "Microsoft",
            description: "Dive into artificial intelligence and machine learning. Explore cutting-edge algorithms, neural networks, and AI applications that are transforming industries.",
            isHighlighted: false,
            providerUrl:"/provider-details/4"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Section Header */}
            <div className="py-2 flex items-center justify-between">
                <h2 className="text-3xl text-gray-900 mb-2">Most Popular <span className='font-bold'>Certificates</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <ExploreCategoryCard
                        key={category.id}
                        title={category.title}
                        brandName={category.brandName}
                        description={category.description}
                        isHighlighted={category.isHighlighted}
                        onExplore={category.providerUrl}
                        certificateImage={msLogo}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreCategories;

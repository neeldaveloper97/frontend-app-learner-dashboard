import { useState } from "react";
import { BookIcon, ChevronDownIcon, VideoIcon } from "../../assets/svg";

const CourseOverviewContent = () => {
    const [activeModule, setActiveModule] = useState(-1);

    const courseModules = [
        {
            id: 1,
            title: "Course Overview",
            moduleNumber: "Module 1",
            duration: "33 minutes to complete",
            description: "Welcome! In this first module I will summarize the assignments and expectations of this course.",
            included: {
                videos: 1,
                readings: 4
            },
            hasAboutContent: true
        },
        {
            id: 2,
            title: "Week 1: Fundamentals",
            moduleNumber: "Module 2",
            duration: "3 hours to complete",
            description: "Welcome! In this first module I will summarize the assignments and expectations of this course.",
            included: {
                videos: 1,
                readings: 4
            },
            hasAboutContent: true
        },
        {
            id: 3,
            title: "Week 2: Fundamentals",
            moduleNumber: "Module 2",
            duration: "3 hours to complete",
            description: "",
            included: null,
            hasAboutContent: false
        },
        {
            id: 4,
            title: "Week 3: Fundamentals",
            moduleNumber: "Module 2",
            duration: "3 hours to complete",
            description: "",
            included: null,
            hasAboutContent: false
        }
    ];

    const toggleModule = (index) => {
        setActiveModule(activeModule === index ? -1 : index);
    };

    return (
        <>
            <div className="w-full border border-contentBorderPrimary rounded-lg divide-y divide-contentBorderPrimary overflow-hidden">
                {/* {faqData.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="overflow-hidden transition-all duration-300"
                    >
                        <div
                            onClick={() => toggleQuestion(index)}
                            className={`faq_question rounded-full cursor-pointer h-[50px] p-4 flex items-center justify-between transition-all duration-300 ${activeQuestion === index
                                ? "bg-primary-400"
                                : "bg-transparent text-body-text hover:text-primary-400"
                                }`}
                        >
                            <div className="faq_question-text">
                                <h3 className="text-left lg:text-base text-sm lg:leading-7 leading-6">
                                    {faq.question}
                                </h3>
                            </div>
                            <div className="icon ml-4">
                                <span className="block transition-all" style={{ transform: activeQuestion === index ? "180deg" : "0deg" }}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        </div>

                        <div
                            className={`answercont transition-all duration-500 ease-in-out overflow-hidden ${activeQuestion === index ? "max-h-96" : "max-h-0"
                                }`}
                            style={{
                                maxHeight: activeQuestion === index ? "1000px" : "0px",
                            }}
                        >
                            <div className="answer px-5 pt-5 text-left">
                                <p className="lg:text-base text-sm lg:leading-7 leading-6 text-body-text">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
                {courseModules.map((module, index) => (
                    <div key={module.id} className="overflow-hidden transition-all duration-300">
                        <div
                            onClick={() => toggleModule(index)}
                            className={`cursor-pointer p-5 flex items-start justify-between transition-all duration-300 ${activeModule === index ? "bg-[#F9F9F9]" : ""}`}
                        >
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-semibold text-base">{module.title}</h3>
                                    {index === 0 && (
                                        <button className="text-blue-400 text-sm flex items-center gap-1 hover:underline">
                                            Module details
                                            <ChevronDownIcon />
                                        </button>
                                    )}
                                    {index !== 0 && (
                                        <ChevronDownIcon />
                                    )}
                                </div>
                                <p className="text-[#727272] text-sm">
                                    {module.moduleNumber} • {module.duration}
                                </p>
                            </div>
                        </div>

                        {/* Module Content */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${activeModule === index ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            {module.description && (
                                <div className={`px-5 pb-4 transition-all duration-500 ${activeModule === index ? "bg-[#F9F9F9]" : ""
                                    }`}>
                                    <p className="text-base leading-relaxed mb-4">
                                        {module.description}
                                    </p>

                                    {module.included && (
                                        <>
                                            <h4 className="font-semibold text-sm mb-3">What's included</h4>
                                            <div className="flex gap-6 mb-3">
                                                <div className="flex items-center gap-2 text-black text-sm">
                                                    <span className="p-1.5 bg-[#F2F2F2] rounded">
                                                        <VideoIcon />
                                                    </span>
                                                    <span>{module.included.videos} Video</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-black text-sm">
                                                    <span className="p-1.5 bg-[#F2F2F2] rounded">
                                                        <BookIcon />
                                                    </span>
                                                    <span>{module.included.readings} readings</span>
                                                </div>
                                            </div>
                                            {module.hasAboutContent && (
                                                <button className="text-blue-400 text-sm hover:underline flex items-center gap-1">
                                                    <ChevronDownIcon />
                                                    Show about module content
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CourseOverviewContent
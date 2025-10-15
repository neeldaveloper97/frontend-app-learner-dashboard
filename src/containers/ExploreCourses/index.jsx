import { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useCourseDiscovery } from "../../hooks/api";
import CourseShowcase from "../../components/CourseShowcase";
import { Button } from "../../components/ui/Button";
import ExploreCategories from "../../components/ExploreCategories";

import DashboardLayout from "../Dashboard/DashboardLayout";
import noCourseImg from "../../assets/jpg/no_course_image.png";

export default function ExploreCourses() {
  const [activeTab, setActiveTab] = useState("roles");
  const [activeSubTab, setActiveSubTab] = useState("development");
  const location = useLocation();
  const isChildRoute =
    location.pathname.includes("/course-details/") ||
    location.pathname.includes("/provider-details/");

  const { courses, loading, error } = useCourseDiscovery();
  const [mappedCourses, setMappedCourses] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [modes, setModes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedModes, setSelectedModes] = useState([]);

  useEffect(() => {
    if (courses && Array.isArray(courses)) {
      const mapped = courses.map((course) => ({
        id: course.data.id,
        title: course.data.content.display_name,
        courseOverview: course.data.content.overview,
        number: course.data.number,
        imageUrl: course.data.image_url || noCourseImg,
        startIn: course.data.start,
        language: course.data.language,
        courseUrl: `course-details/${course.data.id}`,
        courseProviderName: course.data.org,
        mode: course.data.modes,
      }));
      setMappedCourses(mapped);

      const uniqueLangs = [
        ...new Set(mapped.map((item) => item.language).filter(Boolean)),
      ];
      const uniqueOrgs = [
        ...new Set(
          mapped.map((item) => item.courseProviderName).filter(Boolean)
        ),
      ];
      const allModes = mapped.flatMap((item) => item.mode || []);
      const uniqueModes = [...new Set(allModes)];

      setLanguages(uniqueLangs);
      setOrganizations(uniqueOrgs);
      setModes(uniqueModes);
    }
  }, [courses]);

  const [activeQuestion, setActiveQuestion] = useState(-1);
  const toggleQuestion = (index) =>
    setActiveQuestion(activeQuestion === index ? -1 : index);

  const handleLanguageChange = (lang) =>
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );

  const handleOrganizationChange = (e) =>
    setSelectedOrganization(e.target.value);

  const handleModeChange = (mode) =>
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );

  const coursesData = {
    roles: {
      development: mappedCourses,
      business: mappedCourses,
    },
    category: {
      design: mappedCourses,
      it: mappedCourses,
    },
    certifications: {
      aws: mappedCourses,
      google: mappedCourses,
    },
  };

  const topics = [
    "Python",
    "Large Language Models (LLM)",
    "Generative AI (GenAI)",
    "Angular",
    "Google Flutter",
    "SQL",
    "Machine Learning",
    "Unity",
    "C++ (programming language)",
    "Data Science",
  ];

  const subCategories = coursesData[activeTab]
    ? Object.keys(coursesData[activeTab])
    : [];

  const filteredCourses = useMemo(() => {
    if (!mappedCourses) return [];

    return mappedCourses.filter((course) => {
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        (course.language && selectedLanguages.includes(course.language));
      const matchesOrg =
        !selectedOrganization ||
        course.courseProviderName === selectedOrganization;
      const matchesMode =
        selectedModes.length === 0 ||
        course.mode?.some((m) => selectedModes.includes(m));

      return matchesLanguage && matchesOrg && matchesMode;
    });
  }, [mappedCourses, selectedLanguages, selectedOrganization, selectedModes]);

   const filterOption = [
    {
      id: 1,
      topic: "Language",
      option: (
        <div className="space-y-3">
          {languages.length > 0 ? (
            languages.map((lang, index) => {
              const languageLabels = {
                en: "English",
                fr: "French",
                hi: "Hindi",
                es: "Spanish",
                de: "German",
                zh: "Chinese",
                ar: "Arabic",
                ru: "Russian",
                ja: "Japanese",
              };

              const label =
                languageLabels[lang.toLowerCase()] ||
                lang.charAt(0).toUpperCase() + lang.slice(1);

              return (
                <div key={index} className="flex items-center gap-2 py-1 pl-1">
                  <input
                    type="checkbox"
                    id={`lang-${index}`}
                    className="w-4 h-4 accent-black cursor-pointer"
                    checked={selectedLanguages.includes(lang)}
                    onChange={() => handleLanguageChange(lang)}
                  />
                  <label
                    htmlFor={`lang-${index}`}
                    className="mb-0 text-sm text-gray-800 capitalize cursor-pointer translate-y-[-0.5px]"
                  >
                    {label}
                  </label>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">No languages available</p>
          )}
        </div>
      ),
    },
    {
      id: 2,
      topic: "Organization",
      option: (
        <div className="space-y-2">
          <select
            className="w-full border rounded-md px-3 py-2 text-sm"
            value={selectedOrganization}
            onChange={handleOrganizationChange}
          >
            <option value="">All Organizations</option>
            {organizations.map((org, index) => (
              <option key={index} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>
      ),
    },
    {
      id: 3,
      topic: "Mode",
      option: (
        <div className="space-y-3">
          {modes.length > 0 ? (
            modes.map((mode, index) => (
              <div key={index} className="flex items-center gap-2 py-1 pl-1">
                <input
                  type="checkbox"
                  id={`mode-${index}`}
                  className="w-4 h-4 accent-black cursor-pointer"
                  checked={selectedModes.includes(mode)}
                  onChange={() => handleModeChange(mode)}
                />
                <label
                  htmlFor={`mode-${index}`}
                  className="mb-0 text-sm text-gray-800 capitalize cursor-pointer translate-y-[-0.5px]"
                >
                  {mode}
                </label>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No modes available</p>
          )}
        </div>
      ),
    },
  ];

  const selectedFilters = [
    ...selectedLanguages.map((lang) => ({ type: "Language", value: lang })),
    ...(selectedOrganization
      ? [{ type: "Organization", value: selectedOrganization }]
      : []),
    ...selectedModes.map((mode) => ({ type: "Mode", value: mode })),
  ];

  const removeFilter = (type, value) => {
    if (type === "Language") {
      setSelectedLanguages((prev) => prev.filter((l) => l !== value));
    } else if (type === "Organization") {
      setSelectedOrganization("");
    } else if (type === "Mode") {
      setSelectedModes((prev) => prev.filter((m) => m !== value));
    }
  };

  return (
    <>
      {isChildRoute ? (
        <Outlet />
      ) : (
        <DashboardLayout>
          {/* MAIN TABS */}
          <div className="px-8 flex gap-6 border-b">
            {["roles", "category", "certifications"].map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`!p-4 rounded-none border-b-2 ${
                  activeTab === tab ? "border-black" : "border-transparent"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSubTab(Object.keys(coursesData[tab] || {})[0] || "");
                }}
              >
                {tab === "roles"
                  ? "Explore by Roles"
                  : tab === "category"
                    ? "Explore by Category"
                    : "Explore by Certifications"}
              </Button>
            ))}
          </div>

          {/* SUB TABS */}
          <div className="px-8 bg-black flex gap-4">
            {subCategories.map((sub) => (
              <Button
                key={sub}
                variant="ghost"
                className={`py-4 px-3 capitalize text-white ${
                  activeSubTab === sub ? "font-semibold" : "font-regular"
                }`}
                onClick={() => setActiveSubTab(sub)}
              >
                {sub}
              </Button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="space-y-6 p-4 sm:p-8">
            {activeTab !== "roles" && (
              <div>
                <div className="pb-4 border-b border-contentBorderPrimary">
                  <h2 className="text-4xl font-medium">
                    Explore by{" "}
                    <span className="font-bold">
                      {capitalizeFirstLetter(activeTab)}
                    </span>
                  </h2>
                </div>
                <CourseShowcase
                  courseData={coursesData[activeTab][activeSubTab] || []}
                  footerButton
                />
              </div>
            )}

            {/* Courses Section */}
            <CourseShowcase
              heading={
                <>
                  Courses for{" "}
                  <span className="font-semibold">
                    Beginners to Professionals
                  </span>
                </>
              }
              courseData={mappedCourses}
              variant="coursePrice"
              footerButton
              headerButton
            />
            <CourseShowcase
              heading={
                <>
                  Most popular{" "}
                  <span className="font-semibold">
                    Courses that Starting Soon
                  </span>
                </>
              }
              courseData={mappedCourses}
              footerButton
            />

            {/* Popular Topics */}
            <div>
              <div className="py-2 flex items-center justify-between">
                <h2 className="text-3xl text-gray-900 mb-2">
                  Popular <span className="font-bold">Topics</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {topics.map((topic, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center p-3.5 lg:px-6 lg:py-4 h-full align-middle border border-contentBorderSecondary text-center rounded-md hover:bg-primary text-sm font-semibold"
                  >
                    {topic}
                  </p>
                ))}
              </div>
            </div>

            {/* Explore Categories Section */}
            <ExploreCategories />

            {/* All Development Courses + Filters */}
            <div className="pt-16 border-t border-[#E4E4E4]">
              <div className="py-2 flex items-center justify-between">
                <h2 className="text-3xl text-gray-900 mb-2">
                  All Development <span className="font-bold">Courses</span>
                </h2>
                <p className="font-semibold text-[#727272]">
                  {filteredCourses.length} results
                </p>
              </div>
              {/* ✅ Selected filters */}
              {selectedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedFilters.map((filter, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      <span>
                        {filter.type}:{" "}
                        {filter.value.charAt(0).toUpperCase() +
                          filter.value.slice(1)}
                      </span>
                      <button
                        onClick={() => removeFilter(filter.type, filter.value)}
                        className="text-gray-600 hover:text-black font-bold"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedLanguages([]);
                      setSelectedOrganization("");
                      setSelectedModes([]);
                    }}
                    className="text-sm text-blue-600 hover:underline ml-2"
                  >
                    Clear All
                  </button>
                </div>
              )}
              <div className="grid lg:grid-cols-12 gap-6 pt-6">
                <div className="lg:col-span-3">
                  <div className="bg-[#F9F9F9] rounded-lg border border-contentBorderPrimary">
                    <div className="p-4">
                      <p className="text-black font-semibold text-base">
                        Filters
                      </p>
                    </div>
                    <div>
                      {filterOption.map((faq, index) => (
                        <div
                          key={faq.id}
                          className="overflow-hidden transition-all duration-300"
                        >
                          <div
                            onClick={() => toggleQuestion(index)}
                            className={`faq_question cursor-pointer border-t border-contentBorderPrimary h-[50px] px-[20px] py-[13px] flex items-center justify-between transition-all duration-300 ${
                              activeQuestion === index
                                ? "bg-primary-400 text-black"
                                : "bg-transparent text-body-text hover:text-primary-400"
                            }`}
                          >
                            <h3 className="mb-0 text-left font-medium text-sm">
                              {faq.topic}
                            </h3>
                            <span
                              className={`w-6 h-6 origin-center inline-flex items-center justify-center transition-transform duration-300 ${
                                activeQuestion === index
                                  ? "rotate-180 text-white"
                                  : "rotate-0 text-body-text"
                              }`}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.25 7.5L10 13.75L3.75 7.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                          <div
                            className={`answercont transition-all duration-500 ease-in-out overflow-hidden ${
                              activeQuestion === index ? "max-h-96" : "max-h-0"
                            }`}
                            style={{
                              maxHeight:
                                activeQuestion === index ? "1000px" : "0px",
                            }}
                          >
                            <div className="answer px-5 py-2 text-left">
                              {faq.option}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <CourseShowcase courseData={filteredCourses} footerButton />
                </div>
              </div>
            </div>
          </div>
        </DashboardLayout>
      )}
    </>
  );

  function capitalizeFirstLetter(str = "") {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  }
}

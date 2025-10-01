import ibmLogo from '../assets/jpg/ibm-1.png';
import Google1Logo from '../assets/jpg/Google-1.png';
import Google2Logo from '../assets/jpg/Google-2.png';
import TataLogo from '../assets/jpg/tata.png';
import IclLogo from '../assets/jpg/icl.png';
import LorealLogo from '../assets/jpg/loreal.png';


const TrustedCompanies = () => {
    const companies = [
        { name: "Google", logo: Google1Logo },
        { name: "TATA", logo: TataLogo },
        { name: "Google", logo: Google2Logo },
        { name: "Google", logo: "Google" },
        { name: "Imperial College London", logo: IclLogo },
        { name: "IBM", logo: ibmLogo },
        { name: "Imperial College London", logo: IclLogo },
        { name: "L'ORÉAL", logo: LorealLogo }
    ];

    return (
        <div className="bg-black rounded-lg p-8 my-4">
            {/* Header Text */}
            <div className="text-center mb-8">
                <p className="text-white text-lg font-medium">
                    Trusted by companies and millions of learners around the world
                </p>
            </div>

            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={company.logo} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedCompanies;

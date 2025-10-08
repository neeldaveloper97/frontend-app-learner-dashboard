import { useEffect, useRef } from 'react';
import sign from "../../assets/jpg/Sign.png";
import consent from "../../assets/jpg/Consent.png";
import phone from "../../assets/jpg/Phone.png";
import sms from "../../assets/jpg/SMS.png";
import pay from "../../assets/jpg/Commission.png";
import crm from "../../assets/jpg/crm_png.png";

export default function AgentAppsPopup({ isOpen, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        // container placed inline where it's used; uses absolute on sm+ and fixed/full-width on mobile
        <div ref={ref} className="relative z-50">
            <div className="absolute top-full right-0 mt-3 w-64 sm:w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 hidden sm:block">
                <p className="text-sm font-medium text-gray-700 mb-3">Your Nextere Apps</p>
                <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={crm} alt="Central" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Central</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={pay} alt="Pay" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Pay</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={sign} alt="Sign" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Sign</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={consent} alt="Consent" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Consent</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={phone} alt="Phone" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Phone</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={sms} alt="SMS" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">SMS</span>
                    </button>
                </div>
            </div>

            {/* Mobile / small screens: full width sheet below header */}
            <div className="sm:hidden fixed inset-x-3 top-20 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                <p className="text-sm font-medium text-gray-700 mb-3">Your Nextere Apps</p>
                <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={crm} alt="Central" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Central</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={pay} alt="Pay" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Pay</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={sign} alt="Sign" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Sign</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={consent} alt="Consent" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Consent</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={phone} alt="Phone" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">Phone</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                        <img src={sms} alt="SMS" className="w-10 h-10" />
                        <span className="text-xs text-gray-700">SMS</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

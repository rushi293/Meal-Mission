import React from 'react';

const missionStatement = "MealMission connects surplus hotel food with volunteers to feed those in need. Our community-driven approach fights food waste, feeds the hungry, and ensures no edible food is wasted.";
const visionStatement = "To create a future where food wastage is minimized, and communities are nourished, ensuring that no one goes hungry.";

const faqData = [
    {
        question: "What is the mission of our organization?",
        answer: "Our mission is to reduce food wastage by connecting surplus food from hotels with volunteers who distribute it to those in need."
    },
    {
        question: "How can I get involved as a volunteer?",
        answer: "Volunteers can participate by signing up on our platform, where they can choose from various opportunities such as food drives, event participation, or offering specific skills."
    },
    {
        question: "How can hotel owners post surplus food drives?",
        answer: "Hotel owners can easily post surplus food drives by logging into their accounts, accessing the 'Drives' section, and following the prompts to create and publish a new drive."
    },
    {
        question: "How are food deliveries managed?",
        answer: "Food deliveries are efficiently managed through our platform. Hotel owners schedule deliveries, and volunteers receive notifications to pick up and distribute the food."
    },
    {
        question: "Do you accept donations?",
        answer: "Yes, we appreciate all forms of donations. You can contribute by making monetary donations or donating goods such as packaged food, clothing, or other essential items."
    },
    {
        question: "How are donations utilized?",
        answer: "Donations are utilized to fund our operations, support food distribution drives, and implement initiatives aimed at reducing food wastage and supporting communities in need."
    },
    {
        question: "Can I sponsor an event or initiative?",
        answer: "Absolutely! We welcome sponsorships from businesses and individuals who wish to support our initiatives. Please contact us for more information on sponsorship opportunities."
    },
    {
        question: "How can I stay updated on your organization's activities?",
        answer: "You can stay updated by subscribing to our newsletter, following our social media accounts, or visiting our website regularly for updates on events, drives, and other initiatives."
    },
    {
        question: "Is my personal information secure?",
        answer: "Yes, we take data privacy seriously. Your personal information is kept confidential and is only used for operational purposes such as processing donations and managing volunteer activities."
    },
    {
        question: "What impact has our organization made so far?",
        answer: "Since our inception, we have significantly reduced food wastage by providing valuable insights to hotel owners and facilitating the distribution of surplus food to those in need, resulting in a positive impact on communities."
    },
    {
        question: "How are drives posted by the hotel owner?",
        answer: "Hotel owners can post drives by logging into their accounts, navigating to the 'Drives' section, and following the prompts to create and publish a new drive."
    },
    {
        question: "How are volunteers notified of available drives?",
        answer: "Volunteers receive city-wise notifications for available drives through our platform, enabling them to participate in relevant opportunities."
    },
    {
        question: "How is drive completion confirmed?",
        answer: "Drive completion is confirmed by the hotel owner upon food pickup, ensuring transparency and accountability in the distribution process."
    },
    {
        question: "How can volunteers verify their participation?",
        answer: "Volunteers can post distribution photos on our platform as verification of their participation, earning reward points and badges showcased on our leaderboard."
    },
    {
        question: "What detailed reports are provided?",
        answer: "We provide detailed reports on drive and food distribution activities, offering insights and analytics to both volunteers and hotel owners."
    },
    {
        question: "How are insights offered to reduce food wastage?",
        answer: "We offer valuable insights and solutions to hotel owners for reducing food wastage, empowering them to make informed decisions and contribute to our mission."
    }
];
function AboutUs() {
    return (

        <div data-aos="zoom-in" className="container mx-auto px-4">
            <div className="my-8 text-center mr-64 ml-64 py-1 shadow-2xl  backdrop-blur-sm rounded-md">
                <div className="my-8">
                    <h2 className="text-3xl font-bold mb-1">Our Vision</h2>
                    <p className='p-5 mb-1'>{visionStatement}</p>
                </div>
                <div className="my-8">
                    <h2 className="text-3xl font-bold mb-1">Our Mission</h2>
                    <p className='p-5 mb-1'>{missionStatement}</p>
                </div>
            </div>


            <h1 className="text-3xl font-bold text-black my-8 text-center">Frequently Asked Questions</h1>
            <div data-aos="zoom-in" className="space-y-4 overflow-hidden ">
                {faqData.map((faq, index) => (
                    <details
                        key={index}
                        className="group border-s-4 shadow-md border-purple-400  bg-gray-50 bg-opacity-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer  items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed  text-gray-700">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
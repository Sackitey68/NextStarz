import { useState, useEffect } from "react";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null); // Track active FAQ item
  const [isVisible, setIsVisible] = useState(false); // Track if the page is visible

  // FAQ data grouped by sections
  const faqSections = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is NextStarz?",
          answer:
            "NextStarz is an international music talent hunt designed to discover, nurture, and launch the next big star in the music industry. Organized by Suede Entertainment, the event offers winners and select participants exclusive management, recording, and distribution deals.",
        },
        {
          question: "Who can participate in NextStarz?",
          answer:
            "NextStarz is open to individuals worldwide who are musically gifted. Whether you're a vocalist, songwriter, or performer, we encourage you to participate.",
        },
        {
          question: "Is the event limited to specific talents or music genres?",
          answer:
            "No, NextStarz celebrates diversity across talents and music genres. The event is open to all music styles, including Pop, R&B, Hip-hop, Highlife, Afrobeat, Reggae, Soul, and more. Beyond music, NextStarz also embraces other creative talents, such as comedy, dancing, beat-making, instrumental performance, and music production. There’s no age limit. Participants must have a sound mind whether abled or disabled.",
        },
        {
          question: "Do I need to be a professional musician to participate?",
          answer:
            "No, NextStarz is open to both aspiring and professional musicians, home or abroad. All we require is talent, passion, and a willingness to grow.",
        },
      ],
    },
    {
      title: "Registration",
      items: [
        {
          question: "How can I register for NextStarz?",
          answer:
            "Simply sign up or log in using your social media accounts. Click on Register to sign up or Login to access your account. Then, fill out the online form, upload your audition file (if required), and follow the steps to complete your registration.",
        },
        {
          question: "Is there a registration fee?",
          answer:
            "Yes, a small registration fee may apply to cover administrative costs. The fee will be clearly indicated on the registration portal.",
        },
        {
          question: "Can I register as a group or band?",
          answer:
            "Yes, group and band registrations are welcome. Please ensure all group members are included in the registration form.",
        },
        {
          question: "What documents or files do I need to submit?",
          answer:
            "You’ll need to provide basic identification details and an audition video demo.",
        },
      ],
    },
    {
      title: "Auditions and Judging",
      items: [
        {
          question: "How will auditions be conducted?",
          answer:
            "Auditions will be conducted in two phases:\n1. Online: Participants submit audition files through the registration portal.\n2. Live: Selected participants will be invited for live auditions at a venue.",
        },
        {
          question: "What are the judging criteria?",
          answer:
            "Entries will be judged based on innovation, creativity, vocal/musical talent, stage presence, and overall appeal.",
        },
        {
          question: "Who are the judges?",
          answer:
            "Our panel consists of music industry experts, including award-winning artists, producers, and talent managers. Details of the panel will be announced closer to the event.",
        },
      ],
    },
    {
      title: "Event Schedule",
      items: [
        {
          question: "When does NextStarz start?",
          answer:
            "Registration opens on Saturday, April 5, 2025, and auditions commence on Thursday, June 5, 2025. The grand finale is scheduled for Saturday, June 14, 2025.",
        },
        {
          question: "Where will the live events take place?",
          answer:
            "Live events will be held and streamed online. The exact locations will be announced after the registration phase.",
        },
      ],
    },
    {
      title: "Prizes and Opportunities",
      items: [
        {
          question: "What do winners receive?",
          answer:
            "Winners receive exclusive management and recording deals with Suede Entertainment, cash prizes, and promotional opportunities to launch their careers.",
        },
        {
          question: "Are there opportunities for participants who don’t win?",
          answer:
            "Yes, select participants may still be offered recording deals, promotional support, or mentorship based on their potential.",
        },
      ],
    },
    {
      title: "Terms and Conditions",
      items: [
        {
          question: "Do participants have to sign a contract?",
          answer:
            "Yes, winners and select participants may be required to sign an exclusive management and recording agreement with Suede Entertainment.",
        },
        {
          question: "Can I withdraw from the competition?",
          answer:
            "Participants can withdraw at any stage before signing any agreements. However, registration fees are non-refundable.",
        },
        {
          question: "What happens if I am disqualified?",
          answer:
            "Participants may be disqualified for failing to adhere to the rules, providing false information, or engaging in unethical behavior.",
        },
      ],
    },
    {
      title: "Technical Support and Assistance",
      items: [
        {
          question: "I’m having trouble registering. Who can help?",
          answer:
            "Please contact our support team at info.nextstarz@gmail.com or +233534886377 for assistance.",
        },
        {
          question: "What format should my audition file be in?",
          answer:
            "Recommended Audition File Size Limits:\n●  MP4 (Video): Up to 20 MB (1 – 2 minutes at 720p resolution).",
        },
        {
          question: "Is the event accessible for persons with disabilities?",
          answer:
            "Yes, NextStarz is committed to inclusivity and will provide necessary accommodations for participants with disabilities.",
        },
      ],
    },
    {
      title: "Media and Sponsorship",
      items: [
        {
          question: "How can I stay updated on NextStarz?",
          answer:
            "Follow us on social media @nextstarzglobal and subscribe to our newsletter for updates.",
        },
        {
          question:
            "I am interested in sponsoring the event. Who do I contact?",
          answer:
            "For sponsorship inquiries, email us at info.nextstarz@gmail.com.",
        },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        {
          question: "Will I get feedback on my audition?",
          answer:
            "Due to the high volume of submissions, personalized feedback may not be provided to all participants.",
        },
        {
          question: "What is the dress code for live auditions and the finale?",
          answer:
            "There is no specific dress code, but participants are encouraged to dress in a way that reflects their style and enhances their performance.",
        },
        {
          question: "Can I participate again if I don’t win this year?",
          answer:
            "Absolutely! Participants are welcome to audition in subsequent years if they meet the eligibility criteria.",
        },
      ],
    },
  ];

  // Toggle FAQ accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Trigger animation when the page is visited
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-color py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-100 mb-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`bg-white/10 backdrop-blur-lg p-8 border border-white/20 rounded-tl-lg rounded-bl-lg hover:shadow-xl transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${sectionIndex * 100}ms` }}
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600"
                  >
                    <button
                      onClick={() =>
                        toggleAccordion(`${sectionIndex}-${index}`)
                      }
                      className="w-full flex justify-between items-center p-4 bg-white/10 hover:bg-cyan-700 focus:outline-none transition-colors duration-200"
                    >
                      <span className="text-lg font-medium text-gray-100 text-left">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                          activeIndex === `${sectionIndex}-${index}`
                            ? "rotate-180"
                            : ""
                        }`}
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === `${sectionIndex}-${index}`
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="p-4 bg-white/10 text-gray-200 whitespace-pre-line ">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

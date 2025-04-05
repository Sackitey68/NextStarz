import { useState, useEffect } from "react";

export default function FAQPage() {
  const [activeIndices, setActiveIndices] = useState([]); // Track multiple open FAQs
  const [isVisible, setIsVisible] = useState(false);

  // FAQ data grouped by sections
  const faqSections = [
    {
      title: "General Questions",
      icon: "🎤",
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
            "No, NextStarz celebrates diversity across talents and music genres. The event is open to all music styles, including Pop, R&B, Hip-hop, Highlife, Afrobeat, Reggae, Soul, and more. Beyond music, NextStarz also embraces other creative talents, such as comedy, dancing, beat-making, instrumental performance, and music production. There's no age limit. Participants must have a sound mind whether abled or disabled.",
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
      icon: "📝",
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
            "You'll need to provide basic identification details and an audition video demo.",
        },
      ],
    },
    {
      title: "Auditions and Judging",
      icon: "🏆",
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
      icon: "📅",
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
      icon: "💰",
      items: [
        {
          question: "What do winners receive?",
          answer:
            "Winners receive exclusive management and recording deals with Suede Entertainment, cash prizes, and promotional opportunities to launch their careers.",
        },
        {
          question: "Are there opportunities for participants who don't win?",
          answer:
            "Yes, select participants may still be offered recording deals, promotional support, or mentorship based on their potential.",
        },
      ],
    },
    {
      title: "Terms and Conditions",
      icon: "📜",
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
      icon: "🛠️",
      items: [
        {
          question: "I'm having trouble registering. Who can help?",
          answer:
            "Please contact our support team at info.nextstarz@gmail.com or +233534886377 for assistance.",
        },
        {
          question: "What format should my audition file be in?",
          answer:
            "Recommended Audition File Size Limits:\n● MP4 (Video): Up to 20 MB (1 – 2 minutes at 720p resolution).",
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
      icon: "📢",
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
      icon: "❓",
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
          question: "Can I participate again if I don't win this year?",
          answer:
            "Absolutely! Participants are welcome to audition in subsequent years if they meet the eligibility criteria.",
        },
      ],
    },
  ];

  // Toggle FAQ accordion
  const toggleAccordion = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Expand all FAQs
  const expandAll = () => {
    const allIndices = [];
    faqSections.forEach((section, sectionIndex) => {
      section.items.forEach((_, index) => {
        allIndices.push(`${sectionIndex}-${index}`);
      });
    });
    setActiveIndices(allIndices);
  };

  // Collapse all FAQs
  const collapseAll = () => {
    setActiveIndices([]);
  };

  // Trigger animation when the page is visited
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-bg-color py-10 px-4 sm:px-6 lg:px-8">
      <title>FAQ | NextStarz</title>
      <meta
        name="description"
        content="Frequently asked questions about NextStarz music talent competition"
      />

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Find answers to common questions about NextStarz
          </p>

          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`bg-gray-900/70 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${sectionIndex * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.items.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
                  >
                    <button
                      onClick={() =>
                        toggleAccordion(`${sectionIndex}-${index}`)
                      }
                      className="w-full flex justify-between items-center p-5 bg-gray-800 hover:bg-gray-700 focus:outline-none transition-colors duration-200 group"
                    >
                      <span className="text-lg font-medium text-gray-100 text-left group-hover:text-cyan-400 transition-colors duration-200">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-300 text-gray-400 group-hover:text-cyan-400 ${
                          activeIndices.includes(`${sectionIndex}-${index}`)
                            ? "rotate-180"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                        activeIndices.includes(`${sectionIndex}-${index}`)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 bg-gray-900 text-gray-200 whitespace-pre-line border-t border-gray-800">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 text-center bg-gray-900/70 p-8 rounded-xl border border-gray-800 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our support team is ready to help you with any additional questions
            you might have about NextStarz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info.nextstarz@gmail.com"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=233534886377"
              className="px-6 py-3  bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.003 3.2a12.8 12.8 0 0 0-11.093 19.269L3.2 28.8l6.563-1.678a12.8 12.8 0 1 0 6.24-23.922zm6.382 17.887c-.263.738-1.534 1.369-2.12 1.457-.546.082-1.23.116-1.99-.123-.457-.142-1.048-.341-1.825-.669a14.448 14.448 0 0 1-2.416-1.442 10.51 10.51 0 0 1-1.869-1.83c-.546-.672-.963-1.347-1.35-2.196-.322-.7-.415-1.316-.52-1.732-.192-.767.21-1.47.6-1.842.316-.305.701-.371.938-.371h.676c.197 0 .45-.038.676.512.263.633.888 2.163.963 2.313.072.15.118.328.024.528a1.57 1.57 0 0 1-.262.408c-.13.145-.263.33-.375.443-.125.133-.255.278-.11.543.142.263.632 1.042 1.362 1.689.937.837 1.731 1.1 2.036 1.23.317.13.5.11.684-.065.197-.197.765-.89.967-1.194.204-.307.406-.248.676-.15.263.099 1.66.781 1.947.921.286.144.474.214.543.335.072.12.072.697-.19 1.435z" />
              </svg>
              Whatsapp us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

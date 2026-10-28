import { Brain, Building2, ClipboardCheck, HeartHandshake, HeartPulse, Laptop, Leaf, MessageCircle, MessageSquareText, Phone, Pill, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "General Adult Psychiatry",
      description:
        "Comprehensive psychiatric assessment, diagnosis and evidence-based treatment for adults experiencing mental health concerns.",
    },
    {
      icon: Users,
      title: "Child & Adolescent Mental Health",
      description:
        "General psychiatric evaluation and treatment of ADHD, autism spectrum disorder, behavioural difficulties, emotional problems and developmental concerns.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Safe, individualized medication treatment with regular monitoring and long-term follow-up.",
    },
    {
      icon: MessageSquareText,
      title: "Psychotherapy & Counselling",
      description:
        "Supportive counselling, cognitive behavioural therapy (CBT)-based interventions, psychoeducation and family counselling.",
    },
    {
      icon: Leaf,
      title: "De-addiction Services",
      description:
        "Assessment and treatment of alcohol, nicotine and substance use disorders with relapse prevention strategies.",
    },
    {
      icon: Laptop,
      title: "Online Consultation",
      description:
        "Secure telepsychiatry consultations for patients throughout Nepal and internationally.",
    },
    {
      icon: ClipboardCheck,
      title: "Mental Health Screening",
      description:
        "Comprehensive psychiatric evaluations, psychological screening and early detection of mental health disorders.",
    },
    {
      icon: HeartPulse,
      title: "Geriatric Psychiatry",
      description:
        "Assessment and management of dementia, memory disorders, depression and anxiety in older adults.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Treatment Plans",
      description:
        "Every treatment plan is tailored to the patient's symptoms, lifestyle, family circumstances and recovery goals.",
    },
    {
      icon: Building2,
      title: "Corporate Mental Health Screening",
      description:
        "On-site mental health screening and stress management workshops for schools, offices, banks and corporate organizations to support employee and student wellbeing.",
    },
  ];

  return (
    <section id="services" className="py-14 md:py-16 bg-[#ebe9e1]/60">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-sage-700 uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-stone-900 mt-4">
            Comprehensive Psychiatric Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We provide compassionate, confidential and evidence-based
            psychiatric care for children, adolescents, adults and older
            adults through in-person and online consultations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 border border-gray-100 hover-lift"
            >

              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800">

                <service.icon size={24} aria-hidden="true" />

              </div>

              <h3 className="mt-4 text-xl font-bold text-sage-900">

                {service.title}

              </h3>

              <p className="mt-3 text-stone-700 leading-7">

                {service.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-12 bg-gradient-to-r from-sage-900 to-sage-700 rounded-2xl p-8 md:p-12 text-center text-white">

          <h3 className="text-4xl font-bold">

            Need Professional Mental Health Care?

          </h3>

          <p className="mt-5 text-lg text-sage-100 max-w-3xl mx-auto">

            Whether you are experiencing anxiety, depression, stress,
            addiction or any other mental health concern, we are here to
            provide personalized, confidential and evidence-based care.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 bg-white text-sage-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition call-pulse"
            >
              <Phone size={22} aria-hidden="true" />
              Call Now: +977 9861800547
            </a>

            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-sage-900 transition"
            >
              <MessageCircle size={22} aria-hidden="true" />
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

import { MessageCircle, Phone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: "🧠",
      title: "General Adult Psychiatry",
      description:
        "Comprehensive psychiatric assessment, diagnosis and evidence-based treatment for adults experiencing mental health concerns.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Child & Adolescent Psychiatry",
      description:
        "Evaluation and treatment of ADHD, autism spectrum disorder, behavioural difficulties, emotional problems and developmental concerns.",
    },
    {
      icon: "💊",
      title: "Medication Management",
      description:
        "Safe, individualized psychopharmacological treatment with regular monitoring and long-term follow-up.",
    },
    {
      icon: "💬",
      title: "Psychotherapy & Counselling",
      description:
        "Supportive counselling, cognitive behavioural therapy (CBT)-based interventions, psychoeducation and family counselling.",
    },
    {
      icon: "🍃",
      title: "De-addiction Services",
      description:
        "Assessment and treatment of alcohol, nicotine and substance use disorders with relapse prevention strategies.",
    },
    {
      icon: "💻",
      title: "Online Consultation",
      description:
        "Secure telepsychiatry consultations for patients throughout Nepal and internationally.",
    },
    {
      icon: "🏥",
      title: "Mental Health Screening",
      description:
        "Comprehensive psychiatric evaluations, psychological screening and early detection of mental health disorders.",
    },
    {
      icon: "🧓",
      title: "Geriatric Psychiatry",
      description:
        "Assessment and management of dementia, memory disorders, depression and anxiety in older adults.",
    },
    {
      icon: "❤️",
      title: "Personalized Treatment Plans",
      description:
        "Every treatment plan is tailored to the patient's symptoms, lifestyle, family circumstances and recovery goals.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-700 uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Comprehensive Psychiatric Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We provide compassionate, confidential and evidence-based
            psychiatric care for children, adolescents, adults and older
            adults through in-person and online consultations.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 border border-gray-100 hover-lift"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl">

                {service.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-900">

                {service.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                {service.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12 text-center text-white">

          <h3 className="text-4xl font-bold">

            Need Professional Mental Health Care?

          </h3>

          <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto">

            Whether you are experiencing anxiety, depression, stress,
            addiction or any other mental health concern, we are here to
            provide personalized, confidential and evidence-based care.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition call-pulse"
            >
              <Phone size={22} aria-hidden="true" />
              Call Now: +977 9861800547
            </a>

            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition"
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

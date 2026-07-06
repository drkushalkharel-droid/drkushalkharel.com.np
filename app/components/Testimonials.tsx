export default function Testimonials() {
  const testimonials = [
    {
      name: "Patient Feedback",
      title: "Professional & Compassionate Care",
      review:
        "Patients appreciate clear explanations, respectful communication, individualized treatment plans, and a supportive approach throughout their care.",
    },
    {
      name: "Telepsychiatry",
      title: "Convenient Online Consultation",
      review:
        "Secure online consultations provide access to specialist psychiatric care for patients throughout Nepal and internationally.",
    },
    {
      name: "Evidence-Based Practice",
      title: "Trusted Mental Healthcare",
      review:
        "Treatment decisions are guided by current scientific evidence, careful assessment, and regular follow-up to achieve the best possible outcomes.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Patient Experience
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Trusted Mental Health Care
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Our goal is to provide compassionate, confidential and
            evidence-based psychiatric care while building long-term
            therapeutic relationships with every patient.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition"
            >

              <div className="text-yellow-500 text-2xl mb-5">
                ⭐⭐⭐⭐⭐
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8 italic">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8">

                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="https://maps.app.goo.gl/6xPZkgtVphdXZAhK6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            ⭐ View & Leave a Google Review
          </a>

        </div>

      </div>

    </section>
  );
}

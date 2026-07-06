export default function Statistics() {
  const stats = [
    {
      number: "MD",
      title: "Psychiatry",
      description: "Specialist training in Psychiatry with evidence-based clinical practice.",
    },
    {
      number: "7+",
      title: "Years of Clinical Experience",
      description: "Experience in psychiatry, community mental health and academic practice.",
    },
    {
      number: "Online",
      title: "Telepsychiatry",
      description: "Consultations available for patients across Nepal and internationally.",
    },
    {
      number: "100%",
      title: "Confidential Care",
      description: "Ethical, compassionate and patient-centred mental healthcare.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Why Patients Trust Us
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Professional Mental Healthcare
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Delivering compassionate, confidential and evidence-based psychiatric
            care with a personalized approach for every patient.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center"
            >

              <h3 className="text-5xl font-extrabold text-blue-700">
                {item.number}
              </h3>

              <h4 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
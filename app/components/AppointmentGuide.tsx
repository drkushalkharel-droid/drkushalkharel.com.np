import { CalendarCheck, ClipboardList } from "lucide-react";
import { buildHowToJsonLd, type HowToStep } from "../lib/schema";

const siteUrl = "https://drkushalkharel.com.np";

const guides: {
  id: string;
  icon: typeof CalendarCheck;
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}[] = [
  {
    id: "how-online-consultation-works",
    icon: CalendarCheck,
    name: "How Online Psychiatric Consultation Works",
    description:
      "What to expect when booking an online consultation with Dr. Kushal Kharel, from first contact to follow-up.",
    steps: [
      {
        name: "Call or message to book",
        text: "Call +977 9861800547 or message on WhatsApp to book an online consultation slot.",
      },
      {
        name: "Join by phone or video call",
        text: "At your scheduled time, connect by phone or video call from anywhere in Nepal or abroad.",
      },
      {
        name: "Discuss your symptoms and history",
        text: "Dr. Kushal Kharel reviews your symptoms, history and current medications, the same as an in-person visit.",
      },
      {
        name: "Receive a diagnosis and treatment plan",
        text: "You'll discuss a diagnosis and treatment plan together, with a prescription provided where clinically appropriate.",
      },
      {
        name: "Schedule a follow-up if needed",
        text: "Follow-up appointments can be booked the same way to review progress and adjust treatment.",
      },
    ],
  },
  {
    id: "how-to-prepare-for-first-consultation",
    icon: ClipboardList,
    name: "How to Prepare for Your First Psychiatric Consultation",
    description:
      "Simple steps to make your first visit with a psychiatrist more productive, whether in-person or online.",
    steps: [
      {
        name: "Write down your main concerns",
        text: "Note the symptoms you've noticed, when they started, and how they're affecting your daily life, work or relationships.",
      },
      {
        name: "List current and past medications",
        text: "Bring a list of any medications, supplements or previous psychiatric treatment, including doses if known.",
      },
      {
        name: "Gather relevant medical history",
        text: "Note any relevant physical health conditions, family history of mental illness, and prior hospitalizations or diagnoses.",
      },
      {
        name: "Prepare your questions",
        text: "Write down anything you want to ask about diagnosis, treatment options, side effects or what to expect next.",
      },
      {
        name: "Arrive a few minutes early",
        text: "For in-person visits, arrive a little early for registration paperwork; for online visits, test your phone or video connection beforehand.",
      },
    ],
  },
];

export default function AppointmentGuide() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@graph": guides.map((guide) =>
      buildHowToJsonLd({
        id: `${siteUrl}/#${guide.id}`,
        name: guide.name,
        description: guide.description,
        totalTime: guide.totalTime,
        steps: guide.steps,
      }),
    ),
  };

  return (
    <section id="appointment-guide" className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Booking a Consultation
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            How to book and prepare for your visit
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.id} className="rounded-lg border border-slate-200 p-6 shadow-sm md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-blue-950">{guide.name}</h3>
                <p className="mt-2 leading-7 text-slate-600">{guide.description}</p>
                <ol className="mt-5 space-y-4">
                  {guide.steps.map((step, index) => (
                    <li key={step.name} className="rounded-lg bg-slate-50 p-4">
                      <p className="font-bold text-slate-900">
                        Step {index + 1}: {step.name}
                      </p>
                      <p className="mt-1 text-slate-600">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

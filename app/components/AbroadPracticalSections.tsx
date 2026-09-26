import { buildZoneGuide, type SlotStatus } from "../lib/timeGuide";
import type { CountryMeta, ZoneRef } from "../data/abroadMeta";

const statusStyles: Record<SlotStatus, { label: string; className: string }> = {
  open: { label: "In clinic hours", className: "bg-green-100 text-green-900" },
  partial: { label: "Partly in clinic hours", className: "bg-amber-100 text-amber-900" },
  closed: { label: "Ask first", className: "bg-stone-200 text-stone-800" },
};

// "What is my local time in Nepal, and is the clinic open then?" for one or
// more time zones. All numbers come from app/lib/timeGuide.ts.
export function TimeGuide({ place, zones }: { place: string; zones: ZoneRef[] }) {
  const guides = zones.map((zone) => buildZoneGuide(zone));

  return (
    <section id="session-times" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <h2 className="text-3xl font-bold text-stone-950">Session times for Nepalis in {place}</h2>
      <p className="mt-4 max-w-3xl leading-8 text-stone-600">
        Sessions are booked at a time that suits your time zone. This table shows what your local
        time is in Nepal, and whether it falls inside the clinic&apos;s published hours (Sunday to
        Friday 8 AM to 10 PM, Saturday 10 AM to 4 PM, Nepal time). If a time is outside those hours,
        message to ask what can be arranged.
      </p>

      <div className="mt-8 space-y-8">
        {guides.map((guide) => (
          <div key={guide.label} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            {guides.length > 1 && <h3 className="text-xl font-bold text-stone-950">{guide.label}</h3>}
            <p className={`${guides.length > 1 ? "mt-2" : ""} leading-7 text-stone-700`}>{guide.difference}</p>

            <div className="mt-5 overflow-x-auto rounded-lg border border-stone-200">
              <table className="w-full min-w-[520px] text-left text-base">
                <thead className="bg-stone-100 text-stone-700">
                  <tr>
                    <th className="px-4 py-3 font-bold">Your time</th>
                    <th className="px-4 py-3 font-bold">Time in Nepal</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row) => (
                    <tr key={row.key} className="border-t border-stone-200 align-top odd:bg-white even:bg-stone-50">
                      <td className="px-4 py-3">
                        <span className="font-semibold text-sage-950">{row.label}</span>
                        <span className="block text-sm text-stone-600">{row.local}</span>
                      </td>
                      <td className="px-4 py-3">
                        {row.views.map((view) => (
                          <div key={view.season ?? "all"} className="mb-1 last:mb-0">
                            {view.season && (
                              <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                                {view.season}
                              </span>
                            )}
                            <span className="font-semibold text-stone-900">{view.nepal}</span>{" "}
                            <span
                              className={`ml-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[view.status].className}`}
                            >
                              {statusStyles[view.status].label}
                            </span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-stone-700">
              {guide.bestFit.length > 0 ? (
                <>
                  <strong>Easiest fit for {guide.label}:</strong> {guide.bestFit.join(", ")}.
                </>
              ) : (
                <>
                  <strong>Tip:</strong> most everyday windows in {guide.label} fall outside the published
                  clinic hours, so message with the times that suit you and ask what can be arranged.
                </>
              )}
              {guide.hasDaylightSaving && " Clocks change in spring and autumn, so the Nepal time shifts by an hour; the time is always confirmed when you book."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Verified local emergency numbers (and a local helpline where relevant).
export function EmergencyBox({ place, meta }: { place: string; meta: CountryMeta }) {
  if (!meta.emergency && !meta.helpline) return null;

  return (
    <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5 leading-7 text-red-950">
      <h3 className="font-bold">Emergency and crisis numbers in {place}</h3>
      {meta.emergency && <p className="mt-2">{meta.emergency}</p>}
      {meta.helpline && (
        <p className="mt-2">
          <strong>{meta.helpline.name}:</strong> {meta.helpline.detail}
          {meta.helpline.url && (
            <>
              {" "}
              <a
                href={meta.helpline.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Official page
              </a>
              .
            </>
          )}
        </p>
      )}
      <p className="mt-2 text-sm">
        An online appointment is not an emergency service. If there is immediate danger, call the
        local emergency number first.
      </p>
    </div>
  );
}

// Short Nepali-language block (lang="ne") for people who search in Nepali.
export function NepaliBlock({ heading, text }: { heading: string; text: string }) {
  return (
    <section lang="ne" className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <h2 className="text-3xl font-bold text-stone-950">{heading}</h2>
      <p className="mt-4 leading-8 text-stone-700">{text}</p>
    </section>
  );
}

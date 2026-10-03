import Link from "next/link";
import { abroadGuides } from "../data/abroad";
import { abroadMeta } from "../data/abroadMeta";
import { countryHref } from "../data/abroadRegions";
import { publishedClinicHours } from "../data/onlineCare";
import { buildZoneGuide } from "../lib/timeGuide";

export default function AbroadSessionTimes() {
  const rows = abroadGuides.flatMap((country) =>
    abroadMeta[country.slug].zones.map((zone) => {
      const guide = buildZoneGuide(zone);
      const openWindows = guide.rows.filter((window) =>
        window.views.every((view) => view.status === "open"),
      );

      return {
        country,
        label: abroadMeta[country.slug].zones.length > 1
          ? `${country.country} · ${zone.label}`
          : country.country,
        guide,
        openWindows,
      };
    }),
  );

  return (
    <section id="session-times" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-950">Your local time and Kathmandu time</h2>
        <p className="mt-4 max-w-4xl leading-8 text-stone-700">
          Online appointments are arranged around your country, time zone, work or study schedule, and any rotating
          shifts. Send the clinic your country or city and two or three times that suit you in your own local time.
          The clinic will convert them to Nepal time, check the schedule, and confirm an available appointment with you.
          The published clinic hours are {publishedClinicHours}. If these windows do not work for you, ask about another time;
          an appointment outside published hours needs the clinic to confirm availability.
        </p>
        <p className="mt-3 max-w-4xl leading-8 text-stone-700">
          The examples below are calculated from each location&apos;s time zone, including daylight-saving changes where
          applicable. Times shown as a good fit fall within the published clinic hours in both seasons.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-stone-100 text-stone-700">
              <tr>
                <th className="px-4 py-3 font-bold">Country / time zone</th>
                <th className="px-4 py-3 font-bold">Time difference</th>
                <th className="px-4 py-3 font-bold">Local windows that fit clinic hours</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ country, label, guide, openWindows }) => (
                <tr key={`${country.slug}-${label}`} className="border-t border-stone-200 align-top odd:bg-white even:bg-stone-50">
                  <td className="px-4 py-3 font-semibold text-sage-950">
                    <Link href={countryHref(country.slug)} className="underline">{label}</Link>
                  </td>
                  <td className="px-4 py-3 text-stone-700">{guide.difference}</td>
                  <td className="px-4 py-3 leading-6 text-stone-700">
                    {openWindows.length > 0 ? openWindows.map((window) => (
                      <p key={window.key}>
                        <span className="font-semibold">{window.label}:</span>{" "}
                        {window.views.map((view) => (
                          `${view.season ? `${view.season}: ` : ""}${window.local} local → ${view.nepal} Nepal time`
                        )).join("; ")}
                      </p>
                    )) : "No standard window falls fully within clinic hours in every season. Send your preferred local times and ask the clinic to check availability."}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 max-w-4xl leading-8 text-stone-600">
          To request a time, WhatsApp <a className="font-semibold text-sage-800 underline" href="https://wa.me/9779861800547">+977 9861800547</a> with
          your country/city, time zone, preferred local time windows, and whether your work shifts rotate. The clinic
          will reply with a Nepal-time confirmation. Availability is confirmed individually; the table is a planning
          guide, not a live booking calendar.
        </p>
      </div>
    </section>
  );
}

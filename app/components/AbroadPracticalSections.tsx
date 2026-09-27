import type { CountryMeta } from "../data/abroadMeta";

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

// Bordered "Meaning in Nepali" box shown right under the H1 of a /knowledge/ page.
// Real text (not an image) so search engines and AI assistants can quote it.
export default function MeaningInNepali({ definition }: { definition: string }) {
  return (
    <aside
      aria-label="Meaning in Nepali"
      className="mt-6 max-w-3xl rounded-lg border-2 border-sage-200 bg-sage-50 p-5 leading-7"
    >
      <p className="text-sm font-semibold uppercase tracking-[2px] text-sage-700">Meaning in Nepali</p>
      <p lang="ne" className="mt-2 text-lg font-semibold text-stone-950">
        {definition}
      </p>
    </aside>
  );
}

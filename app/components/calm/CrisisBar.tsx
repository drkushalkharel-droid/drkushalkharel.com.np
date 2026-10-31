import { Phone } from "lucide-react";

// Shown first on every Calm Now page. Number and wording come from the site's own
// articles (docArticles.ts); the helpline's hours are deliberately not stated because
// published sources disagree on them. TODO: Dr. Kharel to confirm before wider promotion.
export default function CrisisBar() {
  return (
    <section aria-labelledby="crisis-heading" className="border-b-4 border-clay-600 bg-clay-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <h2 id="crisis-heading" className="text-lg font-bold text-clay-800">
            In danger, or thinking of harming yourself or someone else?
          </h2>
          <p className="mt-1 leading-7 text-stone-800">
            Do not use these tools alone. Go to the nearest hospital emergency room, or call the National
            Suicide Prevention Helpline <strong>1166</strong> (free). Ask someone near you to stay with you.
          </p>
          <p lang="ne" className="mt-1 leading-7 text-stone-800">
            आफूलाई वा अरूलाई हानि पुर्‍याउने सोच आएको छ भने एक्लै नबस्नुहोस्। नजिकको अस्पतालको आकस्मिक कक्षमा जानुहोस् वा
            हेल्पलाइन <strong>1166</strong> (नि:शुल्क) मा फोन गर्नुहोस्।
          </p>
        </div>
        <a
          href="tel:1166"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-clay-700 px-6 font-bold text-white hover:bg-clay-800"
        >
          <Phone size={20} aria-hidden="true" />
          Call 1166
        </a>
      </div>
    </section>
  );
}

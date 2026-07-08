import Link from "next/link";
import { MessagesSquare } from "lucide-react";

export default function CounsellingSeoSection() {
  return (
    <section id="counselling" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
              <MessagesSquare size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Looking for a counselor or counselling doctor in Nepal?
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                Counselling, psychotherapy and psychiatric consultation are
                related but different — learn who provides counselling in
                Nepal, how it differs from seeing a psychiatrist, and how to
                get confidential support from Dr. Kushal Kharel.
              </p>
            </div>
          </div>
          <Link
            href="/counselling-in-nepal"
            className="shrink-0 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}

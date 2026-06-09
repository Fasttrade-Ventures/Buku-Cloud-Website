import type { Metadata } from "next";
import {
  LegalContact,
  LegalHero,
  LegalLayout,
  LegalSection,
} from "@/components/legal-shell";
import { DPO_EMAIL, PRIVACY_EMAIL } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Which cookies and similar technologies BukuCloud uses, why we use them, and how to manage them in your browser. No advertising trackers.",
  path: "/cookies",
  keywords: ["cookie policy Malaysia", "BukuCloud cookies"],
});

const toc = [
  { id: "summary", label: "Plain-English summary" },
  { id: "what", label: "1. What cookies are" },
  { id: "categories", label: "2. Cookies we use" },
  { id: "third-party", label: "3. Third-party cookies" },
  { id: "manage", label: "4. Managing cookies" },
  { id: "do-not-track", label: "5. Do Not Track" },
  { id: "changes", label: "6. Changes" },
  { id: "contact", label: "7. Contact" },
];

const cookies = [
  {
    name: "bukucloud_session",
    type: "Strictly necessary",
    purpose: "Keeps you signed in. Without this cookie the app can't work.",
    duration: "Session (until logout)",
    party: "First-party",
  },
  {
    name: "XSRF-TOKEN / bukucloud_xsrf",
    type: "Strictly necessary",
    purpose:
      "Cross-site request forgery (CSRF) protection on every state-changing request.",
    duration: "Session",
    party: "First-party",
  },
  {
    name: "remember_web_*",
    type: "Strictly necessary",
    purpose:
      "Set when you tick \"Remember me\" at login so you don't have to sign in every visit.",
    duration: "30 days",
    party: "First-party",
  },
  {
    name: "lang",
    type: "Preference",
    purpose:
      "Stores your language preference (English / Bahasa Malaysia) on the marketing site.",
    duration: "1 year",
    party: "First-party",
  },
  {
    name: "audience",
    type: "Preference",
    purpose:
      "Remembers whether you're browsing the SME or Accountants view of the marketing site.",
    duration: "30 days",
    party: "First-party",
  },
  {
    name: "consent",
    type: "Strictly necessary",
    purpose:
      "Stores your cookie consent choices so the banner doesn't ask again.",
    duration: "12 months",
    party: "First-party",
  },
];

export default function CookiePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
          { name: "Cookie Policy", href: "/cookies" },
        ]}
      />
      <LegalHero
        title="Cookie Policy"
        badge="Cookies"
        description={
          <>
            BukuCloud uses a small number of cookies — mostly to keep you
            signed in and to remember your preferences. We don&apos;t run
            advertising trackers and we don&apos;t sell what we know about
            your visit.
          </>
        }
      />
      <LegalLayout toc={toc}>
        <LegalSection id="summary" title="Plain-English summary" number="">
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              We use a handful of cookies, almost all of them{" "}
              <strong>strictly necessary</strong> to log you in and keep
              the app secure.
            </li>
            <li>
              We don&apos;t run advertising or cross-site tracking cookies.
            </li>
            <li>
              You can clear or block cookies in your browser at any time —
              the marketing site will keep working, but the app
              won&apos;t (you can&apos;t stay signed in without a session
              cookie).
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="what" title="What cookies are" number="1">
          <p>
            Cookies are small text files a website saves in your browser to
            remember things between requests — most commonly that
            you&apos;re logged in. &ldquo;Similar technologies&rdquo;
            include localStorage, sessionStorage and IndexedDB, which we
            use sparingly to cache UI state in your browser.
          </p>
        </LegalSection>

        <LegalSection id="categories" title="Cookies we use" number="2">
          <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
            <table className="w-full text-left text-[13px]">
              <thead className="border-b border-border bg-surface-alt">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Name</th>
                  <th className="px-4 py-3 font-semibold text-ink">Type</th>
                  <th className="px-4 py-3 font-semibold text-ink">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-ink">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((c) => (
                  <tr
                    key={c.name}
                    className="border-b border-border align-top last:border-b-0"
                  >
                    <td className="px-4 py-3 font-mono text-[12px] font-semibold text-ink">
                      {c.name}
                    </td>
                    <td className="px-4 py-3 text-ink-muted">{c.type}</td>
                    <td className="px-4 py-3 text-ink-muted">{c.purpose}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-ink-muted">
                      {c.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection
          id="third-party"
          title="Third-party cookies"
          number="3"
        >
          <p>
            We do not run third-party advertising or cross-site tracking
            cookies. The only third-party cookies you may encounter are
            those set by services we embed for narrow purposes, e.g.
            ToyyibPay&apos;s payment iframe during checkout. Those cookies
            are governed by ToyyibPay&apos;s own cookie policy, not ours.
          </p>
        </LegalSection>

        <LegalSection id="manage" title="Managing cookies" number="4">
          <p>
            You can clear or block cookies in your browser settings:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              <strong>Chrome</strong>: Settings → Privacy and security →
              Cookies and other site data.
            </li>
            <li>
              <strong>Safari</strong>: Settings → Privacy → Manage Website
              Data.
            </li>
            <li>
              <strong>Firefox</strong>: Settings → Privacy &amp; Security →
              Cookies and Site Data.
            </li>
            <li>
              <strong>Edge</strong>: Settings → Cookies and site
              permissions.
            </li>
          </ul>
          <p>
            If you block strictly-necessary cookies, the BukuCloud
            application can&apos;t keep you signed in.
          </p>
        </LegalSection>

        <LegalSection
          id="do-not-track"
          title="Do Not Track"
          number="5"
        >
          <p>
            We do not currently respond to Do Not Track signals because we
            don&apos;t run cross-site tracking that DNT was designed to
            block. The strictly-necessary cookies above are still set so
            the app can function.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes" number="6">
          <p>
            We will update this page if we add or remove a cookie and bump
            the version at the top.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact" number="7">
          <p>
            Questions about cookies? Email{" "}
            <a
              className="font-semibold text-accent"
              href={`mailto:${PRIVACY_EMAIL}`}
            >
              {PRIVACY_EMAIL}
            </a>{" "}
            or our DPO at{" "}
            <a
              className="font-semibold text-accent"
              href={`mailto:${DPO_EMAIL}`}
            >
              {DPO_EMAIL}
            </a>
            .
          </p>
        </LegalSection>
      </LegalLayout>
      <LegalContact
        title="Cookie or tracking question?"
        body="Email"
        email={PRIVACY_EMAIL}
      />
    </>
  );
}

import type { Metadata } from "next";
import {
  LegalContact,
  LegalHero,
  LegalLayout,
  LegalSection,
} from "@/components/legal-shell";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  LEGAL_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The agreement between you and BukuCloud when you sign up or subscribe to a plan. Plain-English summary up top, full terms below — governed by Malaysian law.",
  path: "/terms",
  keywords: ["BukuCloud terms", "Malaysia SaaS terms"],
});

const toc = [
  { id: "summary", label: "Plain-English summary" },
  { id: "acceptance", label: "1. Accepting these terms" },
  { id: "service", label: "2. The service" },
  { id: "account", label: "3. Your account" },
  { id: "subscription", label: "4. Subscription & billing" },
  { id: "data", label: "5. Your data" },
  { id: "acceptable-use", label: "6. Acceptable use" },
  { id: "third-party", label: "7. Third-party services" },
  { id: "myinvois", label: "8. MyInvois & SST disclaimer" },
  { id: "ip", label: "9. Intellectual property" },
  { id: "warranty", label: "10. Warranties & disclaimers" },
  { id: "liability", label: "11. Limitation of liability" },
  { id: "termination", label: "12. Termination" },
  { id: "law", label: "13. Governing law" },
  { id: "changes", label: "14. Changes to these terms" },
  { id: "contact", label: "15. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      />
      <LegalHero
        title="Terms of Service"
        badge="Customer"
        description={
          <>
            The agreement between you and {COMPANY_NAME} when you sign up,
            subscribe to a plan, or use the BukuCloud platform. Plain-English
            summary at the top, full terms below.
          </>
        }
      />
      <LegalLayout toc={toc}>
        <LegalSection id="summary" title="Plain-English summary" number="">
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              You sign up, you pay your subscription, you use BukuCloud to do
              your books.
            </li>
            <li>
              Your accounting data is yours. We&apos;re a custodian — we
              don&apos;t sell it, train models on it, or hand it to anyone
              outside our published sub-processor list.
            </li>
            <li>
              Stop paying and we keep your data read-only for 30 days, then
              follow the retention rules in the{" "}
              <a className="font-semibold text-accent" href="/privacy">
                Privacy Policy
              </a>
              .
            </li>
            <li>
              We try hard to keep BukuCloud up. We&apos;re honest that we
              don&apos;t (yet) offer a contractual SLA on the SaaS plans —
              if downtime is critical for you, talk to us about Enterprise.
            </li>
            <li>
              Don&apos;t use BukuCloud for illegal stuff, don&apos;t abuse
              the system, and don&apos;t use it to spam.
            </li>
          </ul>
          <p className="text-[13px] text-ink-muted">
            The summary is here for clarity. If a provision below conflicts
            with this summary, the provision below wins.
          </p>
        </LegalSection>

        <LegalSection
          id="acceptance"
          title="Accepting these terms"
          number="1"
        >
          <p>
            By creating an account, accessing the BukuCloud website at{" "}
            <code className="font-mono text-[13px]">bukucloud.com</code>, or
            using the application, you agree to be bound by these Terms of
            Service (&ldquo;Terms&rdquo;) and our{" "}
            <a className="font-semibold text-accent" href="/privacy">
              Privacy Policy
            </a>
            . If you don&apos;t agree, don&apos;t use the service.
          </p>
          <p>
            If you accept on behalf of a company or other legal entity, you
            represent that you have the authority to bind that entity. The
            terms then apply to that entity.
          </p>
        </LegalSection>

        <LegalSection id="service" title="The service" number="2">
          <p>
            BukuCloud is a multi-tenant cloud-accounting platform for
            Malaysian SMEs and the accounting firms that serve them. Each
            company gets its own isolated database. We provide invoicing,
            bills, customers, suppliers, chart of accounts, journal entries,
            financial reports, sales-tax (SST) reporting, and (when shipped)
            LHDN MyInvois e-Invoicing. We also provide a Practice console
            for accounting firms managing multiple client books.
          </p>
          <p>
            We may add, change, or remove features at any time. Material
            removals affecting a paid plan will be communicated in advance.
          </p>
        </LegalSection>

        <LegalSection id="account" title="Your account" number="3">
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              You must be at least 18 years old (or the age of legal majority
              in your jurisdiction) to create an account.
            </li>
            <li>
              You must provide accurate information and keep it up to date.
            </li>
            <li>
              You are responsible for keeping your password and any 2FA
              recovery codes secure. We strongly recommend turning on two-factor
              authentication.
            </li>
            <li>
              You are responsible for all activity under your account, including
              any teammates or contractors you invite.
            </li>
            <li>
              Notify us immediately at{" "}
              <a
                className="font-semibold text-accent"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              if you suspect unauthorised access.
            </li>
          </ul>
        </LegalSection>

        <LegalSection
          id="subscription"
          title="Subscription & billing"
          number="4"
        >
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              Plans, prices and feature limits are listed at{" "}
              <a className="font-semibold text-accent" href="/pricing">
                bukucloud.com/pricing
              </a>
              . Prices are in Malaysian Ringgit (MYR), inclusive of SST where
              applicable.
            </li>
            <li>
              Subscriptions are billed monthly or annually, in advance, via
              ToyyibPay (FPX, credit/debit card, e-wallets). Annual plans
              are discounted approximately 17%.
            </li>
            <li>
              Plans renew automatically until cancelled. You can cancel at
              any time from{" "}
              <code className="font-mono text-[13px]">Settings → Plan</code>.
            </li>
            <li>
              <strong>No refunds for partial periods</strong> on monthly
              plans. Annual plans cancelled within 14 days of first payment
              are eligible for a pro-rata refund of the unused portion;
              otherwise the annual fee is non-refundable. Self-hosted
              licences are governed by the separate licence agreement signed
              at deployment.
            </li>
            <li>
              We may suspend access if a payment fails. We send a reminder
              before suspension and a final notice before downgrading you
              to the free tier.
            </li>
            <li>
              Free tiers (Startup and Practice Free) are scoped (one user /
              one client) but have no time limit. We may change the
              free-tier scope with 30 days&apos; notice.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="data" title="Your data" number="5">
          <p>
            <strong>You own your data.</strong> Anything you enter, upload,
            or generate inside your tenant — invoices, customers, receipts,
            journal entries, custom reports — remains your property. We
            don&apos;t claim any IP rights over your accounting data.
          </p>
          <p>
            <strong>We process it on your behalf.</strong> When you store
            personal data of your customers (e.g. customer names, emails,
            TINs) in BukuCloud, you are the data controller and we are the
            data processor under PDPA. Our obligations are governed by the{" "}
            <a className="font-semibold text-accent" href="/dpa">
              Data Processing Agreement
            </a>
            , which forms part of these Terms.
          </p>
          <p>
            <strong>Backups and export.</strong> We run daily encrypted
            backups for 30 days. You can export a full copy of your data
            at any time from{" "}
            <code className="font-mono text-[13px]">
              Settings → Data export
            </code>{" "}
            (PDPA right of access). On account closure we keep your data
            read-only for 30 days so you can export, then follow the
            retention rules in the Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection
          id="acceptable-use"
          title="Acceptable use"
          number="6"
        >
          <p>You agree not to:</p>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              Use BukuCloud to break Malaysian or other applicable law
              (including tax, anti-money-laundering, sanctions and
              export-control law).
            </li>
            <li>
              Issue invoices or e-Invoices on behalf of someone who has not
              authorised you.
            </li>
            <li>
              Send spam, phishing, malware, or unsolicited bulk
              communications via the BukuCloud email features.
            </li>
            <li>
              Interfere with or compromise the integrity or security of the
              service (e.g. denial-of-service, scraping at high rates,
              probing for vulnerabilities outside our published bug-bounty
              channel).
            </li>
            <li>
              Reverse-engineer the service, or sell, sublicense, white-label
              or resell access without a written agreement (Practice Firm
              tier and self-hosted licences cover legitimate firm and
              white-label use).
            </li>
            <li>
              Use BukuCloud to process special-category personal data
              (health, biometric, criminal-record) — the platform is not
              designed for that.
            </li>
          </ul>
          <p>
            We may suspend or terminate accounts that breach this section
            without refund.
          </p>
        </LegalSection>

        <LegalSection
          id="third-party"
          title="Third-party services"
          number="7"
        >
          <p>
            BukuCloud integrates with third-party services (ToyyibPay for
            payments, optional Google Gemini for OCR, LHDN MyInvois for
            e-Invoice submission). Your use of those services is governed by
            their own terms. We&apos;re not responsible for outages or
            decisions made by those third parties.
          </p>
        </LegalSection>

        <LegalSection
          id="myinvois"
          title="MyInvois & SST disclaimer"
          number="8"
        >
          <p>
            BukuCloud calculates SST based on the rates and rules you
            configure. We provide tools to generate the Sales Tax report and
            (when shipped) submit e-Invoices to LHDN MyInvois on your behalf.{" "}
            <strong>
              You remain responsible for the accuracy of your tax filings,
              the timeliness of your submissions, and the correctness of
              your TIN, SST registration and other LHDN identifiers.
            </strong>{" "}
            BukuCloud is not a substitute for professional tax advice.
          </p>
          <p>
            We are not liable for penalties imposed by LHDN, the Royal
            Malaysian Customs Department, or any other regulator, for
            filings made through BukuCloud.
          </p>
        </LegalSection>

        <LegalSection id="ip" title="Intellectual property" number="9">
          <p>
            The BukuCloud software, brand, logos and marketing copy are owned
            by {COMPANY_NAME} and are protected by Malaysian and
            international copyright, trademark and other IP laws. We grant
            you a non-exclusive, non-transferable, revocable licence to use
            the service for your business while your subscription is active.
          </p>
          <p>
            Self-hosted licences are governed by a separate licence agreement
            signed at deployment.
          </p>
        </LegalSection>

        <LegalSection
          id="warranty"
          title="Warranties & disclaimers"
          number="10"
        >
          <p>
            We provide BukuCloud on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. To the maximum extent permitted by law,
            we disclaim all warranties — express, implied, or statutory —
            including merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            We do not warrant that the service will be uninterrupted,
            error-free, or that defects will be corrected. We do not (yet)
            offer a contractual uptime SLA on standard SaaS plans.
            Enterprise customers can negotiate an SLA in writing.
          </p>
        </LegalSection>

        <LegalSection
          id="liability"
          title="Limitation of liability"
          number="11"
        >
          <p>
            To the maximum extent permitted by Malaysian law, our total
            aggregate liability arising out of or related to these Terms or
            your use of BukuCloud is limited to{" "}
            <strong>the fees you paid us in the 12 months</strong> preceding
            the event giving rise to the claim.
          </p>
          <p>
            We are not liable for indirect, incidental, special,
            consequential, or punitive damages, including loss of profits,
            revenue, data, goodwill, or business opportunity, even if we
            were advised of the possibility.
          </p>
          <p>
            Nothing in these Terms limits liability for fraud, gross
            negligence, or anything that cannot lawfully be limited.
          </p>
        </LegalSection>

        <LegalSection id="termination" title="Termination" number="12">
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              <strong>You can cancel</strong> at any time from{" "}
              <code className="font-mono text-[13px]">Settings → Plan</code>.
              Your subscription stays active until the end of the paid
              period.
            </li>
            <li>
              <strong>We can suspend or terminate</strong> if you breach
              these Terms or the Acceptable Use policy, or if your payment
              fails after reminders.
            </li>
            <li>
              <strong>On termination</strong> we keep your data read-only
              for 30 days so you can export, then we follow the retention
              rules in the Privacy Policy.
            </li>
            <li>
              Sections 5 (Your data), 9 (IP), 10 (Warranties), 11
              (Liability), 13 (Governing law) and 15 (Contact) survive
              termination.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="law" title="Governing law" number="13">
          <p>
            These Terms are governed by the laws of Malaysia. The courts of
            Kuala Lumpur have exclusive jurisdiction over any dispute,
            unless mandatory consumer-protection law in your jurisdiction
            says otherwise.
          </p>
        </LegalSection>

        <LegalSection
          id="changes"
          title="Changes to these terms"
          number="14"
        >
          <p>
            We may update these Terms. Material changes are notified by
            email and a banner inside the app at least 14 days before
            taking effect. If you continue to use BukuCloud after the
            effective date, you accept the updated Terms.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact" number="15">
          <p>
            {COMPANY_NAME} ({COMPANY_REGISTRATION}), {COMPANY_ADDRESS}.
          </p>
          <p>
            Legal:{" "}
            <a
              className="font-semibold text-accent"
              href={`mailto:${LEGAL_EMAIL}`}
            >
              {LEGAL_EMAIL}
            </a>
            . Support:{" "}
            <a
              className="font-semibold text-accent"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </LegalSection>
      </LegalLayout>
      <LegalContact
        title="Need a signed copy or have questions about a clause?"
        body="Drop us a line at"
        email={LEGAL_EMAIL}
      />
    </>
  );
}

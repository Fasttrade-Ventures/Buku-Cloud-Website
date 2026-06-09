import type { Metadata } from "next";
import {
  LegalContact,
  LegalHero,
  LegalLayout,
  LegalSection,
} from "@/components/legal-shell";
import {
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  DPO_EMAIL,
  SUBPROCESSORS,
} from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Data Processing Agreement (DPA)",
  description:
    "How BukuCloud processes your customers' personal data on your behalf — your role as data controller, our role as processor under Malaysia's PDPA. Counter-signed copies available for Enterprise.",
  path: "/dpa",
  keywords: [
    "Data Processing Agreement Malaysia",
    "DPA template Malaysia",
    "PDPA processor agreement",
  ],
});

const toc = [
  { id: "summary", label: "Plain-English summary" },
  { id: "parties", label: "1. Parties & roles" },
  { id: "scope", label: "2. Scope of processing" },
  { id: "instructions", label: "3. Customer instructions" },
  { id: "confidentiality", label: "4. Confidentiality" },
  { id: "security", label: "5. Security measures" },
  { id: "subprocessors", label: "6. Sub-processors" },
  { id: "rights", label: "7. Data-subject rights" },
  { id: "breach", label: "8. Breach notification" },
  { id: "audit", label: "9. Audit rights" },
  { id: "transfers", label: "10. International transfers" },
  { id: "deletion", label: "11. Return / deletion" },
  { id: "liability", label: "12. Liability" },
  { id: "term", label: "13. Term & termination" },
  { id: "contact", label: "14. Contact" },
];

export default function DPAPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
          { name: "Data Processing Agreement", href: "/dpa" },
        ]}
      />
      <LegalHero
        title="Data Processing Agreement"
        badge="B2B"
        description={
          <>
            How {COMPANY_NAME} processes your customers&apos; personal data on
            your behalf when you use BukuCloud — your obligations as the data
            controller, our obligations as the data processor, and the
            specific safeguards we apply under Malaysia&apos;s Personal Data
            Protection Act 2010 (PDPA).
          </>
        }
      />
      <LegalLayout toc={toc}>
        <LegalSection id="summary" title="Plain-English summary" number="">
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              When you store your customers&apos; details inside BukuCloud,{" "}
              <strong>you are the data controller</strong> (you decide what
              data goes in, why, and for how long) and{" "}
              <strong>BukuCloud is the data processor</strong> (we host it,
              keep it secure, and only do what your contract with us asks
              us to do).
            </li>
            <li>
              We follow your instructions, encrypt the data, run a per-tenant
              database, log access, and notify you within 72 hours of any
              breach affecting your tenant.
            </li>
            <li>
              We use the sub-processors listed in section 6. New
              sub-processors are notified at least 30 days before they go
              live so you can object.
            </li>
            <li>
              On termination, we keep your data read-only for 30 days, then
              follow the deletion rules in section 11.
            </li>
            <li>
              This DPA is part of the{" "}
              <a className="font-semibold text-accent" href="/terms">
                Terms of Service
              </a>{" "}
              and applies automatically to every paying customer. Enterprise
              customers can request a counter-signed version.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="parties" title="Parties & roles" number="1">
          <p>
            This Data Processing Agreement (&ldquo;DPA&rdquo;) is between:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              <strong>{COMPANY_NAME}</strong> ({COMPANY_REGISTRATION})
              (&ldquo;BukuCloud&rdquo;, the &ldquo;Processor&rdquo;); and
            </li>
            <li>
              The customer who has signed up for or subscribed to a
              BukuCloud plan (&ldquo;Customer&rdquo;, the
              &ldquo;Controller&rdquo;).
            </li>
          </ul>
          <p>
            For the purposes of PDPA 2010, you are the &ldquo;data
            user&rdquo; (controller) and we are the &ldquo;data
            processor&rdquo;. The capitalised terms not defined here have
            the meaning given in PDPA 2010.
          </p>
        </LegalSection>

        <LegalSection id="scope" title="Scope of processing" number="2">
          <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
            <table className="w-full text-left text-[13px]">
              <tbody>
                <ScopeRow
                  label="Subject matter"
                  value="Provision of the BukuCloud cloud-accounting platform to the Controller."
                />
                <ScopeRow
                  label="Duration"
                  value="For the term of the Customer's subscription, plus any post-termination read-only window per section 11."
                />
                <ScopeRow
                  label="Nature & purpose"
                  value="Storing, organising, transmitting and reporting on accounting data the Controller enters or uploads."
                />
                <ScopeRow
                  label="Categories of data subjects"
                  value="Customer's staff and end-users (Controller's own users); Customer's customers, suppliers and contacts (third parties recorded by the Controller)."
                />
                <ScopeRow
                  label="Categories of personal data"
                  value="Names, emails, phone numbers, addresses, TIN, SST registration numbers, banking details, transaction history, uploaded receipts and supporting documents."
                />
                <ScopeRow
                  label="Special-category data"
                  value="None — BukuCloud is not designed for health, biometric, or criminal-record data."
                  last
                />
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection
          id="instructions"
          title="Customer instructions"
          number="3"
        >
          <p>
            We process Customer Personal Data only on the documented
            instructions of the Customer, including (a) as set out in the
            Terms of Service and this DPA, (b) as configured in your tenant
            settings, and (c) as required by law. If we&apos;re required by
            law to process data outside your instructions, we will notify
            you unless that law prohibits notification.
          </p>
        </LegalSection>

        <LegalSection id="confidentiality" title="Confidentiality" number="4">
          <p>
            All BukuCloud personnel with access to Customer Personal Data
            are bound by confidentiality obligations that survive employment
            or engagement. Access is granted on a least-privilege,
            need-to-know basis and is logged.
          </p>
        </LegalSection>

        <LegalSection id="security" title="Security measures" number="5">
          <p>
            We implement appropriate technical and organisational measures
            to protect Customer Personal Data, including:
          </p>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              <strong>Per-tenant database isolation</strong> — each Customer
              gets its own MySQL database (Stancl Tenancy).
            </li>
            <li>
              <strong>Encryption</strong> — TLS 1.2+ in transit, AES-256
              at rest.
            </li>
            <li>
              <strong>Authentication</strong> — bcrypt password hashing,
              optional TOTP two-factor on every plan, tenant-admin toggle to
              require 2FA for all staff.
            </li>
            <li>
              <strong>Access control</strong> — role-based permissions
              (Spatie), per-tenant audit log of every administrative action.
            </li>
            <li>
              <strong>File storage</strong> — uploaded receipts on private
              S3 with tenant-prefixed paths and short-lived signed URLs;
              EXIF/GPS metadata stripped on upload.
            </li>
            <li>
              <strong>Logging hygiene</strong> — sensitive fields
              (passwords, API keys, payment data) are redacted from
              application logs by a Monolog scrubber.
            </li>
            <li>
              <strong>Backups</strong> — daily encrypted snapshots retained
              for 30 days.
            </li>
            <li>
              <strong>Vulnerability management</strong> — dependency
              updates, code review, and a published responsible-disclosure
              channel.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="subprocessors" title="Sub-processors" number="6">
          <p>
            The Customer authorises BukuCloud to engage the sub-processors
            listed below. We will give the Customer at least{" "}
            <strong>30 days&apos; notice</strong> before adding or replacing
            a sub-processor (notice is published on this page and emailed
            to the account&apos;s billing contact). The Customer can object
            in writing within the notice period; if we cannot accommodate
            the objection, the Customer may terminate the affected
            subscription with a pro-rata refund.
          </p>
          <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
            <table className="w-full text-left text-[13px]">
              <thead className="border-b border-border bg-surface-alt">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">
                    Sub-processor
                  </th>
                  <th className="px-4 py-3 font-semibold text-ink">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-ink">Location</th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((s) => (
                  <tr
                    key={s.name}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="px-4 py-3 font-semibold text-ink">
                      {s.name}
                    </td>
                    <td className="px-4 py-3 text-ink-muted">{s.purpose}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-ink-muted">
                      {s.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection id="rights" title="Data-subject rights" number="7">
          <p>
            Customers can fulfil most data-subject requests directly inside
            BukuCloud (export from{" "}
            <code className="font-mono text-[13px]">
              Settings → Data export
            </code>
            , correction by editing customer / supplier records, erasure via{" "}
            <code className="font-mono text-[13px]">
              Settings → Delete account
            </code>{" "}
            for the tenant or per-record where supported).
          </p>
          <p>
            If a data subject contacts us directly with a request that
            relates to the Customer&apos;s tenant, we will (a) notify the
            Customer without undue delay, and (b) not respond on the
            Customer&apos;s behalf unless the Customer instructs us to.
            Where reasonably possible, we provide tools or assistance for
            the Customer to respond within statutory timeframes.
          </p>
        </LegalSection>

        <LegalSection
          id="breach"
          title="Breach notification"
          number="8"
        >
          <p>
            If we become aware of a personal data breach that affects the
            Customer&apos;s tenant, we will notify the Customer without
            undue delay and within{" "}
            <strong>72 hours</strong> of becoming aware. The notification
            will include (where known): the nature of the breach, the
            categories and approximate volumes of data and data subjects
            affected, the likely consequences, and the measures taken or
            proposed to address it.
          </p>
          <p>
            We will cooperate with the Customer&apos;s reasonable
            requirements to investigate and remediate, including providing
            audit logs and access histories.
          </p>
        </LegalSection>

        <LegalSection id="audit" title="Audit rights" number="9">
          <p>
            On reasonable written notice (and not more than once per
            calendar year, unless following a breach), the Customer may
            request a written summary of our most recent security review,
            penetration-test results, and the controls described in
            section 5. For Enterprise customers, we will accommodate a
            scoped on-site or remote audit subject to confidentiality and
            reasonable cost-recovery for engineering time.
          </p>
        </LegalSection>

        <LegalSection
          id="transfers"
          title="International transfers"
          number="10"
        >
          <p>
            Some sub-processors are based outside Malaysia (see section 6).
            Where personal data is transferred to a country whose laws do
            not provide protection comparable to PDPA, we rely on the
            Section 129(2) PDPA exemptions and apply equivalent contractual
            safeguards.
          </p>
        </LegalSection>

        <LegalSection id="deletion" title="Return / deletion" number="11">
          <p>On termination of the Customer&apos;s subscription:</p>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>
              The tenant is moved to a read-only state for{" "}
              <strong>30 days</strong> so the Customer can export their
              data via{" "}
              <code className="font-mono text-[13px]">
                Settings → Data export
              </code>
              .
            </li>
            <li>
              After the read-only window, the Customer can request a hard
              delete (right to erasure). We then drop the tenant database,
              delete the tenant&apos;s S3 prefix, and redact PII in any
              residual audit-log rows.
            </li>
            <li>
              Financial records are retained for 7 years to satisfy the
              Income Tax Act 1967, with personally-identifying fields
              redacted on erasure (per PDPA / tax-law balance).
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="liability" title="Liability" number="12">
          <p>
            Each party&apos;s liability under this DPA is subject to the
            limitations set out in the Terms of Service. Nothing in this
            DPA limits any liability that cannot lawfully be limited.
          </p>
        </LegalSection>

        <LegalSection id="term" title="Term & termination" number="13">
          <p>
            This DPA takes effect on the Customer&apos;s first paid
            subscription and remains in force for as long as we process
            Customer Personal Data. The deletion rules in section 11 and
            the audit / liability obligations survive termination.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact" number="14">
          <p>
            For DPA-related queries, including a counter-signed copy or a
            change of controller, contact our DPO at{" "}
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
        title="Need a counter-signed DPA for procurement?"
        body="Email our DPO at"
        email={DPO_EMAIL}
      />
    </>
  );
}

function ScopeRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <tr className={last ? "" : "border-b border-border"}>
      <th className="w-[42%] bg-surface-alt px-4 py-3 text-left align-top font-semibold text-ink">
        {label}
      </th>
      <td className="px-4 py-3 text-ink-muted">{value}</td>
    </tr>
  );
}

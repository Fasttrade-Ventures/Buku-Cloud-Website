"use client";

import { useEffect, useState } from "react";
import { LegalLayout, LegalSection } from "@/components/legal-shell";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  DPO_EMAIL,
  PRIVACY_EMAIL,
  SUBPROCESSORS,
} from "@/lib/legal";
import { useI18n } from "./i18n-provider";

const tocEN = [
  { id: "overview", label: "1. Who we are" },
  { id: "data-we-collect", label: "2. Data we collect" },
  { id: "how-we-use-it", label: "3. How we use it" },
  { id: "lawful-basis", label: "4. Lawful basis" },
  { id: "subprocessors", label: "5. Sub-processors" },
  { id: "where-stored", label: "6. Where it's stored" },
  { id: "retention", label: "7. Retention" },
  { id: "your-rights", label: "8. Your rights (PDPA)" },
  { id: "security", label: "9. Security" },
  { id: "international", label: "10. International transfers" },
  { id: "children", label: "11. Children" },
  { id: "changes", label: "12. Changes to this policy" },
  { id: "contact", label: "13. Contact / DPO" },
];

const tocBM = [
  { id: "overview", label: "1. Tentang kami" },
  { id: "data-we-collect", label: "2. Data yang dikumpul" },
  { id: "how-we-use-it", label: "3. Cara kami menggunakannya" },
  { id: "lawful-basis", label: "4. Asas perundangan" },
  { id: "subprocessors", label: "5. Pemproses pihak ketiga" },
  { id: "where-stored", label: "6. Di mana data disimpan" },
  { id: "retention", label: "7. Tempoh penyimpanan" },
  { id: "your-rights", label: "8. Hak anda (PDPA)" },
  { id: "security", label: "9. Keselamatan" },
  { id: "international", label: "10. Pemindahan antarabangsa" },
  { id: "children", label: "11. Kanak-kanak" },
  { id: "changes", label: "12. Perubahan dasar" },
  { id: "contact", label: "13. Hubungi kami / DPO" },
];

export function PrivacyContent() {
  const { locale, setLocale } = useI18n();
  const [lang, setLang] = useState<"en" | "bm">(locale);

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  function pick(next: "en" | "bm") {
    setLang(next);
    setLocale(next);
  }

  return (
    <>
      <div className="container-max -mt-10 pb-2 md:-mt-12">
        <div className="mx-auto inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1">
          <button
            type="button"
            onClick={() => pick("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              lang === "en"
                ? "bg-ink text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => pick("bm")}
            aria-pressed={lang === "bm"}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              lang === "bm"
                ? "bg-ink text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Bahasa Malaysia
          </button>
        </div>
      </div>
      <LegalLayout toc={lang === "en" ? tocEN : tocBM}>
        {lang === "en" ? <PrivacyEN /> : <PrivacyBM />}
      </LegalLayout>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <LegalSection id="overview" title="Who we are" number="1">
        <p>
          {COMPANY_NAME} (&ldquo;BukuCloud&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;), company registration {COMPANY_REGISTRATION},
          operates the BukuCloud cloud-accounting platform. This policy
          explains what personal data we collect when you use the platform
          (the website at <code className="font-mono text-[13px]">bukucloud.com</code>{" "}
          and the application), how we use it, and your rights under
          Malaysia&apos;s Personal Data Protection Act 2010 (PDPA) and its
          2024 amendments.
        </p>
        <p>
          Registered office:{" "}
          <span className="text-ink">{COMPANY_ADDRESS}</span>.
        </p>
      </LegalSection>

      <LegalSection
        id="data-we-collect"
        title="Data we collect"
        number="2"
      >
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Account data:</strong> name, email, phone number, role,
            password (hashed only — we never see your plain-text password).
          </li>
          <li>
            <strong>Company data:</strong> business name, SSM / TIN / SST
            registration numbers, address, banking details for invoice
            display.
          </li>
          <li>
            <strong>Customer and supplier records you create:</strong> names,
            emails, phone numbers, addresses, financial transactions you
            choose to record.
          </li>
          <li>
            <strong>Receipts and invoices:</strong> images and PDFs you upload
            and the OCR line-items extracted from them.
          </li>
          <li>
            <strong>Payment data:</strong> processed by ToyyibPay. We store
            the bill ID, last 4 digits of the card, and the receipt — never
            your full card number or CVV.
          </li>
          <li>
            <strong>Usage telemetry:</strong> IP address, user-agent, login
            timestamps, audit log of actions taken inside your tenant.
          </li>
          <li>
            <strong>Support communications:</strong> emails, chat messages
            and any attachments you send when asking for help.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use-it" title="How we use it" number="3">
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>To provide the accounting software you signed up for.</li>
          <li>
            To send invoices, statements and reminders on your behalf to your
            customers.
          </li>
          <li>
            To run optical character recognition on receipts you upload —
            default is on-device Tesseract; Google Gemini is used only if your
            tenant explicitly enables it in settings.
          </li>
          <li>
            To process subscription payments through ToyyibPay and issue you
            a tax invoice.
          </li>
          <li>
            To submit e-Invoices to LHDN MyInvois on your behalf, when you
            enable that feature.
          </li>
          <li>
            To meet legal record-keeping obligations under the Income Tax Act
            1967 (7 years for financial records).
          </li>
          <li>
            To investigate suspected security incidents, fraud, or abuse.
          </li>
          <li>
            To improve the product — aggregate, de-identified usage analytics
            only.
          </li>
        </ul>
        <p>
          We <strong>do not</strong> sell your personal data, and we do not
          use your accounting data to train any third-party machine-learning
          model.
        </p>
      </LegalSection>

      <LegalSection id="lawful-basis" title="Lawful basis" number="4">
        <p>
          Under PDPA, we process your personal data on the following bases:
          your <strong>consent</strong> (collected at sign-up via a checkbox
          and stored with timestamp + version); the <strong>performance of a
          contract</strong> (the subscription you bought); compliance with{" "}
          <strong>Malaysian law</strong> (Income Tax Act, MyInvois rules); and
          our <strong>legitimate interest</strong> in keeping the platform
          secure and improving it. You can withdraw consent at any time by
          contacting our DPO at{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="subprocessors" title="Sub-processors" number="5">
        <p>
          We share the minimum data necessary with these vendors. Each
          sub-processor is bound by a written agreement with confidentiality
          and security obligations no weaker than this policy.
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
                  <td className="px-4 py-3 font-semibold text-ink">{s.name}</td>
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

      <LegalSection id="where-stored" title="Where it's stored" number="6">
        <p>
          All accounting data is stored in AWS Asia Pacific (Singapore region).
          Each tenant gets its own logically isolated database. Data in
          transit uses TLS 1.2+. Data at rest is encrypted with AES-256.
          Daily encrypted backups are retained for 30 days.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="Retention" number="7">
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Active account data</strong> — kept for as long as your
            account is active.
          </li>
          <li>
            <strong>Financial records</strong> (invoices, bills, journal
            entries) — kept for 7 years after account closure to satisfy the
            Income Tax Act 1967, with personally identifying fields (customer
            / supplier names, contacts) redacted on erasure.
          </li>
          <li>
            <strong>Audit logs</strong> — 18 months.
          </li>
          <li>
            <strong>Failed payment attempts</strong> — 30 days.
          </li>
          <li>
            <strong>Receipt files</strong> — follow your tenant&apos;s
            retention policy (configurable per tenant).
          </li>
          <li>
            <strong>Aggregated, de-identified analytics</strong> — may be
            retained indefinitely.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="Your rights (PDPA)" number="8">
        <p>You have the following rights under PDPA:</p>
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Access</strong> — download a full copy of your data from{" "}
            <code className="font-mono text-[13px]">
              Settings → Data export
            </code>
            . You can request one export every 24 hours.
          </li>
          <li>
            <strong>Correction</strong> — edit your profile and company
            information at any time inside the app.
          </li>
          <li>
            <strong>Erasure</strong> — request account deletion from{" "}
            <code className="font-mono text-[13px]">
              Settings → Delete account
            </code>
            . There is a 30-day cooling-off period before hard deletion.
          </li>
          <li>
            <strong>Withdraw consent</strong> — email{" "}
            <a
              className="font-semibold text-accent hover:text-accent-dark"
              href={`mailto:${DPO_EMAIL}`}
            >
              {DPO_EMAIL}
            </a>
            .
          </li>
          <li>
            <strong>Restrict / object to processing</strong> — email the DPO
            with the specific processing activity you want paused.
          </li>
          <li>
            <strong>Lodge a complaint</strong> — with the Personal Data
            Protection Department (Jabatan Perlindungan Data Peribadi,
            Malaysia).
          </li>
        </ul>
        <p>
          We respond to all data-subject requests within{" "}
          <strong>21 days</strong>, the statutory PDPA window.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Security" number="9">
        <p>
          Data is transmitted over TLS, stored in encrypted-at-rest databases
          (AES-256) and isolated per tenant (each company gets its own
          database — Stancl Tenancy). Passwords are hashed using bcrypt.
          Receipt files are stored on private S3 with tenant-prefixed paths
          and short-lived signed URLs. Two-factor authentication (TOTP) is
          available on every plan; tenant administrators can require it for
          all staff. Logs are scrubbed of sensitive fields before being
          written. Suspected breaches are reported to the PDPC within 72
          hours where required.
        </p>
      </LegalSection>

      <LegalSection
        id="international"
        title="International transfers"
        number="10"
      >
        <p>
          Some of our sub-processors are based outside Malaysia (e.g. Postmark
          in the United States). Where we transfer your personal data to a
          country whose laws do not provide protection comparable to PDPA, we
          rely on Section 129(2) PDPA exemptions (consent, performance of a
          contract, or our legitimate interest with appropriate safeguards).
          The current list and locations are in section 5.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children" number="11">
        <p>
          BukuCloud is a business product. We do not knowingly collect data
          from children under 13. If you believe we have, contact{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>{" "}
          and we will delete it.
        </p>
      </LegalSection>

      <LegalSection
        id="changes"
        title="Changes to this policy"
        number="12"
      >
        <p>
          We will publish material changes here and bump the version number
          at the top of this page. If a change affects how we process your
          data, we will email you and prompt you to re-accept on your next
          login.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact / DPO" number="13">
        <p>
          Data Protection Officer:{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>
          . General privacy enquiries:{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${PRIVACY_EMAIL}`}
          >
            {PRIVACY_EMAIL}
          </a>
          .
        </p>
        <p>
          Postal address: {COMPANY_NAME}, {COMPANY_ADDRESS}.
        </p>
        <p>
          You also have the right to lodge a complaint with the Personal Data
          Protection Department (Jabatan Perlindungan Data Peribadi),
          Ministry of Communications, Malaysia.
        </p>
      </LegalSection>
    </>
  );
}

function PrivacyBM() {
  return (
    <>
      <LegalSection id="overview" title="Tentang kami" number="1">
        <p>
          {COMPANY_NAME} (&ldquo;BukuCloud&rdquo;, &ldquo;kami&rdquo;),
          pendaftaran syarikat {COMPANY_REGISTRATION}, mengendalikan platform
          perakaunan awan BukuCloud. Dasar ini menerangkan data peribadi yang
          kami kumpul apabila anda menggunakan platform (laman web di{" "}
          <code className="font-mono text-[13px]">bukucloud.com</code> dan
          aplikasi), cara kami menggunakannya, dan hak anda di bawah Akta
          Perlindungan Data Peribadi 2010 (PDPA) Malaysia berserta pindaan
          2024.
        </p>
        <p>
          Pejabat berdaftar:{" "}
          <span className="text-ink">{COMPANY_ADDRESS}</span>.
        </p>
      </LegalSection>

      <LegalSection
        id="data-we-collect"
        title="Data yang dikumpul"
        number="2"
      >
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Data akaun:</strong> nama, e-mel, nombor telefon, peranan,
            kata laluan (disimpan secara hash sahaja).
          </li>
          <li>
            <strong>Data syarikat:</strong> nama perniagaan, nombor pendaftaran
            SSM / TIN / SST, alamat, butiran perbankan untuk paparan invois.
          </li>
          <li>
            <strong>Rekod pelanggan dan pembekal:</strong> nama, e-mel,
            telefon, alamat, transaksi kewangan yang anda rekodkan.
          </li>
          <li>
            <strong>Resit dan invois:</strong> imej dan PDF yang dimuat naik
            dan data baris OCR yang diekstrak.
          </li>
          <li>
            <strong>Data bayaran:</strong> diproses oleh ToyyibPay. Kami
            menyimpan ID bil, 4 digit terakhir kad dan resit — tidak pernah
            nombor kad penuh atau CVV.
          </li>
          <li>
            <strong>Telemetri penggunaan:</strong> alamat IP, ejen pengguna,
            cap masa log masuk, log audit tindakan.
          </li>
          <li>
            <strong>Komunikasi sokongan:</strong> e-mel, mesej sembang dan
            sebarang lampiran yang anda hantar.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="how-we-use-it"
        title="Cara kami menggunakannya"
        number="3"
      >
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>Untuk menyediakan perisian perakaunan yang anda daftarkan.</li>
          <li>
            Untuk menghantar invois, penyata, dan peringatan kepada pelanggan
            anda bagi pihak anda.
          </li>
          <li>
            Untuk menjalankan OCR pada resit yang anda muat naik (lalai:
            Tesseract tempatan; Google Gemini hanya jika tenant anda
            mengaktifkannya).
          </li>
          <li>Untuk memproses bayaran langganan melalui ToyyibPay.</li>
          <li>
            Untuk menghantar e-Invois ke LHDN MyInvois bagi pihak anda apabila
            ciri ini diaktifkan.
          </li>
          <li>
            Untuk memenuhi obligasi penyimpanan rekod di bawah Akta Cukai
            Pendapatan 1967 (7 tahun bagi rekod kewangan).
          </li>
          <li>
            Untuk menyiasat insiden keselamatan, penipuan, atau penyalahgunaan
            yang disyaki.
          </li>
        </ul>
        <p>
          Kami <strong>tidak</strong> menjual data peribadi anda dan kami
          tidak menggunakan data perakaunan anda untuk melatih sebarang model
          pembelajaran mesin pihak ketiga.
        </p>
      </LegalSection>

      <LegalSection id="lawful-basis" title="Asas perundangan" number="4">
        <p>
          Di bawah PDPA, kami memproses data peribadi anda berdasarkan{" "}
          <strong>kebenaran</strong> anda (dikumpul semasa pendaftaran);{" "}
          <strong>pelaksanaan kontrak</strong> (langganan yang anda beli);
          pematuhan kepada <strong>undang-undang Malaysia</strong> (Akta Cukai
          Pendapatan, peraturan MyInvois); dan{" "}
          <strong>kepentingan sah</strong> kami untuk memastikan platform
          selamat dan ditambah baik. Anda boleh menarik balik kebenaran pada
          bila-bila masa di{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection
        id="subprocessors"
        title="Pemproses pihak ketiga"
        number="5"
      >
        <p>
          Kami berkongsi data minimum yang diperlukan dengan vendor berikut.
          Setiap pemproses pihak ketiga terikat dengan perjanjian bertulis
          yang memerlukan kerahsiaan dan obligasi keselamatan tidak kurang
          ketat daripada dasar ini.
        </p>
        <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
          <table className="w-full text-left text-[13px]">
            <thead className="border-b border-border bg-surface-alt">
              <tr>
                <th className="px-4 py-3 font-semibold text-ink">Pemproses</th>
                <th className="px-4 py-3 font-semibold text-ink">Tujuan</th>
                <th className="px-4 py-3 font-semibold text-ink">Lokasi</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((s) => (
                <tr
                  key={s.name}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-4 py-3 font-semibold text-ink">{s.name}</td>
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

      <LegalSection
        id="where-stored"
        title="Di mana data disimpan"
        number="6"
      >
        <p>
          Semua data perakaunan disimpan di AWS Asia Pasifik (rantau
          Singapura). Setiap tenant mempunyai pangkalan data berasingan secara
          logik. Data semasa penghantaran menggunakan TLS 1.2+. Data semasa
          rehat disulitkan dengan AES-256. Sandaran disulitkan harian
          disimpan selama 30 hari.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="Tempoh penyimpanan" number="7">
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Data akaun aktif</strong> — disimpan selagi akaun anda
            aktif.
          </li>
          <li>
            <strong>Rekod kewangan</strong> (invois, bil, entri jurnal) —
            disimpan selama 7 tahun selepas akaun ditutup untuk memenuhi Akta
            Cukai Pendapatan 1967, dengan medan pengenalan diri ditapis.
          </li>
          <li>
            <strong>Log audit</strong> — 18 bulan.
          </li>
          <li>
            <strong>Cubaan bayaran gagal</strong> — 30 hari.
          </li>
          <li>
            <strong>Fail resit</strong> — mengikut dasar penyimpanan tenant
            anda.
          </li>
          <li>
            <strong>Analitik agregat tanpa pengenalan</strong> — boleh
            disimpan secara berterusan.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="your-rights"
        title="Hak anda (PDPA)"
        number="8"
      >
        <p>Anda mempunyai hak berikut di bawah PDPA:</p>
        <ul className="ml-5 flex list-disc flex-col gap-2">
          <li>
            <strong>Akses</strong> — muat turun salinan data anda dari{" "}
            <code className="font-mono text-[13px]">
              Tetapan → Eksport data
            </code>
            . Satu eksport setiap 24 jam.
          </li>
          <li>
            <strong>Pembetulan</strong> — kemas kini profil dan maklumat
            syarikat anda di dalam aplikasi pada bila-bila masa.
          </li>
          <li>
            <strong>Pemadaman</strong> — minta pemadaman akaun dari{" "}
            <code className="font-mono text-[13px]">
              Tetapan → Padam akaun
            </code>
            . Tempoh bertenang 30 hari sebelum pemadaman kekal.
          </li>
          <li>
            <strong>Tarik balik kebenaran</strong> — e-mel{" "}
            <a
              className="font-semibold text-accent hover:text-accent-dark"
              href={`mailto:${DPO_EMAIL}`}
            >
              {DPO_EMAIL}
            </a>
            .
          </li>
          <li>
            <strong>Hadkan / bantah pemprosesan</strong> — e-mel DPO dengan
            aktiviti pemprosesan yang anda mahu hentikan.
          </li>
          <li>
            <strong>Buat aduan</strong> — kepada Jabatan Perlindungan Data
            Peribadi, Malaysia.
          </li>
        </ul>
        <p>
          Kami menjawab semua permintaan subjek data dalam tempoh{" "}
          <strong>21 hari</strong> seperti yang ditetapkan oleh PDPA.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Keselamatan" number="9">
        <p>
          Data dihantar melalui TLS, disimpan dalam pangkalan data yang
          disulitkan (AES-256), dan diasingkan setiap tenant. Kata laluan
          disimpan menggunakan bcrypt. Fail resit disimpan secara peribadi
          (S3 dengan laluan berprefiks tenant) dan dilayan hanya melalui URL
          yang ditandatangani sementara. Pengesahan dua faktor (TOTP) tersedia
          pada semua pelan. Pencerobohan yang disyaki dilaporkan kepada PDPC
          dalam 72 jam jika perlu.
        </p>
      </LegalSection>

      <LegalSection
        id="international"
        title="Pemindahan antarabangsa"
        number="10"
      >
        <p>
          Sebahagian pemproses pihak ketiga kami berpangkalan di luar Malaysia
          (cth. Postmark di Amerika Syarikat). Apabila kami memindahkan data
          peribadi anda ke negara yang tidak mempunyai perlindungan setanding
          dengan PDPA, kami bergantung pada pengecualian Seksyen 129(2) PDPA
          (kebenaran, pelaksanaan kontrak, atau kepentingan sah dengan
          perlindungan yang sesuai).
        </p>
      </LegalSection>

      <LegalSection id="children" title="Kanak-kanak" number="11">
        <p>
          BukuCloud ialah produk perniagaan. Kami tidak mengumpul data daripada
          kanak-kanak di bawah umur 13 tahun secara sengaja. Jika anda percaya
          kami pernah berbuat demikian, hubungi{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>{" "}
          dan kami akan padamkannya.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Perubahan dasar" number="12">
        <p>
          Kami akan menerbitkan perubahan material di sini dan menaikkan
          nombor versi di bahagian atas halaman. Jika perubahan menjejaskan
          cara kami memproses data anda, kami akan menghantar e-mel kepada
          anda dan meminta penerimaan semula pada log masuk seterusnya.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Hubungi kami / DPO" number="13">
        <p>
          Pegawai Perlindungan Data:{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${DPO_EMAIL}`}
          >
            {DPO_EMAIL}
          </a>
          . Pertanyaan privasi am:{" "}
          <a
            className="font-semibold text-accent hover:text-accent-dark"
            href={`mailto:${PRIVACY_EMAIL}`}
          >
            {PRIVACY_EMAIL}
          </a>
          .
        </p>
        <p>
          Alamat surat: {COMPANY_NAME}, {COMPANY_ADDRESS}.
        </p>
      </LegalSection>
    </>
  );
}

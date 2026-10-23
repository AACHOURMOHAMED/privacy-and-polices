import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Prayer Lock (قفل الصلاة)",
  description:
    "Support and frequently asked questions for Prayer Lock (قفل الصلاة), a prayer reminder and app-blocking app by Mohamed Aachour.",
};

const EMAIL = "mohamedaachour511@gmail.com";

export default function Support() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Support
          </h1>
          <p className="mt-2 text-lg text-emerald-100">
            Prayer Lock (قفل الصلاة)
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href="#arabic" className="text-white underline hover:text-emerald-100">
              العربية
            </a>
            <a href="/privacy-policy" className="text-white underline hover:text-emerald-100">
              Privacy Policy
            </a>
          </div>
        </div>
      </header>

      {/* English */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Section title="About the app">
          <p>
            Prayer Lock reminds you of each prayer time where you are. During
            prayer time it can block the apps you choose until you have prayed.
          </p>
        </Section>

        <Section title="Contact">
          <ContactBox />
        </Section>

        <Section title="Frequently asked questions">
          <Faq q="How do I stop or turn off app blocking?">
            <p>
              <strong>iPhone:</strong> open Settings &gt; Screen Time and turn
              off access for Prayer Lock (or simply delete the app). The apps
              you chose are unblocked right away.
            </p>
            <p>
              <strong>Android:</strong> open Settings &gt; Apps &gt; Special
              app access &gt; Usage access, choose Prayer Lock and turn it off.
              Blocking stops and the rest of the app keeps working.
            </p>
          </Faq>
          <Faq q="Why are my prayer times different from my local mosque?">
            <p>
              Prayer times depend on the calculation method, the Asr school
              and your location. In the app, open Settings and change the
              calculation method to the one used in your country, choose your
              Asr school, or pick your city manually instead of using GPS. You
              can also adjust each prayer by a few minutes.
            </p>
          </Faq>
          <Faq q="How do I unlock my apps early?">
            <p>
              Tap <strong>&quot;I&apos;ve Prayed&quot;</strong> on the prayer
              lock screen once you have prayed. Your apps open again straight
              away.
            </p>
          </Faq>
          <Faq q="How do I delete all my data?">
            <p>
              Open Settings in the app and tap{" "}
              <strong>&quot;Reset All Data&quot;</strong>. Everything Prayer
              Lock stored on your phone is deleted. Uninstalling the app
              removes it too. We do not keep any copy of your data.
            </p>
          </Faq>
          <Faq q="Does Prayer Lock cost anything or show ads?">
            <p>
              No. Prayer Lock is free, with no ads, no accounts and no
              in-app purchases.
            </p>
          </Faq>
        </Section>

        <p className="mt-10 text-gray-700">
          Read how the app handles your data in the{" "}
          <a href="/privacy-policy" className="text-emerald-700 underline hover:text-emerald-900">
            Privacy Policy
          </a>
          .
        </p>
      </main>

      {/* Arabic */}
      <div id="arabic" dir="rtl" lang="ar" className="border-t-4 border-emerald-700 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            الدعم
          </h1>
          <p className="mt-2 text-lg text-emerald-800">قفل الصلاة (Prayer Lock)</p>

          <div className="mt-10">
            <Section title="عن التطبيق">
              <p>
                يذكّرك قفل الصلاة بوقت كل صلاة في مكانك. وأثناء وقت الصلاة
                يمكنه حجب التطبيقات التي تختارها حتى تصلّي.
              </p>
            </Section>

            <Section title="التواصل">
              <ContactBox arabic />
            </Section>

            <Section title="أسئلة شائعة">
              <Faq q="كيف أوقف حجب التطبيقات؟">
                <p>
                  <strong>آيفون:</strong> افتح الإعدادات &gt; مدة استخدام
                  الجهاز وأوقف الوصول لتطبيق قفل الصلاة (أو احذف التطبيق).
                  تُفتح التطبيقات التي اخترتها فوراً.
                </p>
                <p>
                  <strong>أندرويد:</strong> افتح الإعدادات &gt; التطبيقات &gt;
                  الوصول الخاص للتطبيقات &gt; الوصول إلى بيانات الاستخدام،
                  واختر قفل الصلاة وأوقفه. يتوقف الحجب وتستمر بقية ميزات
                  التطبيق.
                </p>
              </Faq>
              <Faq q="لماذا تختلف أوقات الصلاة عن مسجدي؟">
                <p>
                  تعتمد الأوقات على طريقة الحساب والمذهب في صلاة العصر وموقعك.
                  افتح الإعدادات في التطبيق وغيّر طريقة الحساب إلى المعتمدة في
                  بلدك، أو اختر مذهب العصر، أو اختر مدينتك يدوياً بدلاً من GPS.
                  ويمكنك أيضاً تعديل كل صلاة بدقائق.
                </p>
              </Faq>
              <Faq q="كيف أفتح تطبيقاتي قبل انتهاء القفل؟">
                <p>
                  اضغط <strong>«صليت»</strong> في شاشة قفل الصلاة بعد أن تصلّي،
                  فتُفتح تطبيقاتك مباشرة.
                </p>
              </Faq>
              <Faq q="كيف أحذف كل بياناتي؟">
                <p>
                  افتح الإعدادات في التطبيق واضغط{" "}
                  <strong>«مسح جميع البيانات»</strong>. يُحذف كل ما خزّنه
                  التطبيق على هاتفك، وحذف التطبيق يزيلها أيضاً. لا نحتفظ بأي
                  نسخة من بياناتك.
                </p>
              </Faq>
              <Faq q="هل التطبيق مدفوع أو فيه إعلانات؟">
                <p>
                  لا. قفل الصلاة مجاني بلا إعلانات ولا حسابات ولا مشتريات داخل
                  التطبيق.
                </p>
              </Faq>
            </Section>

            <p className="mt-10 text-gray-700">
              اقرأ كيف يتعامل التطبيق مع بياناتك في{" "}
              <a href="/privacy-policy#arabic" className="text-emerald-700 underline hover:text-emerald-900">
                سياسة الخصوصية
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-3xl border-t border-gray-200 px-6 pt-8 pb-12 text-center text-sm text-gray-500">
        <p>&copy; 2026 Mohamed Aachour. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ─── Reusable Components ─── */

function ContactBox({ arabic = false }: { arabic?: boolean }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
      <p>
        <strong>{arabic ? "المطوّر:" : "Developer:"}</strong> Mohamed Aachour
      </p>
      <p>
        <strong>{arabic ? "البريد الإلكتروني:" : "Email:"}</strong>{" "}
        <a
          href={`mailto:${EMAIL}`}
          dir="ltr"
          className="text-emerald-700 underline hover:text-emerald-900"
        >
          {EMAIL}
        </a>
      </p>
      <p className="mt-2 text-sm text-gray-500">
        {arabic
          ? "نرد عادة خلال أيام قليلة."
          : "We usually reply within a few days."}
      </p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h3 className="text-lg font-semibold text-gray-800">{q}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

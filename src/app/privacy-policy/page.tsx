import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Prayer Lock (قفل الصلاة)",
  description:
    "Privacy Policy for Prayer Lock (قفل الصلاة), a Muslim prayer reminder and app-blocking application by Mohamed Aachour.",
};

const EMAIL = "mohamedaachour511@gmail.com";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-emerald-100">
            Prayer Lock (قفل الصلاة)
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-emerald-200">
            <span>
              <strong className="text-white">Last Updated:</strong> 23 October
              2026
            </span>
            <span>
              <strong className="text-white">Effective Date:</strong> 23
              October 2026
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href="#arabic" className="text-white underline hover:text-emerald-100">
              العربية
            </a>
            <a href="/support" className="text-white underline hover:text-emerald-100">
              Support
            </a>
          </div>
        </div>
      </header>

      {/* English */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Section number="1" title="Introduction">
          <p>
            This Privacy Policy explains how <strong>Mohamed Aachour</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;) handles information in the{" "}
            <strong>Prayer Lock</strong> (قفل الصلاة) app for Android and
            iPhone (&quot;the App&quot;). Prayer Lock reminds you of prayer
            times and can block the apps you choose during prayer time.
          </p>
        </Section>

        <Section number="2" title="Summary">
          <CalloutBox variant="green">
            <p>
              Prayer Lock has <strong>no accounts, no ads and no analytics</strong>.
              Your settings, chosen apps and prayer history are stored{" "}
              <strong>on your phone only</strong>. We do not run any server, we
              do not receive your data, and we never sell or share it.
            </p>
          </CalloutBox>
          <p>
            Prayer Lock makes no network requests, so nothing leaves your
            phone on iPhone or Android.
          </p>
        </Section>

        <Section number="3" title="Location">
          <p>
            Prayer Lock uses your phone&apos;s location{" "}
            <strong>only while the app is open</strong> to work out prayer
            times for where you are. It does not track your location in the
            background and does not keep a location history. Instead of GPS,
            you can choose a city manually.
          </p>
        </Section>

        <Section number="4" title="No network requests">
          <p>
            Prayer Lock makes <strong>no network requests</strong> on iPhone
            or Android. Prayer times are calculated entirely on your phone,
            and the App&apos;s fonts are built in. Nothing leaves your device.
          </p>
        </Section>

        <Section number="5" title="App blocking on Android (Usage access)">
          <PermissionBadge name="android.permission.PACKAGE_USAGE_STATS" />
          <p>
            To block the apps you chose during prayer time, Prayer Lock asks
            you to turn on Android&apos;s <strong>Usage access</strong> for the
            App. Before sending you to that setting, the App shows a screen
            explaining why, and you can tap &quot;No thanks&quot;.
          </p>
          <p>
            Prayer Lock uses Usage access <strong>only</strong> to read the
            name of the app that is currently in front, so it can tell whether
            it is one you chose to block. It does not read what is inside any
            app, your messages, passwords or screen content. The app name is
            checked on your phone and is not stored, collected or shared.
          </p>
          <CalloutBox variant="amber">
            <p>
              Prayer Lock does <strong>not</strong> use Android&apos;s
              Accessibility service.
            </p>
          </CalloutBox>
          <p>
            You can turn Usage access off at any time in Android Settings. App
            blocking then stops and the rest of the App keeps working.
          </p>
        </Section>

        <Section number="6" title="App blocking on iPhone (Screen Time)">
          <p>
            On iPhone, app blocking uses Apple&apos;s{" "}
            <strong>Screen Time</strong> (Family Controls). The apps you pick
            are chosen in Apple&apos;s own picker and stay private on your
            device: Prayer Lock cannot see which apps you picked or how you
            use your phone.
          </p>
        </Section>

        <Section number="7" title="Other permissions">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Notifications:</strong> prayer-time alerts and reminders.
            </li>
            <li>
              <strong>Exact alarms (Android):</strong> to start the prayer lock
              at the right minute.
            </li>
            <li>
              <strong>Display over other apps (Android):</strong> to show the
              prayer lock screen on top of blocked apps.
            </li>
            <li>
              <strong>Run at startup (Android):</strong> to resume an active
              lock after a restart.
            </li>
            <li>
              <strong>Battery optimization (Android, optional):</strong> so
              Android does not stop the lock in the background.
            </li>
          </ul>
          <p>None of these permissions send data anywhere.</p>
        </Section>

        <Section number="8" title="Your choices and deleting your data">
          <p>
            You can revoke any permission in your phone&apos;s settings.{" "}
            <strong>&quot;Reset all data&quot;</strong> in the App&apos;s
            Settings deletes everything Prayer Lock stored on your phone, and
            uninstalling the App removes it too. Because we hold no data about
            you, there is nothing for us to delete on our side.
          </p>
        </Section>

        <Section number="9" title="Children">
          <p>
            Prayer Lock is not directed at children under 13 and does not
            knowingly collect data from them.
          </p>
        </Section>

        <Section number="10" title="Changes to this policy">
          <p>
            If this policy changes, the new version will be published on this
            page with a new date.
          </p>
        </Section>

        <Section number="11" title="Contact">
          <ContactBox />
        </Section>

        <Section number="12" title="At a glance">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-emerald-200 bg-emerald-50 text-left">
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <SummaryRow question="Do you collect personal data?" answer="No" />
                <SummaryRow question="Do you require an account?" answer="No" />
                <SummaryRow question="Do you show ads or use analytics?" answer="No" />
                <SummaryRow question="Where is my data stored?" answer="On your phone only" />
                <SummaryRow
                  question="Does anything leave my phone?"
                  answer="No. The App makes no network requests on iPhone or Android"
                />
                <SummaryRow question="Is the Accessibility service used?" answer="No" />
                <SummaryRow question="How do I delete my data?" answer='"Reset all data" in Settings, or uninstall' />
              </tbody>
            </table>
          </div>
        </Section>
      </main>

      {/* Arabic */}
      <div id="arabic" dir="rtl" lang="ar" className="border-t-4 border-emerald-700 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            سياسة الخصوصية
          </h1>
          <p className="mt-2 text-lg text-emerald-800">قفل الصلاة (Prayer Lock)</p>
          <p className="mt-2 text-sm text-gray-500">
            <strong>آخر تحديث:</strong> 23 أكتوبر 2026
          </p>

          <div className="mt-10">
            <Section number="1" title="مقدمة">
              <p>
                توضّح هذه السياسة كيف يتعامل المطوّر <strong>Mohamed Aachour</strong> مع
                المعلومات في تطبيق <strong>قفل الصلاة</strong> (Prayer Lock)
                على أندرويد وآيفون. يذكّرك التطبيق بأوقات الصلاة ويمكنه حجب
                التطبيقات التي تختارها أثناء وقت الصلاة.
              </p>
            </Section>

            <Section number="2" title="ملخص">
              <CalloutBox variant="green">
                <p>
                  لا يحتوي التطبيق على <strong>حسابات ولا إعلانات ولا أدوات تحليل</strong>.
                  تُحفظ إعداداتك والتطبيقات التي اخترتها وسجل صلواتك{" "}
                  <strong>على هاتفك فقط</strong>. لا نملك أي خادم، ولا تصلنا
                  بياناتك، ولا نبيعها ولا نشاركها مع أحد.
                </p>
              </CalloutBox>
              <p>
                لا يُجري التطبيق أي اتصال بالإنترنت، فلا يخرج أي شيء من هاتفك
                على آيفون ولا على أندرويد.
              </p>
            </Section>

            <Section number="3" title="الموقع">
              <p>
                يستخدم التطبيق موقع هاتفك <strong>فقط أثناء فتح التطبيق</strong>{" "}
                لحساب أوقات الصلاة في مكانك. لا يتتبع موقعك في الخلفية ولا
                يحتفظ بسجل للمواقع. ويمكنك اختيار مدينة يدوياً بدلاً من GPS.
              </p>
            </Section>

            <Section number="4" title="لا اتصال بالإنترنت">
              <p>
                لا يُجري قفل الصلاة <strong>أي اتصال بالإنترنت</strong> على
                آيفون ولا على أندرويد. تُحسب أوقات الصلاة بالكامل على هاتفك،
                وخطوط التطبيق مضمّنة فيه. لا يخرج أي شيء من جهازك.
              </p>
            </Section>

            <Section number="5" title="حجب التطبيقات على أندرويد (الوصول إلى بيانات الاستخدام)">
              <p>
                لحجب التطبيقات التي اخترتها أثناء وقت الصلاة، يطلب منك التطبيق
                تفعيل <strong>«الوصول إلى بيانات الاستخدام»</strong> في
                أندرويد. وقبل نقلك إلى هذا الإعداد تظهر شاشة توضّح السبب،
                ويمكنك الضغط على «لا، شكراً».
              </p>
              <p>
                يستخدمه التطبيق <strong>فقط</strong> لقراءة اسم التطبيق
                المعروض أمامك حالياً لمعرفة هل هو من التطبيقات التي اخترت
                حجبها. لا يقرأ محتوى أي تطبيق ولا رسائلك ولا كلمات المرور ولا
                محتوى الشاشة. يُفحص اسم التطبيق على هاتفك ولا يُحفظ ولا يُجمع
                ولا يُشارك.
              </p>
              <CalloutBox variant="amber">
                <p>
                  لا يستخدم التطبيق خدمة <strong>إمكانية الوصول</strong>{" "}
                  (Accessibility) في أندرويد.
                </p>
              </CalloutBox>
              <p>
                يمكنك إيقاف هذا الإذن في أي وقت من إعدادات أندرويد، فيتوقف
                الحجب وتستمر بقية ميزات التطبيق.
              </p>
            </Section>

            <Section number="6" title="حجب التطبيقات على آيفون («مدة استخدام الجهاز»)">
              <p>
                على آيفون يستخدم الحجب ميزة <strong>«مدة استخدام الجهاز»</strong>{" "}
                من Apple (Family Controls). تُختار التطبيقات من أداة الاختيار
                الخاصة بـ Apple وتبقى خاصة على جهازك: لا يستطيع التطبيق رؤية
                التطبيقات التي اخترتها ولا طريقة استخدامك لهاتفك.
              </p>
            </Section>

            <Section number="7" title="أذونات أخرى">
              <ul className="list-disc space-y-2 pr-6">
                <li>
                  <strong>الإشعارات:</strong> تنبيهات وتذكيرات أوقات الصلاة.
                </li>
                <li>
                  <strong>التنبيهات الدقيقة (أندرويد):</strong> لبدء قفل
                  الصلاة في الدقيقة الصحيحة.
                </li>
                <li>
                  <strong>العرض فوق التطبيقات الأخرى (أندرويد):</strong> لعرض
                  شاشة قفل الصلاة فوق التطبيقات المحجوبة.
                </li>
                <li>
                  <strong>التشغيل عند بدء الجهاز (أندرويد):</strong> لاستئناف
                  القفل النشط بعد إعادة التشغيل.
                </li>
                <li>
                  <strong>تحسين البطارية (أندرويد، اختياري):</strong> حتى لا
                  يوقف أندرويد القفل في الخلفية.
                </li>
              </ul>
              <p>لا يرسل أي من هذه الأذونات بيانات إلى أي مكان.</p>
            </Section>

            <Section number="8" title="خياراتك وحذف بياناتك">
              <p>
                يمكنك سحب أي إذن من إعدادات هاتفك. خيار{" "}
                <strong>«مسح جميع البيانات»</strong> في إعدادات التطبيق يحذف
                كل ما خزّنه التطبيق على هاتفك، وحذف التطبيق يزيلها أيضاً.
                ولأننا لا نحتفظ بأي بيانات عنك فلا يوجد ما نحذفه من جهتنا.
              </p>
            </Section>

            <Section number="9" title="الأطفال">
              <p>
                التطبيق غير موجّه للأطفال دون 13 عاماً ولا يجمع بياناتهم عن
                علم.
              </p>
            </Section>

            <Section number="10" title="التغييرات">
              <p>
                إذا تغيّرت هذه السياسة فسيُنشر الإصدار الجديد في هذه الصفحة مع
                تاريخ جديد.
              </p>
            </Section>

            <Section number="11" title="التواصل">
              <ContactBox arabic />
            </Section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-3xl border-t border-gray-200 px-6 pt-8 pb-12 text-center text-sm text-gray-500">
        <p>
          <a href="/support" className="text-emerald-700 underline hover:text-emerald-900">
            Support / الدعم
          </a>
        </p>
        <p className="mt-2">&copy; 2026 Mohamed Aachour. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ─── Reusable Components ─── */

function ContactBox({ arabic = false }: { arabic?: boolean }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
      <p>
        <strong>{arabic ? "المطوّر:" : "Developer:"}</strong>{" "}
        {arabic ? "Mohamed Aachour" : "Mohamed Aachour"}
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
      <p>
        <strong>{arabic ? "التطبيق:" : "App:"}</strong> Prayer Lock (قفل الصلاة)
      </p>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function PermissionBadge({ name }: { name: string }) {
  return (
    <p className="mb-2">
      <span className="inline-block rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-600">
        {name}
      </span>
    </p>
  );
}

function CalloutBox({
  variant,
  children,
}: {
  variant: "green" | "amber";
  children: React.ReactNode;
}) {
  const styles = {
    green: "border-emerald-300 bg-emerald-50 text-emerald-900",
    amber: "border-amber-300 bg-amber-50 text-amber-900",
  };

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]}`}>
      {children}
    </div>
  );
}

function SummaryRow({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 font-medium text-gray-900">{question}</td>
      <td className="px-4 py-3 text-emerald-700 font-semibold">{answer}</td>
    </tr>
  );
}

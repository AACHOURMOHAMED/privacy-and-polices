import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Prayer Lock (إلى صلاتي)",
  description:
    "Privacy Policy for Prayer Lock (إلى صلاتي), a Muslim prayer reminder and app-locking application by Mohamed Aachour.",
};

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
            Prayer Lock (إلى صلاتي)
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-emerald-200">
            <span>
              <strong className="text-white">Last Updated:</strong> March 11,
              2026
            </span>
            <span>
              <strong className="text-white">Effective Date:</strong> March 11,
              2026
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* 1. Introduction */}
        <Section number="1" title="Introduction">
          <p>
            Welcome to <strong>Prayer Lock</strong> (إلى صلاتي). This Privacy
            Policy explains how <strong>Mohamed Aachour</strong> (&quot;Developer&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information in connection with the
            Prayer Lock mobile application (&quot;App&quot;) available on Android (Google
            Play) and iOS (App Store).
          </p>
          <p>
            We designed Prayer Lock with privacy as a core principle. The App is
            built to function entirely{" "}
            <strong>on your device</strong>, with{" "}
            <strong>
              no data collection, no user accounts, no analytics, and no
              communication with external servers
            </strong>
            . This policy describes the permissions we request, why we need them,
            and how they are used — all strictly on your device.
          </p>
          <p>
            By using Prayer Lock, you agree to the practices described in this
            Privacy Policy.
          </p>
        </Section>

        {/* 2. About the App */}
        <Section number="2" title="About the App">
          <p>
            Prayer Lock is a Muslim prayer reminder application that:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Calculates Islamic prayer times based on your geographic location.
            </li>
            <li>
              Sends local notifications reminding you when it is time to pray.
            </li>
            <li>
              Locks or blocks selected apps on your phone during prayer times to
              encourage focus and reduce distractions.
            </li>
          </ul>
          <p>
            The App requires certain device permissions to deliver these
            functions.{" "}
            <strong>
              All data processed by these permissions is handled exclusively on
              your device and is never transmitted, shared, or stored on any
              external server or service.
            </strong>
          </p>
        </Section>

        {/* 3. Data We Collect */}
        <Section number="3" title="Data We Collect">
          <CalloutBox variant="green">
            <strong>We do not collect, store, transmit, or share any personal data.</strong>{" "}
            All information processed by the App stays entirely on your device
            and is never sent anywhere.
          </CalloutBox>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-emerald-200 bg-emerald-50 text-left">
                  <th className="px-4 py-3 font-semibold">Data Type</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-center">
                    Transmitted?
                  </th>
                  <th className="px-4 py-3 font-semibold text-center">
                    Stored?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow
                  data="Precise Location (GPS)"
                  purpose="Calculate prayer times for your location"
                  transmitted="Never"
                  stored="No"
                />
                <TableRow
                  data="App Usage Statistics (Android)"
                  purpose="Detect foreground app to trigger lock screen"
                  transmitted="Never"
                  stored="No"
                />
                <TableRow
                  data="Accessibility Service Events (Android)"
                  purpose="Instantly detect when a blocked app is opened"
                  transmitted="Never"
                  stored="No"
                />
                <TableRow
                  data="Screen Time / FamilyControls Tokens (iOS)"
                  purpose="Block selected apps via Apple's official framework"
                  transmitted="Never"
                  stored="On-device only (opaque tokens)"
                />
                <TableRow
                  data="Prayer Preferences & App Selections"
                  purpose="Store your settings between sessions"
                  transmitted="Never"
                  stored="On-device only"
                />
                <TableRow
                  data="Lock History"
                  purpose="Record of past prayer lock sessions"
                  transmitted="Never"
                  stored="On-device only"
                />
              </tbody>
            </table>
          </div>
        </Section>

        {/* 4. Permissions and Their Use */}
        <Section number="4" title="Permissions and Their Use">
          {/* 4.1 Location */}
          <SubSection number="4.1" title="Location Permission (Android & iOS)">
            <PermissionBadge name="ACCESS_FINE_LOCATION (Android) / Location Services (iOS)" />
            <p>
              Prayer Lock requests access to your precise GPS location{" "}
              <strong>solely</strong> to calculate accurate Islamic prayer times
              (Fajr, Dhuhr, Asr, Maghrib, Isha) for your current geographic
              position. Prayer time calculations are performed entirely on-device
              using standard astronomical algorithms.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Your location coordinates are{" "}
                <strong>never sent to any server, API, or third party</strong>.
              </li>
              <li>
                Location is not stored persistently; it is used in real time and
                discarded.
              </li>
              <li>
                You can revoke location permission at any time in your device
                settings. The App will fall back to manual city selection if
                location access is denied.
              </li>
            </ul>
          </SubSection>

          {/* 4.2 Usage Access */}
          <SubSection
            number="4.2"
            title="Usage Access / App Usage Statistics (Android)"
          >
            <PermissionBadge name="PACKAGE_USAGE_STATS" />
            <p>
              This permission allows the App to detect which application is
              currently running in the foreground of your device. It is used{" "}
              <strong>exclusively</strong> to determine whether a blocked app is
              active during prayer time so the App can display the lock/reminder
              screen.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Usage data is{" "}
                <strong>never stored, logged, or transmitted</strong>.
              </li>
              <li>
                It is processed in real time, solely to trigger the lock screen
                overlay.
              </li>
              <li>
                This permission is not used to build profiles, monitor behavior,
                or track app usage patterns.
              </li>
            </ul>
          </SubSection>

          {/* 4.3 Notification */}
          <SubSection
            number="4.3"
            title="Notification Permission (Android & iOS)"
          >
            <PermissionBadge name="POST_NOTIFICATIONS (Android) / Notification Permission (iOS)" />
            <p>
              Prayer Lock uses local notifications to alert you when prayer time
              begins. These are <strong>local-only notifications</strong>{" "}
              generated entirely on your device.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>No push notification servers are used.</strong>
              </li>
              <li>
                No notification tokens, device identifiers, or notification
                content are ever sent to any external service.
              </li>
              <li>
                You can manage notification preferences in your device settings
                at any time.
              </li>
            </ul>
          </SubSection>

          {/* 4.4 Exact Alarm */}
          <SubSection number="4.4" title="Exact Alarm Permission (Android)">
            <PermissionBadge name="SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM" />
            <p>
              This permission allows Prayer Lock to schedule precise alarms that
              trigger at exact prayer times. Without this permission, prayer lock
              activations may be delayed by the Android system.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                This permission is used only to fire timely prayer reminders and
                lock activations.
              </li>
              <li>No data is collected through this permission.</li>
            </ul>
          </SubSection>

          {/* 4.5 Battery */}
          <SubSection
            number="4.5"
            title="Battery Optimization Exemption (Android)"
          >
            <p>
              Prayer Lock requests exemption from battery optimization so that
              the background lock service remains active and reliably triggers at
              prayer times, even when the device has been idle.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>This does not grant any additional data access.</li>
              <li>
                It ensures the App&apos;s core functionality works consistently in
                the background.
              </li>
            </ul>
          </SubSection>

          {/* 4.6 Screen Time */}
          <SubSection
            number="4.6"
            title="Screen Time API / FamilyControls Framework (iOS)"
          >
            <PermissionBadge name="FamilyControls, ManagedSettings, DeviceActivity" />
            <p>
              On iOS, Prayer Lock uses Apple&apos;s official{" "}
              <strong>Screen Time</strong> framework to block selected
              applications during prayer times. When you select apps to block:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                The App stores <strong>opaque application tokens</strong>{" "}
                provided by Apple&apos;s framework. These tokens are
                cryptographically designed so that the specific app identities
                are <strong>not accessible to the App itself</strong> — only to
                the system.
              </li>
              <li>
                Tokens are stored{" "}
                <strong>exclusively on your device</strong>.
              </li>
              <li>
                No app selection data, tokens, or usage information is
                transmitted to any server or third party.
              </li>
              <li>
                App blocking is enforced directly by Apple&apos;s system frameworks,
                not by any third-party service.
              </li>
            </ul>
            <p>
              This usage complies with Apple&apos;s requirements for the
              FamilyControls entitlement. The App does not use this framework to
              monitor, report on, or restrict app usage for purposes outside of
              prayer-time focus.
            </p>
          </SubSection>
        </Section>

        {/* 5. Accessibility Service Disclosure */}
        <Section
          number="5"
          title="Accessibility Service Disclosure (Android)"
        >
          <CalloutBox variant="amber">
            <strong>Important Notice for Google Play Compliance</strong>
          </CalloutBox>

          <p>
            Prayer Lock uses Android&apos;s{" "}
            <strong>Accessibility Service</strong> (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono">
              AccessibilityService
            </code>
            ).
          </p>

          <h4 className="mt-4 font-semibold text-gray-900">
            Why we use it:
          </h4>
          <p>
            The Accessibility Service is used solely to instantly detect when a
            user opens a blocked application during prayer time, so the App can
            immediately display the prayer reminder and lock screen. This enables
            real-time, instantaneous app blocking without delay.
          </p>

          <h4 className="mt-4 font-semibold text-gray-900">
            What we do NOT do with the Accessibility Service:
          </h4>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              We do <strong>not</strong> read, collect, or record the content
              displayed on your screen.
            </li>
            <li>
              We do <strong>not</strong> capture keystrokes, passwords, or any
              text entered into any application.
            </li>
            <li>
              We do <strong>not</strong> transmit any accessibility event data to
              any server or third party.
            </li>
            <li>
              We do <strong>not</strong> interact with other app interfaces
              beyond detecting which app has been launched.
            </li>
            <li>
              We do <strong>not</strong> use this service to access any personal,
              financial, or sensitive information.
            </li>
          </ul>

          <h4 className="mt-4 font-semibold text-gray-900">
            What data is accessed:
          </h4>
          <p>
            The Accessibility Service observes system-level window state change
            events (i.e., which app has come to the foreground). This information
            is used instantly and in memory only to determine whether to show the
            prayer lock screen, and is{" "}
            <strong>never stored or transmitted</strong>.
          </p>
          <p>
            This is a <strong>core functionality requirement</strong> of the App.
            Without the Accessibility Service, the App cannot reliably detect app
            launches in real time and display the lock overlay immediately. No
            alternative Android API provides the same real-time response for this
            use case.
          </p>
          <p>
            Users must explicitly grant Accessibility Service permission through
            the Android system settings screen. You may revoke this permission at
            any time, which will disable real-time app locking (the App&apos;s other
            features will continue to work).
          </p>
        </Section>

        {/* 6. Data Storage */}
        <Section number="6" title="Data Storage">
          <p>
            All application data is stored{" "}
            <strong>locally on your device</strong> using the following
            technologies:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>SharedPreferences:</strong> Stores lightweight settings
              such as prayer method preferences, notification settings, and
              toggle states.
            </li>
            <li>
              <strong>Hive (local NoSQL database):</strong> Stores prayer
              schedules, selected blocked apps, and lock history.
            </li>
          </ul>

          <p className="mt-4 font-semibold">No data is ever:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Uploaded to a cloud service</li>
            <li>Sent to a remote database</li>
            <li>Shared with any third party</li>
            <li>
              Backed up to any external server (App data may be included in your
              device&apos;s standard OS backup, which is controlled by you through
              your device and account settings)
            </li>
          </ul>
        </Section>

        {/* 7. Third-Party Services */}
        <Section number="7" title="Third-Party Services">
          <CalloutBox variant="green">
            <strong>
              Prayer Lock uses no third-party SDKs, services, or frameworks that
              collect data.
            </strong>
          </CalloutBox>

          <p className="mt-4">Specifically, the App contains:</p>
          <ul className="list-none space-y-1 pl-4">
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No analytics</strong> (no Firebase Analytics, Mixpanel,
              Amplitude, etc.)
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No crash reporting services</strong> (no Crashlytics,
              Sentry, Bugsnag, etc.)
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No advertising networks</strong> (no AdMob, Meta Audience
              Network, etc.)
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No tracking or attribution tools</strong> (no AppsFlyer,
              Adjust, Branch, etc.)
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No Firebase services of any kind</strong>
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No remote configuration or A/B testing</strong>
            </li>
            <li>
              <span className="mr-2 text-red-500">✕</span>
              <strong>No social media SDKs</strong>
            </li>
          </ul>
        </Section>

        {/* 8. User Accounts */}
        <Section number="8" title="User Accounts and Authentication">
          <p>
            Prayer Lock{" "}
            <strong>does not require or support user accounts</strong>. There is
            no registration, login, email address, or any form of user
            identification. The App is entirely anonymous by design.
          </p>
        </Section>

        {/* 9. Children's Privacy */}
        <Section number="9" title="Children's Privacy">
          <p>
            Prayer Lock is not directed at children under the age of 13, nor
            does it knowingly collect personal information from children under
            13. Because the App collects{" "}
            <strong>no personal data at all</strong>, it poses no privacy risk to
            users of any age group.
          </p>
          <p>
            If you are a parent or guardian and have concerns about your
            child&apos;s use of this App, please note that all data remains on the
            device and no information is transmitted externally. You may
            uninstall the App at any time to remove all associated data.
          </p>
          <p>
            The App is suitable for users of all ages. Its Islamic prayer focus
            makes it appropriate for family use.
          </p>
        </Section>

        {/* 10. Your Privacy Rights */}
        <Section number="10" title="Your Privacy Rights">
          <p>
            Because Prayer Lock does not collect or transmit any personal data,
            many formal rights (such as data access requests or data portability
            requests) do not apply in the traditional sense. However, we
            recognize the following rights and how they apply:
          </p>

          <SubSection number="10.1" title="Right to Access">
            <p>
              All data the App uses is stored locally on your device and is
              accessible to you directly.
            </p>
          </SubSection>

          <SubSection number="10.2" title="Right to Deletion">
            <p>
              To delete all data associated with Prayer Lock, simply{" "}
              <strong>uninstall the App</strong> from your device. Uninstalling
              removes all locally stored preferences, app selections, and lock
              history. No data exists elsewhere to delete.
            </p>
          </SubSection>

          <SubSection number="10.3" title="Right to Withdraw Consent">
            <p>
              You may revoke any permission (Location, Notifications,
              Accessibility Service, Usage Access) at any time through your
              device&apos;s system settings. Revoking permissions will limit
              corresponding App functionality but will not affect data you have
              not provided.
            </p>
          </SubSection>

          <SubSection number="10.4" title="GDPR (European Users)">
            <p>
              If you are located in the European Economic Area (EEA), you benefit
              from rights under the General Data Protection Regulation (GDPR).
              The legal basis for processing location data to calculate prayer
              times is <strong>legitimate interest / user consent</strong>, as
              this is the core purpose of the App. Since no data leaves your
              device, there are no data transfers to third countries to disclose.
            </p>
          </SubSection>

          <SubSection number="10.5" title="CCPA (California Users)">
            <p>
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) grants you rights regarding personal information. Prayer
              Lock{" "}
              <strong>
                does not sell, share, or monetize personal information in any
                manner
              </strong>
              . Because no personal data is collected or stored off-device, there
              is no personal information subject to CCPA disclosure, deletion, or
              opt-out requests.
            </p>
          </SubSection>
        </Section>

        {/* 11. Data Security */}
        <Section number="11" title="Data Security">
          <p>
            Because all data remains on your device, the security of your data is
            governed by your device&apos;s own security controls (screen lock,
            encryption, OS security). We do not transmit data, so there is no
            risk of a server-side data breach affecting Prayer Lock users.
          </p>
          <p>
            We recommend keeping your device OS and the App up to date to benefit
            from the latest security enhancements.
          </p>
        </Section>

        {/* 12. Changes to This Policy */}
        <Section number="12" title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in the App&apos;s features, applicable laws, or platform
            requirements. When we make changes, we will:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Update the <strong>&quot;Last Updated&quot;</strong> date at the top of this
              document.
            </li>
            <li>
              Publish the revised policy at the same URL where this policy is
              hosted.
            </li>
            <li>
              Where changes are material, provide a notice within the App or on
              the App&apos;s store listing.
            </li>
          </ul>
          <p>
            Continued use of the App after any change constitutes your acceptance
            of the updated policy. We encourage you to review this policy
            periodically.
          </p>
        </Section>

        {/* 13. Contact Us */}
        <Section number="13" title="Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the App&apos;s privacy practices, please contact the
            developer:
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p>
              <strong>Developer:</strong> Mohamed Aachour
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:mohamedaachour511@gmail.com"
                className="text-emerald-700 underline hover:text-emerald-900"
              >
                mohamedaachour511@gmail.com
              </a>
            </p>
            <p>
              <strong>App:</strong> Prayer Lock (إلى صلاتي)
            </p>
          </div>
          <p className="mt-4">
            We will respond to privacy-related inquiries within a reasonable
            timeframe.
          </p>
        </Section>

        {/* 14. Summary */}
        <Section number="14" title="Summary">
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
                <SummaryRow question="Do you send data to servers?" answer="No" />
                <SummaryRow question="Do you use third-party analytics?" answer="No" />
                <SummaryRow question="Do you show ads?" answer="No" />
                <SummaryRow question="Do you require an account?" answer="No" />
                <SummaryRow
                  question="Where is my data stored?"
                  answer="On your device only"
                />
                <SummaryRow
                  question="How do I delete my data?"
                  answer="Uninstall the App"
                />
                <SummaryRow
                  question="Is the Accessibility Service used to spy on me?"
                  answer="No — only to detect foreground app and show lock screen"
                />
                <SummaryRow
                  question="Is Location used to track me?"
                  answer="No — only for on-device prayer time calculation"
                />
              </tbody>
            </table>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 pb-12 text-center text-sm text-gray-500">
          <p className="italic">
            Prayer Lock (إلى صلاتي) — Built to help you focus on what matters.
          </p>
          <p className="mt-2">
            &copy; 2026 Mohamed Aachour. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

/* ─── Reusable Components ─── */

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

function SubSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800">
        {number} {title}
      </h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
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

function TableRow({
  data,
  purpose,
  transmitted,
  stored,
}: {
  data: string;
  purpose: string;
  transmitted: string;
  stored: string;
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 font-medium text-gray-900">{data}</td>
      <td className="px-4 py-3">{purpose}</td>
      <td className="px-4 py-3 text-center text-emerald-700 font-semibold">
        {transmitted}
      </td>
      <td className="px-4 py-3 text-center">{stored}</td>
    </tr>
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

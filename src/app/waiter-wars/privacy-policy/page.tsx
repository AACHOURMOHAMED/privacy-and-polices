import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Waiter Wars",
  description:
    "Privacy Policy for Waiter Wars, a restaurant party game by Mohamed Aachour (menahire) for Android and iOS.",
};

export default function WaiterWarsPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-gradient-to-r from-blue-800 to-indigo-950 text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-blue-100">Waiter Wars</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-blue-200">
            <span>
              <strong className="text-white">Last Updated:</strong> October 21,
              2026
            </span>
            <span>
              <strong className="text-white">Effective Date:</strong> October
              21, 2026
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Section number="1" title="Introduction">
          <p>
            This Privacy Policy explains how <strong>Mohamed Aachour</strong>{" "}
            (developer account <strong>menahire</strong>, &quot;we&quot;,
            &quot;us&quot;) handles information in connection with the{" "}
            <strong>Waiter Wars</strong> game (&quot;Game&quot;) on Android
            (Google Play) and iOS (App Store).
          </p>
          <p>
            Waiter Wars does not ask you to create an account, and we do not
            run our own servers that collect your personal information. Some
            features use third-party services, described below.
          </p>
        </Section>

        <Section number="2" title="Information Kept on Your Device">
          <p>The Game saves its progress only in the app&apos;s own storage on your device:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              the waiter name you choose, your avatar, waiter and dish choices,
              and your language;
            </li>
            <li>
              your coins, gems, owned items, season pass progress, missions,
              rank points and match statistics;
            </li>
            <li>
              your settings and first-launch choices (age confirmation, terms,
              anonymous statistics, notifications, vibration).
            </li>
          </ul>
          <p>
            This information is not sent to us. It is deleted when you
            uninstall the Game or clear its data.
          </p>
        </Section>

        <Section number="3" title="Online Matches">
          <p>
            Online play runs through <strong>Photon</strong> (Exit Games), a
            game networking service. To connect you to a match, Photon receives
            your device&apos;s IP address and the match data: your waiter name,
            the waiter and dish you chose, your movements, and the preset
            quick-chat lines you send.
          </p>
          <p>
            Other players in the match see your name, waiter, dish and
            quick-chat lines. There is no free-text chat, voice chat or picture
            sharing, and waiter names are filtered for offensive words.
          </p>
          <p>
            Photon&apos;s privacy policy:{" "}
            <a className="text-blue-700 underline" href="https://www.photonengine.com/privacy">
              photonengine.com/privacy
            </a>
          </p>
        </Section>

        <Section number="4" title="In-App Purchases">
          <p>
            Gem packs are sold through Google Play or the Apple App Store using
            Unity In-App Purchasing. The store processes your payment; we never
            see your card or bank details. The store tells the Game which item
            you bought and provides a receipt so the gems can be added on your
            device.
          </p>
        </Section>

        <Section number="5" title="Rewarded Ads">
          <p>
            You can choose to watch a short video ad to earn free gems. Ads are
            shown only when you tap the button, never during a match. Ads are
            provided by <strong>Unity LevelPlay</strong> and the ad networks it
            works with. To show and measure ads and to prevent fraud, they may
            collect your device&apos;s advertising identifier, IP address,
            device model and operating system, and how you interact with the ad.
          </p>
          <p>
            Your answer to &quot;Share anonymous stats&quot; on first launch is
            passed to LevelPlay as your consent setting. You can reset or delete
            your advertising identifier in your device settings.
          </p>
          <p>
            Unity&apos;s privacy policy:{" "}
            <a
              className="text-blue-700 underline"
              href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
            >
              unity.com/legal/game-player-and-app-user-privacy-policy
            </a>
          </p>
        </Section>

        <Section number="6" title="Connection Check and Notifications">
          <p>
            When the Game starts, it sends one small request to a Google
            address to check whether you are online. The request contains no
            information about you; like any internet request, it reveals your
            IP address to Google.
          </p>
          <p>
            The Game asks your permission before showing notifications. You can
            change this at any time in your device settings.
          </p>
        </Section>

        <Section number="7" title="What We Do Not Collect">
          <p>
            Waiter Wars does not access your location, contacts, photos, camera
            or microphone, and it does not include an analytics or tracking
            service of its own. We do not sell your information.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">What it receives</th>
                  <th className="px-4 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <Row service="Photon (Exit Games)" receives="IP address, waiter name and look, match inputs, quick-chat lines" why="Online matches" />
                <Row service="Google Play / Apple App Store" receives="Purchase and payment details" why="Gem packs" />
                <Row service="Unity LevelPlay and its ad networks" receives="Advertising ID, IP address, device information, ad interactions" why="Rewarded ads you choose to watch" />
                <Row service="Google (connection check)" receives="IP address" why="Checking that you are online" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="8" title="Children">
          <p>
            Waiter Wars asks players to confirm they are 13 or older on first
            launch, and the Game is not directed at children under 13. If you
            believe a child under 13 has used the Game&apos;s online features,
            contact us and we will help remove any information we can.
          </p>
        </Section>

        <Section number="9" title="Your Choices and Deletion">
          <ul className="list-disc space-y-1 pl-6">
            <li>Delete all saved game data by uninstalling the Game or clearing its storage.</li>
            <li>Play offline (practice mode) to avoid online matches.</li>
            <li>Do not tap the ad button to avoid ads, or turn off personalized ads in your device settings.</li>
            <li>
              Contact us with any question or request about your information,
              including requests under the GDPR or other privacy laws.
            </li>
          </ul>
        </Section>

        <Section number="10" title="Changes to This Policy">
          <p>
            If we change how the Game uses information, we will update this
            page and its dates before the change applies.
          </p>
        </Section>

        <Section number="11" title="Contact">
          <p>
            Email: <strong className="select-all">mohamaachour@gmail.com</strong>
          </p>
        </Section>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Waiter Wars · © 2026 Mohamed Aachour
      </footer>
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

function Row({ service, receives, why }: { service: string; receives: string; why: string }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 font-medium text-gray-900">{service}</td>
      <td className="px-4 py-3">{receives}</td>
      <td className="px-4 py-3">{why}</td>
    </tr>
  );
}

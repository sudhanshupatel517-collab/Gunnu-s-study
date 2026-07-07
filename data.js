const STUDY_DATA = {
  subjects: {
    political_science: {
      title: "Political Science (Class 12)",
      description: "Explore the dynamics of World Politics and post-independence Indian Politics.",
      icon: "fa-monument",
      books: [
        {
          id: "book_1",
          title: "Contemporary World Politics",
          chapters: [
            {
              id: "b1_ch1",
              title: "The End of Bipolarity",
              summary: "Understand the collapse of the Soviet Union, the disintegration of the socialist bloc, and the emergence of a unipolar world led by the United States.",
              notes: `
<section id="overview">
  <span class="part-tag">Part 01</span>
  <h2>Chapter Overview</h2>
  <p class="lead">After World War II, the world split into two rival camps — one led by the <strong style="color:var(--usa)">USA</strong>, the other by the <strong style="color:var(--ussr)">USSR</strong>. For 45 years they never fought each other directly, but everyone else felt the tremors. This chapter is the story of how that "bipolar" world cracked apart in 1991 — and why it still shapes the politics you read about today.</p>

  <div class="grid-3">
    <div class="stat-card">
      <h4>🕰️ Duration</h4>
      <p>Cold War lasted <strong style="color:var(--text)">1945 – 1991</strong> — 45+ years of rivalry without direct war between the superpowers.</p>
    </div>
    <div class="stat-card">
      <h4>⭐ Why it matters</h4>
      <p>This is the <strong style="color:var(--text)">foundation chapter</strong> for the whole book — Chapters 2, 3 & 4 build directly on it.</p>
    </div>
    <div class="stat-card">
      <h4>🎯 Board weightage</h4>
      <p>Almost <strong style="color:var(--text)">every year</strong>, a 4–6 mark question is drawn straight from this chapter.</p>
    </div>
  </div>
</section>

<section id="timeline">
  <span class="part-tag">Timeline</span>
  <h2>How It All Unfolded</h2>
  <p class="lead">Follow the crack down the middle — from revolution, to rivalry, to reform, to collapse.</p>
  <div class="timeline">
    <div class="t-item"><div class="t-year">1917</div><div class="t-text"><strong>Russian Revolution</strong> — Bolsheviks under Lenin establish the world's first socialist state.</div></div>
    <div class="t-item"><div class="t-year">1945</div><div class="t-text">End of WWII. <strong>USA & USSR emerge as superpowers</strong> — the Cold War begins.</div></div>
    <div class="t-item"><div class="t-year">1949</div><div class="t-text"><strong style="color:var(--usa)">NATO</strong> formed — the US-led military alliance.</div></div>
    <div class="t-item"><div class="t-year">1955</div><div class="t-text"><strong style="color:var(--ussr)">Warsaw Pact</strong> formed — the Soviet-led military alliance, in response to NATO.</div></div>
    <div class="t-item"><div class="t-year">1962</div><div class="t-text"><strong>Cuban Missile Crisis</strong> — the world comes closest to nuclear war.</div></div>
    <div class="t-item"><div class="t-year">1985</div><div class="t-text"><strong style="color:var(--gold)">Gorbachev</strong> becomes Soviet leader; launches <strong>Perestroika</strong> & <strong>Glasnost</strong>.</div></div>
    <div class="t-item"><div class="t-year">1989</div><div class="t-text">The <strong>Berlin Wall falls</strong> — the physical symbol of the Iron Curtain comes down.</div></div>
    <div class="t-item"><div class="t-year">1991</div><div class="t-text"><strong style="color:var(--gold)">USSR formally disintegrates (Dec)</strong> — 15 new nations emerge; the <strong>CIS</strong> is formed; bipolarity ends.</div></div>
  </div>
</section>

<section id="concepts">
  <span class="part-tag">Part 02</span>
  <h2>Complete Concept Notes</h2>
  <p class="lead">Tap any card to expand. 🔴 = Soviet-side concepts · 🔵 = Western-side concepts · 🟡 = Turning points & reforms.</p>

  <div class="concepts-wrap">

    <details class="concept" data-side="gold" open>
      <summary><span class="num">01</span> 🌍 Bipolar World</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A world order where power is concentrated in <strong>two dominant blocs/superpowers</strong>, each with its own allies, ideology and sphere of influence.</p>
        <p>Imagine the world split into two big "teams" — Team USA and Team USSR — and everyone else had to more or less pick a side.</p>
        <div class="callout exam">📝 <strong>Exam Point:</strong> Always write "a world divided into two blocs led by two superpowers" — this exact phrasing scores full marks.</div>
        <div class="callout mistake">⚠️ <strong>Common Mistake:</strong> Bipolarity ≠ two countries fighting. It means two <em>blocs/alliance systems</em>.</div>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">02</span> ❄️ Cold War</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> Tension and rivalry between USA and USSR that never became a direct armed conflict, expressed instead through alliances, arms race, propaganda and proxy wars.</p>
        <div class="callout ncert">📦 <strong>NCERT note:</strong> Ordinary citizens on both sides lived under constant fear of nuclear war.</div>
        <p><strong>Example:</strong> The Korean War and Vietnam War — both proxy battles of Cold War rivalry.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">03</span> 🏆 Superpowers</summary>
      <div class="concept-body">
        <p>A nation with military, economic and political power far beyond a "great power" — able to shape events globally. USA and USSR were the two post-WWII superpowers.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">04</span> ☭ Soviet Bloc (Eastern Bloc)</summary>
      <div class="concept-body">
        <p>Countries aligned with the USSR — Poland, East Germany, Hungary, Czechoslovakia, Bulgaria, Romania. Often called <strong>satellite states</strong> — formally independent, but heavily controlled by USSR.</p>
        <p>Military alliance: <strong>Warsaw Pact</strong>.</p>
      </div>
    </details>

    <details class="concept" data-side="blue">
      <summary><span class="num">05</span> 🦅 US Bloc (Western Bloc)</summary>
      <div class="concept-body">
        <p>Countries aligned with the USA — UK, France, West Germany, Canada, and other Western European nations, following capitalism and liberal democracy.</p>
        <p>Military alliance: <strong>NATO</strong>.</p>
      </div>
    </details>

    <details class="concept" data-side="blue">
      <summary><span class="num">06</span> 🛡️ NATO</summary>
      <div class="concept-body">
        <p><strong>North Atlantic Treaty Organisation</strong> — formed <strong>1949</strong> by USA and Western Europe for collective defence against the Soviet bloc.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">07</span> 🛡️ Warsaw Pact</summary>
      <div class="concept-body">
        <p>Soviet-led military alliance — formed <strong>1955</strong> in direct response to NATO. Dissolved in 1991 along with the USSR.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">08</span> 💣 Arms Race</summary>
      <div class="concept-body">
        <p>Both superpowers kept building more and deadlier weapons to not fall behind — extending even to the <strong>Space Race</strong> (Sputnik, Moon landing). Massive spending on this diverted resources away from development.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">09</span> 🌴 Cuban Missile Crisis (1962)</summary>
      <div class="concept-body">
        <p>USSR placed nuclear missiles in Cuba, right next to the US — bringing the world to the brink of nuclear war. Resolved by negotiation: USSR removed missiles from Cuba; US secretly removed missiles from Turkey.</p>
        <div class="callout exam">📝 Frequently asked as an "example of Cold War tension."</div>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">10</span> 🏭 The Soviet System & Economy</summary>
      <div class="concept-body">
        <p>Founded after the <strong>1917 Bolshevik Revolution</strong>, based on socialism — state ownership, central planning, guaranteed employment.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Feature</th><th>Explanation</th></tr></thead>
          <tbody>
            <tr><td>State Ownership</td><td>All industry/property owned by the state</td></tr>
            <tr><td>Central Planning</td><td>Five-year plans instead of market forces</td></tr>
            <tr><td>Guaranteed Welfare</td><td>Free healthcare, education, full employment</td></tr>
            <tr><td>Subsidies</td><td>Bread, milk & essentials kept artificially cheap</td></tr>
            <tr><td>Heavy Industry Focus</td><td>Steel, machinery, defence over consumer goods</td></tr>
          </tbody>
        </table></div>
        <div class="callout mistake">⚠️ Don't call the Soviet economy "backward" — it achieved huge industrial & space feats, but had deep <em>structural</em> weaknesses.</div>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">11</span> 🏛️ Political Structure of USSR</summary>
      <div class="concept-body">
        <p>The <strong>Communist Party of the Soviet Union (CPSU)</strong> controlled everything — no political opposition allowed. Decisions were centralised; bureaucracy had privileges leading to inefficiency & corruption.</p>
        <p>USSR = union of <strong>15 Republics</strong>, with Russia the most dominant.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">12</span> 🔧 Rise of Gorbachev</summary>
      <div class="concept-body">
        <p><strong>Mikhail Gorbachev</strong> became CPSU leader in <strong>March 1985</strong>, realising the USSR was falling behind economically & technologically. He launched <strong>Perestroika</strong> and <strong>Glasnost</strong> — reforms that ended up <em>accelerating</em> disintegration rather than saving the system.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">13</span> 🔨 Perestroika vs Glasnost</summary>
      <div class="concept-body">
        <p><strong>Perestroika</strong> ("restructuring") = economic reform to modernise the rigid planned economy and open up to the outside world.</p>
        <p><strong>Glasnost</strong> ("openness") = political reform allowing free speech and reducing censorship.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Basis</th><th>Perestroika</th><th>Glasnost</th></tr></thead>
          <tbody>
            <tr><td>Focus</td><td>Economic</td><td>Political / Social</td></tr>
            <tr><td>Aim</td><td>Market-oriented reform</td><td>Free speech, less censorship</td></tr>
            <tr><td>Result</td><td>Exposed economic weakness</td><td>Exposed political repression → dissent</td></tr>
          </tbody>
        </table></div>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">14</span> 🗳️ Democratic Reforms</summary>
      <div class="concept-body">
        <p>Gorbachev allowed freer elections, reduced CPSU's monopoly, withdrew troops from Afghanistan, and sought better ties with the West — but this weakened central control and opened space for nationalist movements.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">15</span> 💥 Causes of Soviet Disintegration</summary>
      <div class="concept-body">
        <p><strong>Internal causes:</strong></p>
        <ul>
          <li>Economic stagnation & falling behind the West</li>
          <li>Bureaucratic inefficiency & corruption</li>
          <li>Lack of democracy under one-party CPSU rule</li>
          <li>Rise of nationalism across the 15 republics</li>
          <li>Gorbachev's reforms exposing weaknesses</li>
          <li>Failed hardliner coup of August 1991</li>
        </ul>
        <p><strong>External causes:</strong></p>
        <ul>
          <li>Enormous cost of the arms race</li>
          <li>Afghanistan War (1979–89) draining resources</li>
          <li>Constant Cold War competition strain</li>
          <li>Exposure to Western prosperity via Glasnost</li>
        </ul>
        <div class="callout ncert">📦 <strong>NCERT line:</strong> "The differences in economic growth rate between the two blocs was itself an important cause for the collapse of the Soviet economy."</div>
        <div class="callout mistake">⚠️ USSR was <em>not</em> defeated in war — it collapsed internally.</div>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">16</span> 👤 Role of Leadership</summary>
      <div class="concept-body">
        <p><strong>Gorbachev</strong> — tried to save & modernise socialism; reforms triggered its collapse instead.</p>
        <p><strong>Boris Yeltsin</strong> — opposed the 1991 hardline coup, emerged hugely popular, became first President of independent Russia.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">17</span> 🧨 Disintegration of USSR</summary>
      <div class="concept-body">
        <p>By <strong>December 1991</strong>, central Soviet authority had collapsed. The USSR split into <strong>15 independent republics</strong> — Russia, Ukraine, Belarus, Kazakhstan, Uzbekistan, Georgia, Armenia, Azerbaijan, and the three Baltic states (Estonia, Latvia, Lithuania — which did NOT join the CIS).</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">18</span> 🤝 Formation of CIS</summary>
      <div class="concept-body">
        <p><strong>Commonwealth of Independent States</strong> — a loose association of most former Soviet republics (except the Baltics), formed Dec 1991 for orderly post-Soviet cooperation.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">19</span> 🇷🇺 Russia after the USSR</summary>
      <div class="concept-body">
        <p>Russia became the <strong>successor state</strong> — inheriting the UN Security Council permanent seat, most nuclear weapons, and diplomatic assets. <strong>Boris Yeltsin</strong> became its first President, restructuring it from socialism toward capitalist democracy.</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">20</span> ⚡ Shock Therapy</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The rapid, radical model (prescribed by IMF/World Bank) used by Russia & other post-Soviet states to switch overnight from a command economy to a market economy.</p>
        <p><strong>Features:</strong> Privatisation · Withdrawal of the state from the economy · Trade liberalisation · Currency convertibility · Dismantling old trade blocs (COMECON).</p>
        <p>✅ <strong>Positive:</strong> New markets, wider consumer goods, global economic integration.</p>
        <p>❌ <strong>Negative (the bigger story):</strong> GDP crashed — Russia's 1999 GDP was under half of 1989's; rouble collapsed causing hyperinflation; mass unemployment; social welfare system collapsed; rise of a mafia-driven oligarch economy.</p>
        <div class="callout ncert">📦 <strong>NCERT metaphor:</strong> Described as "one of the largest garage sales in history."</div>
        <div class="callout mistake">⚠️ Don't only write positive effects — NCERT is <em>critical</em> of Shock Therapy; negative effects carry more marks.</div>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">21</span> 🌐 Consequences of the End of Bipolarity</summary>
      <div class="concept-body">
        <p>Ended ideological/military competition between blocs; power concentrated with the USA; new states emerged pursuing liberal democracy & capitalism; new alliances and global institutions reshaped; new areas of conflict emerged (e.g., Balkans).</p>
      </div>
    </details>

    <details class="concept" data-side="blue">
      <summary><span class="num">22</span> 🦅 Emergence of a Unipolar World</summary>
      <div class="concept-body">
        <p>With the USSR gone, the USA became the sole dominant power — giving rise to <strong>unipolarity</strong> (explored further in Chapter 2: US Hegemony).</p>
      </div>
    </details>

    <details class="concept" data-side="red">
      <summary><span class="num">23</span> 🇮🇳 India's Relations with Russia</summary>
      <div class="concept-body">
        <p>India-USSR ties were close during the Cold War — the <strong>1971 Indo-Soviet Treaty of Peace, Friendship & Cooperation</strong> was landmark. USSR backed India diplomatically (UNSC vetoes on Kashmir) and economically (e.g., Bhilai Steel Plant). This friendship continued with the Russian Federation post-1991 — now covering defence, nuclear energy & space cooperation.</p>
      </div>
    </details>

    <details class="concept" data-side="gold">
      <summary><span class="num">24</span> 🇮🇳 India & the New Independent States</summary>
      <div class="concept-body">
        <p>India built new ties with the <strong>Central Asian Republics</strong> — Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, Tajikistan — driven by energy security, trade, security cooperation (given proximity to Afghanistan) and old Silk Route ties.</p>
      </div>
    </details>

  </div>
</section>

<section id="flowcharts">
  <span class="part-tag">Part 03</span>
  <h2>Flowcharts</h2>
  <p class="lead">Visual cause → effect chains. Read top to bottom.</p>

  <div class="grid-3" style="grid-template-columns:1fr 1fr;">
    <div class="mindmap-box">
      <div class="flow-title">❄️ The Cold War</div>
      <div class="flow">
        <div class="flow-box blue">World War II ends (1945)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">USA & USSR emerge as superpowers</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">Two ideological blocs form</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">NATO (1949) vs Warsaw Pact (1955)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">Arms race + proxy wars (Korea, Vietnam, Cuba)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">Gorbachev's reforms (1985)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">USSR disintegrates (Dec 1991)</div>
      </div>
    </div>

    <div class="mindmap-box">
      <div class="flow-title">💥 Soviet Disintegration</div>
      <div class="flow">
        <div class="flow-box red">Economic stagnation + bureaucratic inefficiency</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">Rise of nationalism in republics</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">Perestroika & Glasnost (1985)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">Weaknesses exposed publicly</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">August 1991 coup fails</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">Yeltsin rises; central authority collapses</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">USSR disintegrates → CIS formed</div>
      </div>
    </div>
  </div>

  <div class="grid-3" style="grid-template-columns:1fr 1fr; margin-top:16px;">
    <div class="mindmap-box">
      <div class="flow-title">⚡ Shock Therapy</div>
      <div class="flow">
        <div class="flow-box red">Collapse of the command economy</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box gold">IMF / World Bank model adopted</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">Privatisation + trade liberalisation</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">Old trade network (COMECON) collapses</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">Inflation + unemployment + poverty</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box red">Rise of oligarchs / mafia economy</div>
      </div>
    </div>

    <div class="mindmap-box">
      <div class="flow-title">🦅 Rise of a Unipolar World</div>
      <div class="flow">
        <div class="flow-box gold">USSR disintegrates (1991)</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">No rival superpower/bloc remains</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">USA = sole dominant power</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">NATO expands eastward</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-box blue">Unipolar world order emerges</div>
      </div>
    </div>
  </div>

  <div class="mindmap-box" style="max-width:520px; margin:16px auto 0;">
    <div class="flow-title">🇮🇳 India's Relations, Post-Bipolarity</div>
    <div class="flow">
      <div class="flow-box red">Cold War era: strong India–USSR ties (1971 Treaty)</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-box gold">USSR disintegrates (1991)</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-box red">Russia = successor state (UNSC seat, nuclear assets)</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-box gold">India–Russia strategic partnership continues</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-box blue">New ties built with Central Asian Republics</div>
    </div>
  </div>
</section>

<section id="mindmaps">
  <span class="part-tag">Part 04</span>
  <h2>Mind Maps</h2>
  <p class="lead">The whole chapter, at a glance. Scroll sideways on mobile.</p>

  <div class="mindmap-box">
    <div class="orgchart">
      <div class="oc-root">THE END OF BIPOLARITY</div>
      <div class="oc-level">
        <div class="oc-branch">
          <div class="oc-node gold">COLD WAR ERA<br>1945–1991</div>
          <ul class="oc-leaf">
            <li>Two superpowers</li>
            <li>NATO / Warsaw Pact</li>
            <li>Arms race</li>
            <li>Cuban Missile Crisis</li>
          </ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node red">SOVIET SYSTEM</div>
          <ul class="oc-leaf">
            <li>State-owned economy</li>
            <li>CPSU one-party rule</li>
            <li>15 Republics</li>
          </ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node gold">GORBACHEV'S<br>REFORMS (1985)</div>
          <ul class="oc-leaf">
            <li>Perestroika (economy)</li>
            <li>Glasnost (politics)</li>
            <li>Democratic reforms</li>
          </ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node blue">DISINTEGRATION<br>(1991)</div>
          <ul class="oc-leaf">
            <li>15 republics form</li>
            <li>CIS created</li>
            <li>Shock Therapy (Russia)</li>
          </ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node blue">CONSEQUENCES<br>& INDIA</div>
          <ul class="oc-leaf">
            <li>Unipolar world (USA)</li>
            <li>India–Russia ties continue</li>
            <li>India–Central Asia ties</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-3" style="grid-template-columns:1fr 1fr;">
    <div class="mindmap-box">
      <div class="orgchart" style="min-width:auto;">
        <div class="oc-root" style="background:var(--ussr); color:#fff;">SOVIET ECONOMY</div>
        <div class="oc-level">
          <div class="oc-branch"><div class="oc-node red">State<br>Ownership</div></div>
          <div class="oc-branch"><div class="oc-node red">Central<br>Planning</div></div>
          <div class="oc-branch"><div class="oc-node red">Full<br>Employment</div></div>
          <div class="oc-branch"><div class="oc-node red">Heavy Industry<br>Focus</div></div>
        </div>
      </div>
    </div>

    <div class="mindmap-box">
      <div class="orgchart" style="min-width:auto;">
        <div class="oc-root">GORBACHEV 1985</div>
        <div class="oc-level">
          <div class="oc-branch">
            <div class="oc-node gold">Perestroika</div>
            <ul class="oc-leaf"><li>Economic reform</li><li>Market opening</li></ul>
          </div>
          <div class="oc-branch">
            <div class="oc-node gold">Glasnost</div>
            <ul class="oc-leaf"><li>Free speech</li><li>Less censorship</li></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="tables">
  <span class="part-tag">Part 05</span>
  <h2>Comparison Tables</h2>
  <p class="lead">The fastest way to answer a "distinguish between" question.</p>

  <h4 style="margin-top:26px;">Bipolar vs Unipolar</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Basis</th><th>Bipolar</th><th>Unipolar</th></tr></thead>
    <tbody>
      <tr><td>Power centres</td><td>Two (USA & USSR)</td><td>One (USA)</td></tr>
      <tr><td>Period</td><td>1945–1991</td><td>Post-1991</td></tr>
      <tr><td>Alliances</td><td>NATO vs Warsaw Pact</td><td>No comparable rival alliance</td></tr>
    </tbody>
  </table></div>

  <h4>Capitalism vs Socialism</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Basis</th><th>Capitalism (US model)</th><th>Socialism (Soviet model)</th></tr></thead>
    <tbody>
      <tr><td>Ownership</td><td>Private property/industry</td><td>State-owned means of production</td></tr>
      <tr><td>Economy</td><td>Market-driven</td><td>Centrally planned</td></tr>
      <tr><td>Political system</td><td>Multi-party democracy</td><td>One-party rule</td></tr>
      <tr><td>Goal</td><td>Profit, individual enterprise</td><td>Equality, collective welfare</td></tr>
    </tbody>
  </table></div>

  <h4>US vs USSR (Cold War Era)</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Basis</th><th>USA</th><th>USSR</th></tr></thead>
    <tbody>
      <tr><td>Ideology</td><td>Capitalism / Liberal democracy</td><td>Socialism / Communism</td></tr>
      <tr><td>Military alliance</td><td>NATO (1949)</td><td>Warsaw Pact (1955)</td></tr>
      <tr><td>Economic system</td><td>Free market</td><td>Centrally planned</td></tr>
    </tbody>
  </table></div>

  <h4>Before 1991 vs After 1991 (USSR/Russia)</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Basis</th><th>Before 1991</th><th>After 1991</th></tr></thead>
    <tbody>
      <tr><td>Political system</td><td>One-party Communist rule</td><td>Multi-party democracy</td></tr>
      <tr><td>Economy</td><td>Centrally planned socialist</td><td>Market capitalist (via Shock Therapy)</td></tr>
      <tr><td>Territory</td><td>Union of 15 Republics</td><td>15 independent countries</td></tr>
      <tr><td>World order</td><td>Bipolar</td><td>Unipolar</td></tr>
    </tbody>
  </table></div>

  <h4>Advantages vs Disadvantages of Shock Therapy</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
    <tbody>
      <tr><td>Opened economy to global trade</td><td>Massive fall in GDP & living standards</td></tr>
      <tr><td>Wider variety of consumer goods</td><td>Hyperinflation, currency devaluation</td></tr>
      <tr><td>Integration with world economy</td><td>Large-scale unemployment & poverty</td></tr>
      <tr><td>Attracted some foreign investment</td><td>Collapse of social welfare system; rise of oligarchs</td></tr>
    </tbody>
  </table></div>

  <h4>India–Russia Relations: Then vs Now</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Aspect</th><th>During Cold War</th><th>Post-1991</th></tr></thead>
    <tbody>
      <tr><td>Partner</td><td>Soviet Union</td><td>Russian Federation</td></tr>
      <tr><td>Basis</td><td>Ideological/strategic alignment</td><td>Pragmatic, multi-dimensional partnership</td></tr>
      <tr><td>Key agreement</td><td>1971 Indo-Soviet Treaty</td><td>Strategic Partnership agreements</td></tr>
      <tr><td>Key areas</td><td>Defence, Bhilai Steel Plant</td><td>Defence, nuclear energy, space, oil & gas</td></tr>
    </tbody>
  </table></div>
</section>

<section id="glossary">
  <span class="part-tag">Parts 06 & 07</span>
  <h2>Definitions & Glossary</h2>
  <p class="lead">One-mark-ready definitions of every key term.</p>

  <div class="glossary-grid">
    <div class="term-card"><h4>Cold War</h4><p>Rivalry between USA and USSR without direct full-scale war.</p></div>
    <div class="term-card"><h4>Bipolarity</h4><p>World order with power divided between two blocs/superpowers.</p></div>
    <div class="term-card"><h4>Unipolarity</h4><p>World order dominated by a single superpower.</p></div>
    <div class="term-card"><h4>NATO</h4><p>Military alliance of USA & Western Europe, formed 1949.</p></div>
    <div class="term-card"><h4>Warsaw Pact</h4><p>Military alliance of USSR & Eastern Europe, formed 1955.</p></div>
    <div class="term-card"><h4>Perestroika</h4><p>Gorbachev's policy of economic restructuring.</p></div>
    <div class="term-card"><h4>Glasnost</h4><p>Gorbachev's policy of political openness & reduced censorship.</p></div>
    <div class="term-card"><h4>Shock Therapy</h4><p>Rapid model to convert a socialist economy into a capitalist market economy.</p></div>
    <div class="term-card"><h4>CIS</h4><p>Commonwealth of Independent States — association of most former Soviet republics, formed 1991.</p></div>
    <div class="term-card"><h4>Satellite State</h4><p>Formally independent country, but heavily controlled by another power.</p></div>
    <div class="term-card"><h4>Superpower</h4><p>Nation with dominant military, economic & political influence globally.</p></div>
    <div class="term-card"><h4>Privatisation</h4><p>Transfer of state-run enterprise ownership to private hands.</p></div>
    <div class="term-card"><h4>Liberalisation</h4><p>Reducing government restrictions on trade/economy.</p></div>
    <div class="term-card"><h4>Globalisation</h4><p>Increasing interconnection of world economies, cultures, politics.</p></div>
    <div class="term-card"><h4>Nationalism</h4><p>Strong identification with one's nation/ethnicity, often demanding self-determination.</p></div>
    <div class="term-card"><h4>Oligarchs</h4><p>Small group who gained massive wealth/resource control, especially post-Shock Therapy Russia.</p></div>
    <div class="term-card"><h4>COMECON</h4><p>Council for Mutual Economic Assistance — Soviet-era trade bloc among socialist states.</p></div>
    <div class="term-card"><h4>Market Economy</h4><p>Economy driven by supply/demand and private enterprise.</p></div>
  </div>
</section>

<section id="boardspecial">
  <span class="part-tag">Part 08</span>
  <h2>Board Exam Special</h2>

  <div class="grid-3" style="grid-template-columns:1fr 1fr;">
    <div class="stat-card">
      <h4>🎯 Most Important Topics</h4>
      <p>Causes of Soviet disintegration · Shock Therapy · Perestroika vs Glasnost · Features of Soviet economy/polity · Unipolar world · India–Russia/Central Asia relations.</p>
    </div>
    <div class="stat-card">
      <h4>📌 Frequently Asked</h4>
      <p>Causes of disintegration (5/6m) · Shock Therapy features & effects (5/6m) · Perestroika vs Glasnost (3m) · India's relations with Russia & Central Asia (3/4m).</p>
    </div>
    <div class="stat-card">
      <h4>🗺️ Map-Based Concepts</h4>
      <p>The 15 former Soviet republics · Central Asian Republics · NATO vs Warsaw Pact members.</p>
    </div>
    <div class="stat-card">
      <h4>🗣️ Watch for in MCQs</h4>
      <p>"Soviet economy was among the world's strongest before disintegration" · "Shock Therapy collapsed production & welfare structures" · "NATO formed before Warsaw Pact."</p>
    </div>
  </div>

  <div class="callout ncert" style="margin-top:20px; font-size:14px;">
    📦 <strong>Very important NCERT lines:</strong><br>
    "The differences in the economic growth rate between the two blocs was itself an important cause of the collapse of the Soviet economy."<br>
    "For the mass of the population, the road from a command to a market economy has been very rocky."<br>
    "The disintegration of the Soviet Union changed the power balance in world politics, giving rise to a unipolar world."
  </div>
</section>

<section id="pyq">
  <span class="part-tag">Part 09</span>
  <h2>Previous Year Questions — With Model Answers</h2>

  <div class="pyq-item">
    <span class="mark-pill">2 MARKS</span>
    <div class="pyq-q">What is meant by 'Shock Therapy'?</div>
    <div class="pyq-a">The rapid, radical economic transition adopted by Russia & other post-Soviet states to shift from a centrally planned economy to a capitalist market economy — via immediate privatisation, removal of trade barriers, and price deregulation, based on the IMF-prescribed model.</div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">3 MARKS</span>
    <div class="pyq-q">What were the main features of the Soviet political system before 1991?</div>
    <div class="pyq-a">(i) CPSU held complete control — no political opposition allowed. (ii) All major decisions taken centrally, limited role for individual republics. (iii) USSR was a union of 15 Republics, with Russia the most dominant.</div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">4 MARKS</span>
    <div class="pyq-q">Explain the internal causes responsible for the disintegration of the Soviet Union.</div>
    <div class="pyq-a">Economic stagnation (fell behind the West) · Bureaucratic inefficiency & corruption · Lack of democracy under one-party CPSU rule · Rise of nationalism across the 15 republics demanding independence.</div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">5 MARKS</span>
    <div class="pyq-q">Analyse the effects of Shock Therapy on the Russian economy and society.</div>
    <div class="pyq-a">Positive: opened new markets, wider consumer goods, integration with the world economy. Negative (the bigger emphasis): GDP crashed to less than half of 1989 levels by 1999; hyperinflation & rouble devaluation; large-scale unemployment; social welfare collapse; COMECON's collapse without adequate substitutes; rise of a mafia-driven oligarch economy causing enormous hardship for ordinary people.</div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">CASE-BASED</span>
    <div class="pyq-q">Passage: "For the mass of the population, the road from a command to a market economy has been very rocky... living standards suffered a huge decline."</div>
    <div class="pyq-a">
      <strong>Q1.</strong> Which economic model does this refer to? → <em>Shock Therapy.</em><br>
      <strong>Q2.</strong> Which institutions prescribed this model? → <em>IMF and World Bank.</em><br>
      <strong>Q3.</strong> Two negative effects mentioned in the chapter? → <em>Massive fall in GDP/living standards; large-scale unemployment and poverty.</em>
    </div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">ASSERTION-REASON</span>
    <div class="pyq-q">Assertion (A): The disintegration of the USSR led to the emergence of a unipolar world.<br>Reason (R): The USA remained the only superpower with no comparable rival after 1991.</div>
    <div class="pyq-a"><strong>Answer:</strong> Both A and R are true, and R is the correct explanation of A.</div>
  </div>

  <div class="pyq-item">
    <span class="mark-pill">COMPETENCY-BASED</span>
    <div class="pyq-q">If a country shifts abruptly from a state-controlled economy to a fully market-driven one without any transition phase, what challenges is it likely to face?</div>
    <div class="pyq-a">Based on Russia's Shock Therapy experience: a sharp fall in production/GDP, high inflation and currency devaluation, large-scale unemployment, collapse of the social welfare system, and the rise of a small wealthy class (oligarchs) controlling major resources, while most people's living standards decline.</div>
  </div>
</section>

<section id="memory">
  <span class="part-tag">Parts 10 & 11</span>
  <h2>PYQ Analysis & Memory Tricks</h2>

  <div class="table-wrap"><table>
    <thead><tr><th>Category</th><th>Topics</th></tr></thead>
    <tbody>
      <tr><td>Most repeated</td><td>Causes of disintegration · Shock Therapy · Perestroika vs Glasnost</td></tr>
      <tr><td>Most scoring</td><td>Shock Therapy — clear NCERT structure, easy full marks</td></tr>
      <tr><td>Rarely asked</td><td>Detailed India–Central Asia ties · Cuban Missile Crisis (mostly MCQ)</td></tr>
      <tr><td>Likely next</td><td>Assertion-Reason/Case-based on Shock Therapy · Competency-based economic-transition questions</td></tr>
    </tbody>
  </table></div>

  <div class="trick-card">
    <h4>🔠 "E-P-N-G-C" — Causes of Soviet Disintegration</h4>
    <p><strong>E</strong>conomic stagnation → <strong>P</strong>olitical (one-party rule) → <strong>N</strong>ationalism → <strong>G</strong>orbachev's reforms → <strong>C</strong>oup of 1991</p>
  </div>
  <div class="trick-card">
    <h4>🔠 "P-P-T-C" — Features of Shock Therapy</h4>
    <p><strong>P</strong>rivatisation → <strong>P</strong>rice deregulation → <strong>T</strong>rade liberalisation → <strong>C</strong>urrency convertibility</p>
  </div>
  <div class="trick-card">
    <h4>🧠 Perestroika vs Glasnost, remembered</h4>
    <p>"P for Paisa (money) = Economy" → Perestroika is the economy. "G for Government talk = Openness" → Glasnost is free speech.</p>
  </div>
  <div class="trick-card">
    <h4>🎯 NATO before Warsaw Pact</h4>
    <p>"NATO (1949) came first, Warsaw (1955) replied" — just like a reply always follows the original message.</p>
  </div>
</section>

<section id="revision">
  <span class="part-tag">Part 12</span>
  <h2>Last-Day Revision</h2>

  <div class="revision-box">
    <h4>📄 One-Page Revision Sheet</h4>
    <ul>
      <li><strong>Bipolar world:</strong> NATO (1949) vs Warsaw Pact (1955), 1945–1991.</li>
      <li><strong>Soviet economy:</strong> State-owned, centrally planned, subsidised, heavy-industry focus.</li>
      <li><strong>Soviet polity:</strong> One-party CPSU rule, 15 republics, Russia dominant.</li>
      <li><strong>Gorbachev (1985):</strong> Perestroika (economy) + Glasnost (politics).</li>
      <li><strong>Causes of disintegration:</strong> Economic + political + nationalism + reforms + failed coup.</li>
      <li><strong>Disintegration:</strong> Dec 1991 → 15 states → CIS formed.</li>
      <li><strong>Shock Therapy:</strong> Privatisation + liberalisation → GDP collapse, inflation, oligarchs.</li>
      <li><strong>Consequence:</strong> Unipolar world (USA dominant).</li>
      <li><strong>India:</strong> Ties with Russia continue; new ties with Central Asian Republics.</li>
    </ul>
  </div>

  <div class="grid-3">
    <div class="stat-card"><h4>⏳ 30-Second Revision</h4><p>Two blocs → Cold War (1945–91) → Gorbachev's reforms (1985) → USSR disintegrates (1991) → Shock Therapy → Unipolar world.</p></div>
    <div class="stat-card"><h4>⏳ 5-Minute Revision</h4><p>Timeline + One-Page Sheet + Master Mind Map.</p></div>
    <div class="stat-card"><h4>⏳ 15-Minute Revision</h4><p>Above + all Comparison Tables + Definitions + Board Exam Special.</p></div>
  </div>
</section>

<section id="writing">
  <span class="part-tag">Part 13</span>
  <h2>Board Answer-Writing Guide</h2>

  <div class="glossary-grid">
    <div class="term-card"><h4>2-Mark Answers</h4><p>Direct definition first, then one supporting point. No intro needed.</p></div>
    <div class="term-card"><h4>3-Mark Answers</h4><p>Three distinct points, 1–2 lines each, keyword-first.</p></div>
    <div class="term-card"><h4>5-Mark Answers</h4><p>Short context line → 4–5 numbered points → brief conclusion.</p></div>
    <div class="term-card"><h4>6-Mark Answers</h4><p>Mini-essay: Intro → sub-headed sections (e.g. Causes / Consequences) → Conclusion.</p></div>
  </div>

  <div class="callout mistake" style="margin-top:16px; font-size:14px;">
    ⚠️ <strong>Common mistakes that cost marks:</strong> unstructured paragraphs instead of points · confusing Perestroika with Glasnost · saying USSR was "defeated" (it disintegrated internally) · ignoring the negative effects of Shock Therapy · missing key years (1945, 1949, 1955, 1985, 1991).
  </div>
</section>

<section id="summary">
  <span class="part-tag">Part 15</span>
  <h2>Chapter Summary</h2>
  <p class="lead"><strong>100 words:</strong> After WWII, the world split into two blocs led by the USA and USSR — the Cold War — marked by NATO, the Warsaw Pact, an arms race, and the Cuban Missile Crisis. The USSR's rigid economy and one-party system stagnated, prompting Gorbachev's 1985 reforms (Perestroika & Glasnost). These exposed weaknesses and fuelled nationalism. The USSR disintegrated in December 1991 into 15 states and the CIS. Russia's Shock Therapy caused severe economic hardship. Bipolarity ended, and a unipolar world, dominated by the USA, took its place — while India kept its ties with Russia and built new ones with Central Asia.</p>

  <div class="revision-box">
    <h4>⚡ Ultra-Short Revision</h4>
    <p style="margin:0; color:var(--text-muted);">Cold War → rigid Soviet system → Gorbachev's reforms → nationalism rises → USSR disintegrates (1991) → CIS formed → Shock Therapy → Unipolar world → India–Russia ties continue.</p>
  </div>
</section>

<footer>
  <strong>The End of Bipolarity</strong> · CBSE Class 12 Political Science, Chapter 1 · Built for fast, visual board revision.<br>
  Good luck — you've got this. 🌟
</footer>
`,
              flashcards: [
                {
                  question: "In which year was the Berlin Wall demolished?",
                  answer: "The Berlin Wall was demolished by the public on November 9, 1989, symbolising the collapse of division between East and West."
                },
                {
                  question: "What does 'Glasnost' mean, and who introduced it?",
                  answer: "Glasnost means 'Openness'. It was introduced by Mikhail Gorbachev in the mid-1980s to allow greater political freedom and freedom of speech."
                },
                {
                  question: "What was 'Shock Therapy' in the post-Soviet context?",
                  answer: "It was a painful transition model from a socialist planned economy to a democratic capitalist economy, sponsored by the IMF and World Bank, which resulted in economic distress."
                },
                {
                  question: "Which leader opposed the 1991 coup and led the dissolution of the USSR?",
                  answer: "Boris Yeltsin, who later became the first President of the Russian Federation."
                }
              ],
              quiz: [
                {
                  question: "Which of the following events is considered the symbol of the end of the Cold War?",
                  options: [
                    "The Cuban Missile Crisis",
                    "The fall of the Berlin Wall in 1989",
                    "The formation of NATO",
                    "The Soviet invasion of Afghanistan"
                  ],
                  answerIndex: 1,
                  explanation: "The demolition of the Berlin Wall in 1989 led to the unification of Germany and marked the symbolic end of the communist bloc and the Cold War."
                },
                {
                  question: "Who was the last leader of the Soviet Union?",
                  options: [
                    "Vladimir Lenin",
                    "Joseph Stalin",
                    "Nikita Khrushchev",
                    "Mikhail Gorbachev"
                  ],
                  answerIndex: 3,
                  explanation: "Mikhail Gorbachev was the General Secretary of the Communist Party of the Soviet Union from 1985 until its collapse in 1991."
                },
                {
                  question: "What was the main economic consequence of 'Shock Therapy' in Russia?",
                  options: [
                    "A massive economic boom and rapid industrial growth",
                    "Stability of the Russian currency, the Ruble",
                    "The collapse of the state-controlled industrial complex and high inflation",
                    "Establishment of an egalitarian socialist welfare system"
                  ],
                  answerIndex: 2,
                  explanation: "Shock Therapy led to the rapid and chaotic privatization of state industries, causing them to be sold at throwaway prices ('largest garage sale in history'), causing massive inflation and currency depreciation."
                }
              ]
            },
            {
              id: "b1_ch2",
              title: "Contemporary Centres of Power",
              summary: "Explore alternative centers of political and economic power, such as the European Union (EU), ASEAN, and the rapid rise of China and India.",
              notes: `
                <h3>Introduction</h3>
                <p>After the unipolar world emerged in the early 1990s, it became clear that alternative organisations and nations could challenge US hegemony. These alternative centers limit America's dominance by offering regional economic cooperation and stability.</p>

                <h3>1. The European Union (EU)</h3>
                <p>As the Cold War ended, the integration of European states accelerated, leading to the creation of the European Union in 1992. The EU has evolved from an economic union to an increasingly political one.</p>
                <ul>
                  <li><strong>Key Characteristics:</strong> It has its own flag, anthem, founding date, and a common currency (the Euro). It also has some elements of a common foreign and security policy.</li>
                  <li><strong>Economic Power:</strong> The EU is one of the world's largest economies. The Euro can pose a challenge to the dominance of the US Dollar.</li>
                  <li><strong>Political and Diplomatic Influence:</strong> Two members of the EU (historically Britain, and currently France) hold permanent seats on the UN Security Council, giving them significant diplomatic leverage.</li>
                  <li><strong>Military Influence:</strong> The EU's combined armed forces are the second largest in the world.</li>
                </ul>

                <h3>2. Association of Southeast Asian Nations (ASEAN)</h3>
                <p>Established in 1967 by five countries in the region (Indonesia, Malaysia, Philippines, Singapore, and Thailand) through the signing of the Bangkok Declaration. Its primary objectives were to accelerate economic growth and promote regional peace and stability.</p>
                <ul>
                  <li><strong>The ASEAN Way:</strong> A unique form of interaction that is informal, non-confrontational, and cooperative. Respect for national sovereignty is critical.</li>
                  <li><strong>ASEAN Community:</strong> Built on three pillars: the ASEAN Security Community, the ASEAN Economic Community, and the ASEAN Socio-Cultural Community.</li>
                  <li><strong>ARF (ASEAN Regional Forum):</strong> Established in 1994 to coordinate security and foreign policy.</li>
                </ul>

                <h3>3. The Rise of the Chinese Economy</h3>
                <p>China's economic success since 1978 is linked to its reform program. China has projected itself to overtake the US as the world's largest economy by 2040.</p>
                <ul>
                  <li><strong>Open Door Policy:</strong> Announced by Deng Xiaoping in 1978, moving away from the Soviet-style closed command economy.</li>
                  <li><strong>Phased Privatization:</strong> China privatized agriculture in 1982, followed by industry in 1998. It also established Special Economic Zones (SEZs) to attract foreign investment.</li>
                  <li><strong>Impact:</strong> China has become the workshop of the world, though issues like unemployment, environmental degradation, and inequality persist.</li>
                </ul>
              `,
              flashcards: [
                {
                  question: "When was the European Union established?",
                  answer: "The European Union was established in 1992 through the signing of the Maastricht Treaty."
                },
                {
                  question: "What is the 'ASEAN Way'?",
                  answer: "A style of ASEAN interaction that is informal, non-confrontational, and relies on consensus and cooperative dialogue."
                },
                {
                  question: "Which Chinese leader declared the 'Open Door' policy in 1978?",
                  answer: "Deng Xiaoping declared the policy, initiating market reforms and economic liberalization in China."
                },
                {
                  question: "Name the five founding members of ASEAN.",
                  answer: "Indonesia, Malaysia, Philippines, Singapore, and Thailand. (Signed the Bangkok Declaration in 1967)."
                }
              ],
              quiz: [
                {
                  question: "The Maastricht Treaty led to the creation of which organisation?",
                  options: [
                    "NATO",
                    "The European Union",
                    "ASEAN",
                    "The League of Nations"
                  ],
                  answerIndex: 1,
                  explanation: "The Treaty on European Union (commonly known as the Maastricht Treaty) was signed in 1992, creating the European Union."
                },
                {
                  question: "What are the three pillars of the ASEAN Community?",
                  options: [
                    "Military, Nuclear, Space Communities",
                    "Security, Economic, and Socio-Cultural Communities",
                    "Agricultural, Industrial, and Digital Communities",
                    "Judiciary, Legislative, and Executive Communities"
                  ],
                  answerIndex: 1,
                  explanation: "ASEAN broadened its scope by defining three pillars: Security, Economic, and Socio-Cultural Communities to foster deeper integration."
                },
                {
                  question: "In which year did China adopt the 'Open Door' policy to liberalize its economy?",
                  options: [
                    "1949",
                    "1962",
                    "1978",
                    "1991"
                  ],
                  answerIndex: 2,
                  explanation: "Deng Xiaoping initiated the 'Open Door' economic policy in December 1978, transitioning China into a socialist market economy."
                }
              ]
            }
          ]
        },
        {
          id: "book_2",
          title: "Politics in India Since Independence",
          chapters: [
            {
              id: "b2_ch1",
              title: "Challenges of Nation Building",
              summary: "Examine the immediate challenges India faced after independence in 1947: partition, integration of princely states, and linguistic reorganization.",
              notes: `
                <h3>Introduction</h3>
                <p>At the hour of midnight on 14-15 August 1947, India attained independence. Prime Minister Jawaharlal Nehru delivered his famous <strong>'Tryst with Destiny'</strong> speech to the Constituent Assembly. India faced three major challenges immediately after independence.</p>

                <h3>Three Challenges of Independent India</h3>
                <ol>
                  <li><strong>Shape a Nation:</strong> To unite a deeply diverse society with different languages, cultures, and religions into one nation without destroying local identities.</li>
                  <li><strong>Establish Democracy:</strong> To draft a constitution and set up democratic institutions, ensuring regular, free, and fair elections.</li>
                  <li><strong>Ensure Development:</strong> To develop the economy to eliminate poverty and ensure the welfare of all sections, rather than just a privileged few.</li>
                </ol>

                <h3>Partition: Consequences and Legacy</h3>
                <p>The division of British India into India and Pakistan was based on the 'two-nation theory' advanced by the Muslim League, which argued that India consisted of two distinct peoples: Hindus and Muslims.</p>
                <ul>
                  <li><strong>The Process:</strong> Extremely painful and complex. Regions with Muslim majorities (West and East) were partitioned, dividing Punjab and Bengal.</li>
                  <li><strong>Consequences:</strong> One of the largest, most abrupt, unplanned, and tragic transfers of population in human history. Around 80 lakh (8 million) people had to migrate across the new borders. Between 5 to 10 lakh people were killed in partition-related communal violence. Women faced extreme violence, and thousands of children were separated from families.</li>
                </ul>

                <h3>Integration of Princely States</h3>
                <p>British India was divided into British Indian Provinces and Princely States (ruled by local princes acknowledging British supremacy). There were <strong>565 princely states</strong>.</p>
                <ul>
                  <li><strong>The Threat:</strong> The British declared that with the lapse of paramountcy, princely states were free to join either India or Pakistan, or remain independent. The rulers of Travancore, Hyderabad, and Bhopal wanted independence, threatening India's integrity.</li>
                  <li><strong>Sardar Patel's Crucial Role:</strong> India's first Deputy Prime Minister and Home Minister, Sardar Vallabhbhai Patel, used diplomacy and firm persuasion to bring almost all princely states into the Indian Union. His approach succeeded in getting them to sign the <strong>'Instrument of Accession'</strong>.</li>
                  <li><strong>Difficult Cases:</strong> Junagadh, Hyderabad, Kashmir, and Manipur proved more difficult than others. Hyderabad was integrated via military action ('Operation Polo') in 1948. Manipur was integrated by signing a Merger Agreement in 1949.</li>
                </ul>

                <h3>Reorganisation of States</h3>
                <p>The boundary-drawing process did not stop with partition. Internal boundaries had to be drawn to reflect linguistic diversity.</p>
                <ul>
                  <li><strong>Potti Sriramulu:</strong> A veteran Gandhian went on an indefinite fast demanding a separate state of Andhra for Telugu speakers. He died after 56 days of fasting. This led to widespread violent protests.</li>
                  <li><strong>Andhra State:</strong> Created in December 1952 as the first linguistic state.</li>
                  <li><strong>States Reorganisation Commission (SRC):</strong> Set up in 1953 to examine the issue. Based on its recommendations, the States Reorganisation Act was passed in 1956, creating <strong>14 states and 6 union territories</strong>.</li>
                </ul>
              `,
              flashcards: [
                {
                  question: "What was Jawaharlal Nehru's famous midnight speech called?",
                  answer: "It was called the 'Tryst with Destiny' speech, delivered to the Constituent Assembly on the night of August 14-15, 1947."
                },
                {
                  question: "How many princely states existed in India at the time of independence?",
                  answer: "There were 565 princely states."
                },
                {
                  question: "Who is known as the 'Iron Man of India' for integrating princely states?",
                  answer: "Sardar Vallabhbhai Patel, the first Home Minister and Deputy Prime Minister of India."
                },
                {
                  question: "What was the 'Instrument of Accession'?",
                  answer: "A legal document signed by rulers of princely states, agreeing to align their territories with the Union of India."
                },
                {
                  question: "Which was the first state created on a linguistic basis in India?",
                  answer: "Andhra State, created in December 1952 for Telugu speakers following the death of Potti Sriramulu."
                }
              ],
              quiz: [
                {
                  question: "Who among the following died after 56 days of fast for the creation of Andhra State?",
                  options: [
                    "Sardar Vallabhbhai Patel",
                    "Jawaharlal Nehru",
                    "Potti Sriramulu",
                    "C. Rajagopalachari"
                  ],
                  answerIndex: 2,
                  explanation: "Potti Sriramulu, a Gandhian leader, died after a 56-day fast demanding a separate state of Andhra for Telugu-speaking people."
                },
                {
                  question: "What did signing the 'Instrument of Accession' mean for a princely state?",
                  options: [
                    "It became part of Pakistan",
                    "It agreed to merge with the Indian Union",
                    "It declared complete independence",
                    "It joined the British Empire again"
                  ],
                  answerIndex: 1,
                  explanation: "Signing the Instrument of Accession meant that the princely state agreed to become a part of the Union of India."
                },
                {
                  question: "In which year was the States Reorganisation Act passed, creating 14 states and 6 union territories?",
                  options: [
                    "1947",
                    "1950",
                    "1952",
                    "1956"
                  ],
                  answerIndex: 3,
                  explanation: "The States Reorganisation Act was passed in 1956 following recommendations from the States Reorganisation Commission (SRC)."
                }
              ]
            },
            {
              id: "b2_ch2",
              title: "Era of One-Party Dominance",
              summary: "Analyze the early years of democracy in India, dominated by the Congress Party, and the formation of early opposition movements.",
              notes: `
                <h3>Introduction</h3>
                <p>Having established a constitution, India had to hold its first general elections. This was an unprecedented challenge due to India's massive size, high levels of poverty, and low literacy rates (only 15% of voters were literate).</p>

                <h3>The First Three General Elections</h3>
                <p>The Election Commission of India was set up in January 1950 with <strong>Sukumar Sen</strong> as the first Chief Election Commissioner. The first general election in 1951-52 was a landmark for democracy worldwide.</p>
                <ul>
                  <li><strong>Congress Domination:</strong> The Indian National Congress won the first three general elections (1952, 1957, 1962) with overwhelming majorities.
                    <ul>
                      <li>In 1952, Congress won 364 out of 489 seats.</li>
                      <li>In 1957, Congress won 371 seats.</li>
                      <li>In 1962, Congress won 361 seats.</li>
                    </ul>
                  </li>
                  <li><strong>Jawaharlal Nehru's Leadership:</strong> Nehru was the undisputed leader of the party and led campaigns across the country.</li>
                </ul>

                <h3>Why did Congress Dominate?</h3>
                <ol>
                  <li><strong>Legacy of the Freedom Struggle:</strong> The Congress was seen as the heir to the national movement. Many of its leaders had spent years in jail and were household names.</li>
                  <li><strong>All-Inclusive Coalition:</strong> Congress was a broad social and ideological coalition. It brought together revolutionaries, pacifists, conservatives, radicals, extremists, moderates, and people from all classes, castes, and religions.</li>
                  <li><strong>First-Past-The-Post System:</strong> The electoral system favored the largest single party. While Congress received about 45% of the total votes, it secured over 70% of the seats because the opposition vote was split.</li>
                </ol>

                <h3>Emergence of Opposition Parties</h3>
                <p>Though they won very few seats, opposition parties played a vital role in keeping the democratic character of India alive. They criticised policies, kept the Congress under check, and groomed future leaders.</p>
                <ul>
                  <li><strong>Socialist Party:</strong> Formed inside Congress in 1934, it became a separate party in 1948 led by Jayaprakash Narayan, Achyut Patwardhan, and Ram Manohar Lohia.</li>
                  <li><strong>Communist Party of India (CPI):</strong> Inspired by the Bolshevik Revolution, they gained power in Kerala in 1957 (forming the first non-Congress state government led by E.M.S. Namboodiripad). CPI split in 1964 into CPI and CPI(M).</li>
                  <li><strong>Bharatiya Jana Sangh:</strong> Formed in 1951 by Syama Prasad Mookerjee. Its ideology was based on 'one country, one culture, one nation' and advocated for Akhand Bharat. It was the predecessor to the BJP.</li>
                  <li><strong>Swatantra Party:</strong> Formed in 1959 by C. Rajagopalachari, advocating for free-market economics, individual freedom, and minimal government intervention.</li>
                </ul>
              `,
              flashcards: [
                {
                  question: "Who was the first Chief Election Commissioner of India?",
                  answer: "Sukumar Sen, appointed in January 1950."
                },
                {
                  question: "Who led the first non-Congress state government in Kerala in 1957?",
                  answer: "E.M.S. Namboodiripad of the Communist Party of India (CPI)."
                },
                {
                  question: "Who founded the Bharatiya Jana Sangh in 1951?",
                  answer: "Syama Prasad Mookerjee."
                },
                {
                  question: "What electoral system allowed Congress to win vast majorities of seats with ~45% vote share?",
                  answer: "The 'First-Past-The-Post' (FPTP) system, where the candidate with the highest votes in a constituency wins, regardless of whether they cross 50%."
                }
              ],
              quiz: [
                {
                  question: "Who was the founder leader of the Swatantra Party formed in 1959?",
                  options: [
                    "C. Rajagopalachari",
                    "Syama Prasad Mookerjee",
                    "Jayaprakash Narayan",
                    "Ram Manohar Lohia"
                  ],
                  answerIndex: 0,
                  explanation: "The Swatantra Party was founded by C. Rajagopalachari in 1959, advocating for individual liberty and free markets."
                },
                {
                  question: "In which state did the Communist Party of India form the first non-Congress state government in 1957?",
                  options: [
                    "West Bengal",
                    "Kerala",
                    "Andhra Pradesh",
                    "Punjab"
                  ],
                  answerIndex: 1,
                  explanation: "The CPI won the assembly elections in Kerala in 1957, forming the first non-Congress state government under E.M.S. Namboodiripad."
                },
                {
                  question: "Which opposition party's ideology was centered around 'One Country, One Culture, One Nation'?",
                  options: [
                    "Socialist Party",
                    "Communist Party of India",
                    "Bharatiya Jana Sangh",
                    "Swatantra Party"
                  ],
                  answerIndex: 2,
                  explanation: "The Bharatiya Jana Sangh, founded by Syama Prasad Mookerjee, emphasized 'One Country, One Culture, One Nation' and Akhand Bharat."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

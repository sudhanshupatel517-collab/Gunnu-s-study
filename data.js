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
<section id="overview" class="reveal">
  <span class="part-tag">Part 01 — Overview</span>
  <h2>What This Chapter Is Really About</h2>
  <p class="lead">For nearly half a century, the world worked like a two-player game. After World War II ended in 1945, two nations — the <strong style="color:var(--blue)">United States</strong> and the <strong style="color:var(--red)">Soviet Union</strong> — grew so powerful that almost every other country on Earth ended up leaning toward one side or the other. This arrangement is called a <strong>bipolar world order</strong>, and the decades-long rivalry between these two "poles" is called the <strong>Cold War</strong>.</p>
  <p>This chapter tells you how that rivalry played out — through military alliances, an exhausting arms race, and a series of near-catastrophic stand-offs — and then, more importantly, <em>why</em> one side of this rivalry, the USSR, suddenly collapsed in December 1991. That collapse didn't just end a country. It ended an entire era of world politics and replaced it with something new: a world where one power, the USA, stood without a rival. Understanding this shift is the key that unlocks almost every other chapter in your Political Science book.</p>

  <div class="grid-3">
    <div class="stat-card glass">
      <h4>🕰️ Duration</h4>
      <p>The Cold War lasted <strong style="color:var(--text)">1945–1991</strong> — 45+ years of tension, alliances and competition, without direct war between the superpowers themselves.</p>
    </div>
    <div class="stat-card glass">
      <h4>⭐ Why It Matters</h4>
      <p>This is the <strong style="color:var(--text)">foundation chapter</strong> of your entire book — Chapters 2, 3 and 4 (US Hegemony, Alternative Power Centres, South Asia) all build on the concepts introduced here.</p>
    </div>
    <div class="stat-card glass">
      <h4>🎯 Board Weightage</h4>
      <p>Nearly <strong style="color:var(--text)">every board exam</strong> draws at least one 4–6 mark question directly from this chapter — high-yield, high-priority.</p>
    </div>
  </div>

  <h3 style="margin-top:44px; font-size:1.15rem;">🎯 Learning Objectives — By the End of This Chapter You Should Be Able To:</h3>
  <ul class="obj-list glass" style="padding:6px 24px; margin-top:18px;">
    <li><span class="obj-num">01</span><span>Explain what is meant by a <strong>bipolar world</strong> and the <strong>Cold War</strong>, and why the Cold War never became a "hot" war.</span></li>
    <li><span class="obj-num">02</span><span>Describe the key <strong>features of the Soviet economy and political system</strong>, and explain both its achievements and its weaknesses.</span></li>
    <li><span class="obj-num">03</span><span>Explain <strong>Gorbachev's reforms</strong> — Perestroika and Glasnost — including why they were introduced and why they backfired.</span></li>
    <li><span class="obj-num">04</span><span>Analyse the <strong>internal and external causes</strong> behind the disintegration of the USSR.</span></li>
    <li><span class="obj-num">05</span><span>Describe the <strong>process of disintegration</strong> and the economic model of <strong>Shock Therapy</strong> that followed it, along with its consequences.</span></li>
    <li><span class="obj-num">06</span><span>Explain the wider <strong>consequences of the end of bipolarity</strong> for global politics, including the emergence of a unipolar world.</span></li>
    <li><span class="obj-num">07</span><span>Describe <strong>India's relations</strong> with Russia and with the newly independent Central Asian Republics.</span></li>
  </ul>
</section>

<section id="timeline" class="reveal">
  <span class="part-tag">Timeline</span>
  <h2>How It All Unfolded</h2>
  <p class="lead">Follow the fault line from revolution, to rivalry, to reform, to collapse — and what came after.</p>
  <div class="timeline glass" style="padding:30px 30px 30px 46px;">
    <div class="t-item"><div class="t-year">1917</div><div class="t-text"><strong>Russian Revolution.</strong> The Bolsheviks, led by Lenin, overthrow the Tsarist regime and establish the world's first socialist state — laying the ideological foundation for everything that follows.</div></div>
    <div class="t-item"><div class="t-year">1945</div><div class="t-text">World War II ends. <strong>The USA and USSR emerge as the world's two superpowers</strong>, while older powers like Britain, France and Germany are left weakened. The Cold War begins.</div></div>
    <div class="t-item"><div class="t-year">1949</div><div class="t-text"><strong style="color:var(--blue)">NATO</strong> is formed — a US-led military alliance meant to collectively defend Western Europe against the spread of Soviet influence.</div></div>
    <div class="t-item"><div class="t-year">1955</div><div class="t-text"><strong style="color:var(--red)">The Warsaw Pact</strong> is formed — the USSR's answer to NATO, binding the Soviet Union and its Eastern European allies into a rival military bloc.</div></div>
    <div class="t-item"><div class="t-year">1962</div><div class="t-text"><strong>The Cuban Missile Crisis.</strong> The USSR secretly places nuclear missiles in Cuba, just off the US coast. For thirteen tense days, the world comes closer to nuclear war than at any other point in history.</div></div>
    <div class="t-item"><div class="t-year">1979–89</div><div class="t-text">The <strong>Soviet war in Afghanistan</strong> drains Soviet resources and damages the USSR's international standing — a costly, decade-long conflict often compared to America's Vietnam War.</div></div>
    <div class="t-item"><div class="t-year">1985</div><div class="t-text"><strong style="color:var(--gold)">Mikhail Gorbachev</strong> becomes leader of the USSR. Recognising the system was falling behind, he launches two landmark reforms: <strong>Perestroika</strong> (economic restructuring) and <strong>Glasnost</strong> (political openness).</div></div>
    <div class="t-item"><div class="t-year">1989</div><div class="t-text">The <strong>Berlin Wall falls</strong> — the most visible physical symbol of the "Iron Curtain" dividing Europe comes down, and Eastern European nations begin breaking away from Soviet control.</div></div>
    <div class="t-item"><div class="t-year">Aug 1991</div><div class="t-text">Hardline Communist Party members attempt a <strong>coup against Gorbachev</strong>. It fails within days — but it fatally weakens the central Soviet government and turns Boris Yeltsin into a national hero.</div></div>
    <div class="t-item"><div class="t-year">Dec 1991</div><div class="t-text"><strong style="color:var(--gold)">The USSR formally disintegrates.</strong> Fifteen new independent nations emerge; most (except the Baltic states) form the <strong>CIS</strong>. Bipolarity, and the Cold War, officially end.</div></div>
    <div class="t-item"><div class="t-year">1990s</div><div class="t-text">Russia adopts <strong>Shock Therapy</strong> — a rapid, painful transition from a command economy to a capitalist market economy — with severe short-term human costs.</div></div>
  </div>
</section>

<section id="concepts" class="reveal">
  <span class="part-tag">Part 02</span>
  <h2>Complete Concept Notes</h2>
  <p class="lead">Tap any card to expand into full detail. 🔴 Soviet-side · 🔵 Western-side · 🟡 Turning points & reforms.</p>

  <div class="concepts-wrap">

    <details class="concept glass" data-side="gold" open>
      <summary><span class="num">01</span> 🌍 Bipolar World</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A world order where power is concentrated in <strong>two dominant blocs/superpowers</strong>, each with its own allies, ideology and sphere of influence.</p>
        <p><strong>Simple explanation:</strong> Imagine the world split into two big "teams" — Team USA and Team USSR — and nearly every other country had to lean toward one side, whether through formal treaties, economic dependence, or ideological sympathy.</p>
        <p><strong>NCERT explanation:</strong> The two blocs were led by the two superpowers — the USA leading the Western/Capitalist bloc, and the USSR leading the Eastern/Socialist bloc — with military, economic and ideological competition running through nearly every region of the globe.</p>
        <p><strong>Board explanation:</strong> Bipolarity describes the <em>distribution of power</em> in the international system — contrasted with <strong>unipolarity</strong> (one dominant power, as after 1991) and <strong>multipolarity</strong> (several competing centres of power, which some argue is emerging today).</p>
        <div class="callout exam">📝 <strong>Exam Point:</strong> Always write "a world divided into two blocs led by two superpowers" — this exact phrasing scores full marks in 1-2 mark questions.</div>
        <div class="callout mistake">⚠️ <strong>Common Mistake:</strong> Students confuse bipolarity with just "two countries fighting." It means two entire <em>blocs/alliance systems</em> in competition — not merely two nations.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">02</span> ❄️ Cold War</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A state of tension, hostility and rivalry between the USA and USSR (and their blocs) that never escalated into direct armed conflict between the two superpowers, but was expressed through alliances, arms build-up, propaganda and proxy wars.</p>
        <p><strong>Simple explanation:</strong> A "war" fought without the two main players ever directly firing at each other — instead through words, weapons stockpiles, espionage, and by backing opposite sides in other countries' conflicts.</p>
        <p><strong>Board explanation:</strong> It's called "cold" precisely because there was no direct "hot" war between the superpowers — although there were very real, very hot proxy wars fought in other regions, like Korea and Vietnam.</p>
        <div class="callout ncert">📦 <strong>NCERT note:</strong> Ordinary citizens on both sides lived under the constant, genuine fear of nuclear war for decades — a fear that shaped culture, politics and everyday life.</div>
        <p><strong>Example:</strong> The Korean War (1950–53) and the Vietnam War — both widely seen as proxy battles of Cold War rivalry, where the superpowers supported opposing sides without fighting each other directly.</p>
        <div class="callout exam">📝 <strong>1-mark answer:</strong> "Cold War refers to the competition, tension, and series of confrontations between the USA and USSR, without a direct full-scale war between them."</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">03</span> 🏆 Superpowers</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A country with military, economic and political power that goes far beyond even a "great power" — capable of shaping events on a truly global scale.</p>
        <p>USA and USSR became the world's two superpowers after WWII. Their status rested on massive nuclear arsenals, extensive military alliances, industrial and economic strength, and an ideological "pull" that attracted allies across the world.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">04</span> ☭ Soviet Bloc (Eastern Bloc)</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The group of countries aligned with, and largely controlled by, the USSR — following socialist/communist ideology.</p>
        <p>Included the USSR itself, plus Eastern European states like Poland, East Germany, Hungary, Czechoslovakia, Bulgaria and Romania. These were often called <strong>satellite states</strong> — a country that is formally independent on paper, but whose politics and policy are heavily shaped by a more powerful neighbour.</p>
        <p>Military alliance: <strong>the Warsaw Pact</strong>.</p>
      </div>
    </details>

    <details class="concept glass" data-side="blue">
      <summary><span class="num">05</span> 🦅 US Bloc (Western Bloc)</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The group of countries aligned with the USA — following capitalism and liberal democracy.</p>
        <p>Included the USA, UK, France, West Germany, Canada, and most of Western Europe. These nations shared not just a military alliance, but a broadly common economic model built around private enterprise and elected government.</p>
        <p>Military alliance: <strong>NATO</strong>.</p>
      </div>
    </details>

    <details class="concept glass" data-side="blue">
      <summary><span class="num">06</span> 🛡️ NATO — North Atlantic Treaty Organisation</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A military alliance formed in <strong>1949</strong> by the USA and Western European nations, built on the principle of collective defence — an attack on one member is treated as an attack on all.</p>
        <p><strong>Purpose:</strong> To deter Soviet expansion and provide a unified military front for Western Europe and North America.</p>
        <div class="callout exam">📝 <strong>Exam Point:</strong> NATO = US-led military alliance, formed 1949 — remember this pairs directly with the Warsaw Pact in comparison questions.</div>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">07</span> 🛡️ Warsaw Pact</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A military alliance formed in <strong>1955</strong> by the USSR and its Eastern European allies, created directly in response to NATO's formation and West Germany joining it.</p>
        <p>It bound Eastern Bloc militaries together under effective Soviet command, and it dissolved in 1991 alongside the USSR itself.</p>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">08</span> 💣 Arms Race</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The continuous competition between the USA and USSR to build more, and more powerful, weapons than the other side — especially nuclear weapons.</p>
        <p><strong>Simple explanation:</strong> Neither side wanted to fall behind militarily, so each kept building bigger stockpiles and newer technology, in a spiral that never really had a "finish line."</p>
        <p><strong>NCERT explanation:</strong> This competition extended well beyond battlefield weapons into the <strong>Space Race</strong> — satellites like Sputnik, and eventually the Moon landing — as both sides sought to demonstrate technological and ideological superiority.</p>
        <p><strong>Board explanation:</strong> The arms race was extraordinarily expensive, and this constant military spending diverted resources away from social and economic development in both blocs — a cost that hit the weaker Soviet economy especially hard.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">09</span> 🌴 Cuban Missile Crisis (1962)</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A major Cold War confrontation in 1962 when the USSR secretly placed nuclear missiles in Cuba — dangerously close to the US mainland — pushing the world to the brink of nuclear war.</p>
        <p><strong>NCERT explanation:</strong> The crisis was ultimately resolved through negotiation rather than conflict: the USSR agreed to withdraw its missiles from Cuba, while the US quietly agreed to remove its own missiles from Turkey.</p>
        <p><strong>Board explanation:</strong> This is widely cited as the single closest the world came to nuclear war during the entire Cold War — and it pushed both superpowers to later pursue arms-control agreements to prevent a repeat.</p>
        <div class="callout exam">📝 Frequently asked as an "example of Cold War tension" in 1–2 mark questions.</div>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">10</span> 🏭 The Soviet System & Economy</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The political and economic system established in the USSR after the 1917 Bolshevik Revolution, built on the ideals of socialism — a deliberate, rival alternative to the capitalist order of the Western bloc.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Feature</th><th>Explanation</th></tr></thead>
          <tbody>
            <tr><td>State Ownership</td><td>All industry and major property was owned and controlled by the state, not private individuals.</td></tr>
            <tr><td>Central Planning</td><td>The economy was guided by state planning commissions through Five-Year Plans, not by market demand and supply.</td></tr>
            <tr><td>Guaranteed Welfare</td><td>Full employment, and free or heavily subsidised healthcare, education and childcare for all citizens.</td></tr>
            <tr><td>Subsidies</td><td>Basic commodities — bread, milk, essential goods — were kept artificially cheap through state subsidy.</td></tr>
            <tr><td>Heavy Industry Focus</td><td>Massive emphasis on heavy industries — steel, machinery, defence — often at the cost of consumer goods.</td></tr>
            <tr><td>Achievements</td><td>Rapid industrial growth, nuclear-power status, and leadership in space exploration (e.g., Sputnik).</td></tr>
          </tbody>
        </table></div>
        <div class="callout ncert">📦 <strong>NCERT note:</strong> Despite genuine industrial and technological achievements, the Soviet economy suffered from deep structural weaknesses that eventually led to stagnation.</div>
        <div class="callout mistake">⚠️ <strong>Common Mistake:</strong> Don't call the Soviet economy simply "backward." It achieved real industrial, military and space-technology feats — its problem was long-term structural inefficiency, not a lack of achievement.</div>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">11</span> 🏛️ Political Structure of the USSR</summary>
      <div class="concept-body">
        <p>The <strong>Communist Party of the Soviet Union (CPSU)</strong> controlled all political, social and economic institutions in the country. Its control was <strong>non-democratic</strong> — no space existed for opposition parties or alternative political movements.</p>
        <ul>
          <li>All major policy decisions were taken centrally by party leadership.</li>
          <li>A large, privileged bureaucracy controlled access to resources — leading to widespread inefficiency and corruption.</li>
          <li>The USSR was a union of <strong>15 Republics</strong>, with the Russian Republic being by far the most dominant in area, population and resources.</li>
        </ul>
        <div class="callout exam">📝 <strong>2/3-mark structure:</strong> One-party rule of CPSU → no political opposition → centralised decision-making → dominance of the Russian Republic among the 15.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">12</span> 🔧 Rise of Gorbachev</summary>
      <div class="concept-body">
        <p><strong>Mikhail Gorbachev</strong> became leader of the CPSU in <strong>March 1985</strong>, at a moment when the Soviet system was visibly falling behind the West both economically and technologically.</p>
        <p>He introduced <strong>Perestroika</strong> (restructuring) and <strong>Glasnost</strong> (openness) to modernise the Soviet economy and political system — genuinely intended to save and strengthen socialism, not destroy it.</p>
        <div class="callout ncert">📦 These reforms instead released long-suppressed nationalist and democratic aspirations across the Soviet republics, which ultimately <em>accelerated</em> — rather than prevented — the USSR's disintegration.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">13</span> 🔨 Perestroika vs Glasnost</summary>
      <div class="concept-body">
        <p><strong>Perestroika</strong> ("restructuring") — Gorbachev's policy of economic reform, aimed at liberalising and modernising the rigid, centrally planned Soviet economy, including reduced defence spending and opening up to foreign investment and technology.</p>
        <p><strong>Glasnost</strong> ("openness") — Gorbachev's policy of political openness, allowing far greater freedom of expression and press freedom, and rolling back decades of state censorship.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Basis</th><th>Perestroika</th><th>Glasnost</th></tr></thead>
          <tbody>
            <tr><td>Focus Area</td><td>Economic reform</td><td>Political/social reform</td></tr>
            <tr><td>Aim</td><td>Modernise economy, allow market elements</td><td>Allow free speech, reduce censorship</td></tr>
            <tr><td>Effect</td><td>Exposed economic weaknesses</td><td>Exposed political repression</td></tr>
            <tr><td>Result</td><td>Increased economic instability</td><td>Increased political dissent and nationalism</td></tr>
          </tbody>
        </table></div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">14</span> 🗳️ Democratic Reforms under Gorbachev</summary>
      <div class="concept-body">
        <p>Gorbachev introduced genuine democratisation — allowing freer, more open elections and reducing the CPSU's total monopoly on power. He sought to end the Cold War, improve relations with the West, reduce the size of Soviet armed forces, and withdraw troops from Afghanistan.</p>
        <p>These reforms, though well-intentioned, weakened central control significantly — giving real political space to nationalist movements within the various Soviet republics for the first time in decades.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">15</span> 💥 Causes of Soviet Disintegration (Summary)</summary>
      <div class="concept-body">
        <p>A combination of deep internal weaknesses and mounting external pressures built up over decades and finally broke the system in 1991. See the dedicated <a href="#causes">Causes Deep-Dive</a> section below for the full breakdown with tables and a mini mind map.</p>
        <div class="callout mistake">⚠️ USSR was <em>not</em> defeated militarily — it collapsed from within, due to structural weaknesses, not war.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">16</span> 👤 Role of Leadership</summary>
      <div class="concept-body">
        <p><strong>Mikhail Gorbachev:</strong> Initiated reforms hoping to save and modernise socialism; his reforms instead triggered its collapse — an outcome he neither intended nor fully anticipated.</p>
        <p><strong>Boris Yeltsin:</strong> President of the Russian Republic; publicly opposed the hardline August 1991 coup, emerged as an enormously popular figure, and became the first President of independent Russia.</p>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">17</span> 🧨 Disintegration of the USSR</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The formal break-up of the Soviet Union into 15 independent republics in <strong>December 1991</strong>.</p>
        <p>Following the failed August 1991 coup, the authority of the central Soviet government collapsed rapidly, and by December the USSR formally ceased to exist. The 15 former republics included Russia, Ukraine, Belarus, Kazakhstan, Uzbekistan, Georgia, Armenia, Azerbaijan, and the three Baltic states — Estonia, Latvia and Lithuania.</p>
        <div class="callout ncert">📦 The Baltic states were the first to declare independence, and unlike the other republics, they did <strong>not</strong> join the CIS.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">18</span> 🤝 Formation of CIS (Commonwealth of Independent States)</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A loose association of most former Soviet republics (excluding the Baltic states), formed in December 1991 to manage post-Soviet cooperation.</p>
        <p><strong>Simple explanation:</strong> After the USSR broke up, most of the newly independent nations decided to form a loose "club" for continued cooperation, rather than becoming total strangers overnight.</p>
        <p>It reflects that, despite formal political separation, deep historical, economic and cultural ties among these countries continued to matter.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">19</span> 🇷🇺 Russia After the USSR</summary>
      <div class="concept-body">
        <p><strong>Russia</strong> emerged as the <strong>successor state</strong> to the USSR — inheriting the USSR's permanent seat at the <strong>UN Security Council</strong>, most of its nuclear weapons, and its major diplomatic assets.</p>
        <p><strong>Boris Yeltsin</strong> became the first President of the Russian Federation, overseeing a massive political and economic restructuring — moving from a socialist, centrally planned system toward a capitalist, market-driven democracy.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">20</span> ⚡ Shock Therapy</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> The name given to the radical, rapid economic reform model adopted by Russia and other former Soviet/Eastern European states to transition from a socialist command economy to a capitalist market economy.</p>
        <p><strong>Simple explanation:</strong> Instead of a slow, phased transition, these countries flipped almost overnight from state-controlled to open-market economics — hence "shock." The model was based on prescriptions from Western institutions like the <strong>IMF and World Bank</strong>, on the assumption that the fastest route to a market economy was also the best one.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Feature</th><th>Explanation</th></tr></thead>
          <tbody>
            <tr><td>Privatisation</td><td>State-owned industries rapidly sold off/transferred to private ownership.</td></tr>
            <tr><td>State Withdrawal</td><td>Government stopped controlling prices, production and trade.</td></tr>
            <tr><td>Trade Liberalisation</td><td>Opened up foreign trade; removed tariffs and barriers.</td></tr>
            <tr><td>Currency Convertibility</td><td>Domestic currency made fully convertible into other world currencies.</td></tr>
            <tr><td>New Trade Blocs</td><td>Old Soviet-era trade body (COMECON) dismantled; new Western-aligned trade structures built instead.</td></tr>
          </tbody>
        </table></div>
        <p>✅ <strong>Positive effects:</strong> New markets opened up; a wider variety of consumer goods became available; former Soviet economies were integrated into the world economy.</p>
        <p>❌ <strong>Negative effects (the larger story):</strong> Existing structures of production and social welfare collapsed without a genuine alternative in place. Russia's GDP in 1999 was <strong>less than half</strong> of what it was in 1989. The rouble was devalued, causing hyperinflation that destroyed people's savings. Unemployment rose sharply. Withdrawal of subsidies on food and essentials pushed huge numbers of people below the poverty line. The social welfare system — healthcare, education, pensions — collapsed. Old trade networks like COMECON disappeared without adequate substitutes, hurting entire industries. A <strong>mafia-driven economy</strong> emerged in many regions, with resources sold off cheaply to a small class of oligarchs (crony capitalism).</p>
        <div class="callout ncert">📦 <strong>NCERT metaphor:</strong> "For the mass of the population, the road from command economy to free market has been very rocky... this was one of the largest garage sales in history."</div>
        <div class="callout exam">📝 <strong>5/6-mark structure:</strong> Define → Positive effects (brief) → Negative effects (detailed — most marks here) → Conclusion.</div>
        <div class="callout mistake">⚠️ Students often only list positive effects — but the NCERT chapter is strongly <em>critical</em> of Shock Therapy, and boards expect emphasis on the negative consequences.</div>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">21</span> 🌐 Consequences of the End of Bipolarity</summary>
      <div class="concept-body">
        <p>The end of the Cold War meant the end of decades of ideological, economic and military competition between two rival blocs. It led to a new world order with power now concentrated far more heavily in the hands of the <strong>USA</strong>.</p>
        <ul>
          <li>New independent states emerged across Eastern Europe and Central Asia, each pursuing its own development path.</li>
          <li>Many Eastern European countries and former Soviet republics shifted toward liberal democracy and capitalism.</li>
          <li>New economic and military alliances took shape, reshaping institutions like NATO, the UN, and global trade bodies.</li>
          <li>Global politics saw new areas of conflict emerge — ethnic conflicts and civil wars, particularly in the Balkans — alongside the rise of new regional powers.</li>
        </ul>
      </div>
    </details>

    <details class="concept glass" data-side="blue">
      <summary><span class="num">22</span> 🦅 Emergence of a Unipolar World</summary>
      <div class="concept-body">
        <p><strong>Definition:</strong> A world order in which only one country — the USA — holds overwhelming military, economic and political superiority, with no comparable rival.</p>
        <p><strong>Simple explanation:</strong> With the USSR gone, the "other team" simply disappeared from the game — leaving the USA as the sole "super-team" in world politics.</p>
        <p>This shift is explored in far greater depth in <strong>Chapter 2: US Hegemony in World Politics</strong> — this chapter is really the origin story for that one.</p>
      </div>
    </details>

    <details class="concept glass" data-side="red">
      <summary><span class="num">23</span> 🇮🇳 India's Relations with Russia</summary>
      <div class="concept-body">
        <p>India maintained close, friendly relations with the Soviet Union throughout the Cold War, built on shared interests in economic development and a shared wariness of Western dominance.</p>
        <p>The <strong>Indo-Soviet Treaty of Peace, Friendship and Cooperation (1971)</strong> was the landmark agreement of this relationship. The USSR supported India diplomatically — including UN Security Council vetoes on the Kashmir issue — and economically, including support for public-sector industries like the Bhilai Steel Plant.</p>
        <p>After the USSR's disintegration, India continued this friendship with the <strong>Russian Federation</strong> as its successor state, now cooperating in defence, nuclear energy and space technology.</p>
      </div>
    </details>

    <details class="concept glass" data-side="gold">
      <summary><span class="num">24</span> 🇮🇳 India & the New Independent States</summary>
      <div class="concept-body">
        <p>India established diplomatic relations with the newly independent Central Asian Republics — <strong>Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan</strong> — after 1991.</p>
        <p>India's interests in the region include:</p>
        <ul>
          <li><strong>Energy security</strong> — Central Asia is rich in oil and natural gas.</li>
          <li><strong>Trade and economic cooperation.</strong></li>
          <li><strong>Security cooperation</strong>, particularly around cross-border terrorism and regional stability, given proximity to Afghanistan.</li>
          <li>Historical and cultural ties along the old <strong>Silk Route</strong>.</li>
        </ul>
        <p>India has also provided support in education, health and technology to these states.</p>
      </div>
    </details>

  </div>
</section>

<section id="causes" class="reveal">
  <span class="part-tag">Deep-Dive</span>
  <h2>Causes of Soviet Disintegration — In Full Detail</h2>
  <p class="lead">This is the single most-asked theme in this chapter. Learn it as two lists — internal and external — plus how leadership and a failed coup tied them together.</p>

  <div class="grid-2">
    <div class="glass" style="padding:22px 24px;">
      <h4 style="color:var(--red); font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.08em; text-transform:uppercase; margin-bottom:14px;">🏠 Internal Causes</h4>
      <div class="table-wrap" style="margin:0;"><table>
        <tbody>
          <tr><td>Economic Stagnation</td><td>The Soviet economy failed to keep pace with the West, especially in consumer goods and technology.</td></tr>
          <tr><td>Bureaucratic Inefficiency</td><td>Excessive bureaucracy bred corruption and poor accountability.</td></tr>
          <tr><td>Lack of Democracy</td><td>One-party CPSU rule suppressed dissent and participation, breeding resentment.</td></tr>
          <tr><td>Unmet Aspirations</td><td>Shortages of consumer goods frustrated citizens despite huge military strength.</td></tr>
          <tr><td>Rise of Nationalism</td><td>The 15 republics — especially the Baltics and Ukraine — increasingly demanded independence.</td></tr>
          <tr><td>Gorbachev's Reforms</td><td>Perestroika/Glasnost exposed weaknesses and empowered nationalist movements.</td></tr>
          <tr><td>Failed 1991 Coup</td><td>Hardliners' coup against Gorbachev failed, but fatally weakened central authority and boosted Yeltsin.</td></tr>
        </tbody>
      </table></div>
    </div>
    <div class="glass" style="padding:22px 24px;">
      <h4 style="color:var(--blue); font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.08em; text-transform:uppercase; margin-bottom:14px;">🌐 External Causes</h4>
      <div class="table-wrap" style="margin:0;"><table>
        <tbody>
          <tr><td>Cost of Arms Race</td><td>Enormous defence spending matching the USA drained Soviet economic resources.</td></tr>
          <tr><td>Afghanistan War (1979–89)</td><td>Costly military intervention drained resources and damaged the USSR's global standing.</td></tr>
          <tr><td>Cold War Pressure</td><td>Constant technological/military competition strained the Soviet economy for decades.</td></tr>
          <tr><td>Exposure to the West</td><td>Glasnost-era openness revealed Western prosperity, deepening dissatisfaction at home.</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <div class="callout ncert" style="margin-top:4px; font-size:14px;">📦 <strong>NCERT line to remember:</strong> "The differences in the economic growth rate between the two blocs was itself an important cause for the collapse of the Soviet economy."</div>

  <div class="mindmap-box glass">
    <div class="flow-title">🧠 Mini Mind Map: Causes of Disintegration</div>
    <div class="orgchart">
      <div class="oc-root">CAUSES OF SOVIET DISINTEGRATION</div>
      <div class="oc-level">
        <div class="oc-branch">
          <div class="oc-node red">ECONOMIC</div>
          <ul class="oc-leaf"><li>Stagnation</li><li>Consumer goods shortage</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node red">POLITICAL</div>
          <ul class="oc-leaf"><li>One-party rule</li><li>Corruption</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node gold">NATIONALISM</div>
          <ul class="oc-leaf"><li>Republics demand independence</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node blue">EXTERNAL / OTHER</div>
          <ul class="oc-leaf"><li>Arms race cost</li><li>Afghanistan War</li><li>Gorbachev's reforms</li></ul>
        </div>
      </div>
    </div>
  </div>

  <div class="callout exam" style="font-size:14px;">📝 <strong>6-mark answer structure:</strong> "Explain the causes of disintegration of the Soviet Union" → <strong>Economic causes → Political causes → Nationalism → Role of Gorbachev's reforms → 1991 coup</strong> — one short paragraph per heading.</div>
</section>

<section id="flowcharts" class="reveal">
  <span class="part-tag">Part 03</span>
  <h2>Flowcharts</h2>
  <p class="lead">Visual cause-and-effect chains. Read top to bottom — each one compresses a full 5-6 mark answer into a picture.</p>

  <div class="grid-2">
    <div class="mindmap-box glass">
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

    <div class="mindmap-box glass">
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

  <div class="grid-2">
    <div class="mindmap-box glass">
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

    <div class="mindmap-box glass">
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

  <div class="mindmap-box glass" style="max-width:540px; margin:16px auto 0;">
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

<section id="mindmaps" class="reveal">
  <span class="part-tag">Part 04</span>
  <h2>Mind Maps</h2>
  <p class="lead">The whole chapter, at a glance. Scroll sideways on mobile.</p>

  <div class="mindmap-box glass">
    <div class="orgchart">
      <div class="oc-root">THE END OF BIPOLARITY</div>
      <div class="oc-level">
        <div class="oc-branch">
          <div class="oc-node gold">COLD WAR ERA<br>1945–1991</div>
          <ul class="oc-leaf"><li>Two superpowers</li><li>NATO / Warsaw Pact</li><li>Arms race</li><li>Cuban Missile Crisis</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node red">SOVIET SYSTEM</div>
          <ul class="oc-leaf"><li>State-owned economy</li><li>CPSU one-party rule</li><li>15 Republics</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node gold">GORBACHEV'S<br>REFORMS (1985)</div>
          <ul class="oc-leaf"><li>Perestroika (economy)</li><li>Glasnost (politics)</li><li>Democratic reforms</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node blue">DISINTEGRATION<br>(1991)</div>
          <ul class="oc-leaf"><li>15 republics form</li><li>CIS created</li><li>Shock Therapy (Russia)</li></ul>
        </div>
        <div class="oc-branch">
          <div class="oc-node blue">CONSEQUENCES<br>& INDIA</div>
          <ul class="oc-leaf"><li>Unipolar world (USA)</li><li>India–Russia ties continue</li><li>India–Central Asia ties</li></ul>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="mindmap-box glass">
      <div class="orgchart" style="min-width:auto;">
        <div class="oc-root" style="background:var(--red); color:#fff;">SOVIET ECONOMY</div>
        <div class="oc-level">
          <div class="oc-branch"><div class="oc-node red">State<br>Ownership</div></div>
          <div class="oc-branch"><div class="oc-node red">Central<br>Planning</div></div>
          <div class="oc-branch"><div class="oc-node red">Full<br>Employment</div></div>
          <div class="oc-branch"><div class="oc-node red">Heavy Industry<br>Focus</div></div>
        </div>
      </div>
    </div>

    <div class="mindmap-box glass">
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

  <div class="mindmap-box glass">
    <div class="orgchart" style="min-width:auto;">
      <div class="oc-root" style="background:var(--blue); color:#05070c;">SHOCK THERAPY</div>
      <div class="oc-level">
        <div class="oc-branch"><div class="oc-node blue">Privatisation</div></div>
        <div class="oc-branch"><div class="oc-node blue">Trade<br>Liberalisation</div></div>
        <div class="oc-branch"><div class="oc-node blue">Currency<br>Convertibility</div></div>
        <div class="oc-branch">
          <div class="oc-node red">Result</div>
          <ul class="oc-leaf"><li>GDP crash</li><li>Inflation</li><li>Oligarchs</li></ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="tables" class="reveal">
  <span class="part-tag">Part 05</span>
  <h2>Comparison Tables</h2>
  <p class="lead">The fastest way to answer any "distinguish between" question.</p>

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

  <h4>Perestroika vs Glasnost</h4>
  <div class="table-wrap"><table>
    <thead><tr><th>Basis</th><th>Perestroika</th><th>Glasnost</th></tr></thead>
    <tbody>
      <tr><td>Type of reform</td><td>Economic</td><td>Political / social</td></tr>
      <tr><td>Aim</td><td>Modernise/restructure the economy</td><td>Increase openness, reduce censorship</td></tr>
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

<section id="glossary" class="reveal">
  <span class="part-tag">Parts 06 & 07</span>
  <h2>Definitions & Glossary</h2>
  <p class="lead">One-mark-ready definitions of every key term in this chapter.</p>

  <div class="glossary-grid">
    <div class="term-card glass"><h4>Cold War</h4><p>Rivalry between USA and USSR without direct full-scale war.</p></div>
    <div class="term-card glass"><h4>Bipolarity</h4><p>World order with power divided between two blocs/superpowers.</p></div>
    <div class="term-card glass"><h4>Unipolarity</h4><p>World order dominated by a single superpower.</p></div>
    <div class="term-card glass"><h4>NATO</h4><p>Military alliance of USA & Western Europe, formed 1949.</p></div>
    <div class="term-card glass"><h4>Warsaw Pact</h4><p>Military alliance of USSR & Eastern Europe, formed 1955.</p></div>
    <div class="term-card glass"><h4>Perestroika</h4><p>Gorbachev's policy of economic restructuring.</p></div>
    <div class="term-card glass"><h4>Glasnost</h4><p>Gorbachev's policy of political openness & reduced censorship.</p></div>
    <div class="term-card glass"><h4>Shock Therapy</h4><p>Rapid model to convert a socialist economy into a capitalist market economy.</p></div>
    <div class="term-card glass"><h4>CIS</h4><p>Commonwealth of Independent States — association of most former Soviet republics, formed 1991.</p></div>
    <div class="term-card glass"><h4>Satellite State</h4><p>Formally independent country, but heavily controlled by another power.</p></div>
    <div class="term-card glass"><h4>Superpower</h4><p>Nation with dominant military, economic & political influence globally.</p></div>
    <div class="term-card glass"><h4>Privatisation</h4><p>Transfer of state-run enterprise ownership to private hands.</p></div>
    <div class="term-card glass"><h4>Liberalisation</h4><p>Reducing government restrictions on trade/economy.</p></div>
    <div class="term-card glass"><h4>Globalisation</h4><p>Increasing interconnection of world economies, cultures, politics.</p></div>
    <div class="term-card glass"><h4>Nationalism</h4><p>Strong identification with one's nation/ethnicity, often demanding self-determination.</p></div>
    <div class="term-card glass"><h4>Oligarchs</h4><p>Small group who gained massive wealth/resource control, especially post-Shock Therapy Russia.</p></div>
    <div class="term-card glass"><h4>COMECON</h4><p>Council for Mutual Economic Assistance — Soviet-era trade bloc among socialist states.</p></div>
    <div class="term-card glass"><h4>Market Economy</h4><p>Economy driven by supply/demand and private enterprise.</p></div>
    <div class="term-card glass"><h4>Command Economy</h4><p>Economy where the government, not the market, decides what/how much is produced.</p></div>
    <div class="term-card glass"><h4>Iron Curtain</h4><p>Term for the political/ideological boundary dividing Cold War Europe into East and West.</p></div>
  </div>
</section>

<section id="boardspecial" class="reveal">
  <span class="part-tag">Part 08</span>
  <h2>Board Exam Special</h2>

  <div class="grid-2">
    <div class="stat-card glass">
      <h4>🎯 Most Important Topics</h4>
      <p>Causes of Soviet disintegration · Shock Therapy · Perestroika vs Glasnost · Features of the Soviet economy/polity · Unipolar world · India–Russia/Central Asia relations.</p>
    </div>
    <div class="stat-card glass">
      <h4>📌 Frequently Asked</h4>
      <p>Causes of disintegration (5/6m) · Shock Therapy features & effects (5/6m) · Perestroika vs Glasnost (3m) · India's relations with Russia & Central Asia (3/4m) · Soviet economy/polity features (3/4m).</p>
    </div>
    <div class="stat-card glass">
      <h4>🗺️ Map-Based Concepts</h4>
      <p>The 15 former Soviet republics (especially Russia, Ukraine, the Baltic states, Kazakhstan) · Central Asian Republics · NATO vs Warsaw Pact member countries.</p>
    </div>
    <div class="stat-card glass">
      <h4>🗣️ Watch for in MCQs</h4>
      <p>"The Soviet economy was among the world's strongest before disintegration" · "Shock Therapy collapsed existing production & welfare structures" · "NATO formed before the Warsaw Pact" · "Yeltsin became the first President of the Russian Federation."</p>
    </div>
  </div>

  <div class="callout ncert" style="margin-top:22px; font-size:14px;">
    📦 <strong>Very important NCERT lines to remember:</strong><br><br>
    "The differences in the economic growth rate between the two blocs was itself an important cause for the collapse of the Soviet economy."<br><br>
    "Coalition of Soviet leaders led by Gorbachev tried to restructure Soviet policies and government."<br><br>
    "For the mass of the population, the road from a command to a market economy has been very rocky."<br><br>
    "The disintegration of the Soviet Union changed the power balance in world politics, giving rise to a unipolar world."
  </div>
</section>

<section id="pyq" class="reveal">
  <span class="part-tag">Part 09</span>
  <h2>Previous Year Questions — With Model Answers</h2>

  <div class="pyq-item glass"><span class="mark-pill">1 MARK</span><div class="pyq-q">When did the Soviet Union disintegrate?</div><div class="pyq-a">December 1991.</div></div>
  <div class="pyq-item glass"><span class="mark-pill">1 MARK</span><div class="pyq-q">Name the military alliance led by the USA during the Cold War.</div><div class="pyq-a">NATO (North Atlantic Treaty Organisation).</div></div>
  <div class="pyq-item glass"><span class="mark-pill">1 MARK</span><div class="pyq-q">Who became the first President of the Russian Federation?</div><div class="pyq-a">Boris Yeltsin.</div></div>

  <div class="pyq-item glass">
    <span class="mark-pill">2 MARKS</span>
    <div class="pyq-q">What is meant by 'Shock Therapy'?</div>
    <div class="pyq-a">The rapid, radical economic transition adopted by Russia & other post-Soviet states to shift from a centrally planned economy to a capitalist market economy — via immediate privatisation, removal of trade barriers, and price deregulation, based on the IMF-prescribed model.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">2 MARKS</span>
    <div class="pyq-q">Differentiate between Perestroika and Glasnost.</div>
    <div class="pyq-a">Perestroika was Gorbachev's policy of economic restructuring, aimed at modernising the Soviet economy through market-oriented reforms. Glasnost was his policy of political openness, allowing greater free speech and reducing censorship.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">3 MARKS</span>
    <div class="pyq-q">What were the main features of the Soviet political system before 1991?</div>
    <div class="pyq-a">(i) CPSU held complete control — no political opposition allowed. (ii) All major decisions taken centrally, limited role for individual republics. (iii) USSR was a union of 15 Republics, with Russia the most dominant.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">3 MARKS</span>
    <div class="pyq-q">Explain any three consequences of Shock Therapy in Russia.</div>
    <div class="pyq-a">(i) Massive fall in GDP — Russia's 1999 GDP was under half of its 1989 level. (ii) The rouble's value collapsed, causing hyperinflation and wiping out savings. (iii) Withdrawal of subsidies led to large-scale unemployment and increased poverty.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">4 MARKS</span>
    <div class="pyq-q">Explain the internal causes responsible for the disintegration of the Soviet Union.</div>
    <div class="pyq-a">Economic stagnation (fell behind the West) · Bureaucratic inefficiency & corruption · Lack of democracy under one-party CPSU rule · Rise of nationalism across the 15 republics demanding independence.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">5 MARKS</span>
    <div class="pyq-q">Analyse the effects of Shock Therapy on the Russian economy and society.</div>
    <div class="pyq-a">Positive: opened new markets, wider consumer goods, integration with the world economy. Negative (the bigger emphasis): GDP crashed to less than half of 1989 levels by 1999; hyperinflation & rouble devaluation; large-scale unemployment; social welfare collapse; COMECON's collapse without adequate substitutes; rise of a mafia-driven oligarch economy causing enormous hardship for ordinary people.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">6 MARKS</span>
    <div class="pyq-q">Explain the causes of the disintegration of the Soviet Union and discuss its consequences for world politics.</div>
    <div class="pyq-a">Structure: Internal causes (economic stagnation, one-party rule, nationalism, Gorbachev's reforms, failed 1991 coup) → External causes (arms race cost, Afghanistan War) → Consequences (unipolar world, new alliances, new states, India's shifting foreign policy). See the <a href="#causes">Causes Deep-Dive</a> section above for the full detail on each point.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">CASE-BASED</span>
    <div class="pyq-q">Passage: "For the mass of the population, the road from a command to a market economy has been very rocky... living standards suffered a huge decline."</div>
    <div class="pyq-a">
      <strong>Q1.</strong> Which economic model does this refer to? → <em>Shock Therapy.</em><br>
      <strong>Q2.</strong> Which institutions prescribed this model? → <em>IMF and World Bank.</em><br>
      <strong>Q3.</strong> Two negative effects mentioned in the chapter? → <em>Massive fall in GDP/living standards; large-scale unemployment and poverty.</em>
    </div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">ASSERTION-REASON</span>
    <div class="pyq-q">Assertion (A): The disintegration of the USSR led to the emergence of a unipolar world.<br>Reason (R): The USA remained the only superpower with no comparable rival after 1991.</div>
    <div class="pyq-a"><strong>Answer:</strong> Both A and R are true, and R is the correct explanation of A.</div>
  </div>

  <div class="pyq-item glass">
    <span class="mark-pill">COMPETENCY-BASED</span>
    <div class="pyq-q">If a country shifts abruptly from a state-controlled economy to a fully market-driven one without any transition phase, what challenges is it likely to face?</div>
    <div class="pyq-a">Based on Russia's Shock Therapy experience: a sharp fall in production/GDP, high inflation and currency devaluation, large-scale unemployment, collapse of the social welfare system, and the rise of a small wealthy class (oligarchs) controlling major resources, while most people's living standards decline.</div>
  </div>
</section>

<section id="memory" class="reveal">
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

  <div class="trick-card glass">
    <h4>🔠 "E-P-N-G-C" — Causes of Soviet Disintegration</h4>
    <p style="margin:0;"><strong>E</strong>conomic stagnation → <strong>P</strong>olitical (one-party rule) → <strong>N</strong>ationalism → <strong>G</strong>orbachev's reforms → <strong>C</strong>oup of 1991</p>
  </div>
  <div class="trick-card glass">
    <h4>🔠 "P-P-T-C" — Features of Shock Therapy</h4>
    <p style="margin:0;"><strong>P</strong>rivatisation → <strong>P</strong>rice deregulation → <strong>T</strong>rade liberalisation → <strong>C</strong>urrency convertibility</p>
  </div>
  <div class="trick-card glass">
    <h4>🧠 Perestroika vs Glasnost, remembered</h4>
    <p style="margin:0;">"P for Paisa (money) = Economy" → Perestroika is the economy. "G for Government talk = Openness" → Glasnost is free speech.</p>
  </div>
  <div class="trick-card glass">
    <h4>🎯 NATO before Warsaw Pact</h4>
    <p style="margin:0;">"NATO (1949) came first, Warsaw (1955) replied" — just like a reply always follows the original message.</p>
  </div>
  <div class="trick-card glass">
    <h4>🎬 Visual Story: The Two-Team Match</h4>
    <p style="margin:0;">Picture a football match: Team USA (blue jersey — NATO) vs Team USSR (red jersey — Warsaw Pact), playing on a pitch called "The Cold War," with the referee (the world) worried they might start a real fight (nuclear war) — until Team USSR's own captain (Gorbachev) called for changes in his team's strategy (Perestroika/Glasnost), which ended up breaking up Team USSR itself in 1991.</p>
  </div>
</section>

<section id="revision" class="reveal">
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
    <div class="stat-card glass"><h4>⏳ 30-Second Revision</h4><p>Two blocs → Cold War (1945–91) → Gorbachev's reforms (1985) → USSR disintegrates (1991) → Shock Therapy → Unipolar world.</p></div>
    <div class="stat-card glass"><h4>⏳ 5-Minute Revision</h4><p>Timeline + One-Page Sheet + Master Mind Map.</p></div>
    <div class="stat-card glass"><h4>⏳ 15-Minute Revision</h4><p>Above + all Comparison Tables + Definitions + Board Exam Special.</p></div>
  </div>
</section>

<section id="writing" class="reveal">
  <span class="part-tag">Part 13</span>
  <h2>Board Answer-Writing Guide</h2>

  <div class="glossary-grid">
    <div class="term-card glass"><h4>2-Mark Answers</h4><p>Direct definition first, then one supporting point. No intro needed.</p></div>
    <div class="term-card glass"><h4>3-Mark Answers</h4><p>Three distinct points, 1–2 lines each, keyword-first.</p></div>
    <div class="term-card glass"><h4>5-Mark Answers</h4><p>Short context line → 4–5 numbered points → brief conclusion.</p></div>
    <div class="term-card glass"><h4>6-Mark Answers</h4><p>Mini-essay: Intro → sub-headed sections (e.g. Causes / Consequences) → Conclusion.</p></div>
  </div>

  <div class="callout exam" style="margin-top:20px; font-size:14px;">
    🏆 <strong>How to earn full marks:</strong> use exact NCERT terminology ("Perestroika," "Shock Therapy," "CIS") · structure answers as clear points/headings, not paragraphs · always tie the answer back to the specific question asked · for "explain/analyse" questions, cover both causes AND effects.
  </div>
  <div class="callout mistake" style="font-size:14px;">
    ⚠️ <strong>Common mistakes that cost marks:</strong> unstructured paragraphs instead of points · confusing Perestroika with Glasnost · saying USSR was "defeated" (it disintegrated internally) · ignoring the negative effects of Shock Therapy · missing key years (1945, 1949, 1955, 1985, 1991).
  </div>
</section>

<section id="summary" class="reveal">
  <span class="part-tag">Part 15</span>
  <h2>Chapter Summary</h2>
  <div class="glass" style="padding:24px 26px;">
    <p class="lead" style="margin:0;"><strong style="color:var(--text);">100 words:</strong> After WWII, the world split into two blocs led by the USA and USSR — the Cold War — marked by NATO, the Warsaw Pact, an arms race, and the Cuban Missile Crisis. The USSR's rigid economy and one-party system stagnated, prompting Gorbachev's 1985 reforms (Perestroika & Glasnost). These exposed weaknesses and fuelled nationalism. The USSR disintegrated in December 1991 into 15 states and the CIS. Russia's Shock Therapy caused severe economic hardship. Bipolarity ended, and a unipolar world, dominated by the USA, took its place — while India kept its ties with Russia and built new ones with Central Asia.</p>
  </div>

  <div class="revision-box" style="margin-top:20px;">
    <h4>⚡ Ultra-Short Revision</h4>
    <p style="margin:0; font-size:14px;">Cold War → rigid Soviet system → Gorbachev's reforms → nationalism rises → USSR disintegrates (1991) → CIS formed → Shock Therapy → Unipolar world → India–Russia ties continue.</p>
  </div>
</section>

<footer>
  <strong>The End of Bipolarity</strong> · CBSE Class 12 Political Science, Chapter 1 · Built for fast, visual board revision.<br>
  Good luck — you've got this. 🌟
</footer>
`,
              slides: [
                {
                  title: "Bolshevik Revolution (1917)",
                  points: [
                    "Led by Vladimir Lenin & Bolshevik Communist Party.",
                    "Overthrew the Tsarist regime in Russia.",
                    "Founded the Union of Soviet Socialist Republics (USSR).",
                    "Introduced egalitarian principles and a state-controlled economy."
                  ]
                },
                {
                  title: "The Soviet Economic System",
                  points: [
                    "State ownership of all land and productive industries.",
                    "Centralized five-year planning dictated all production.",
                    "Guaranteed full employment and basic minimum living standards.",
                    "High subsidies on food, education, child care, and medical care."
                  ]
                },
                {
                  title: "Gorbachev's Reforms (1985)",
                  points: [
                    "Perestroika: Economic restructuring towards market forces.",
                    "Glasnost: Political openness and reduction of strict censorship.",
                    "Aimed to modernize the USSR, but instead accelerated its collapse.",
                    "Unleashed radical demands for sovereignty that could not be suppressed."
                  ]
                },
                {
                  title: "Consequences of Disintegration",
                  points: [
                    "End of the 45-year Cold War confrontations and ideological rivalry.",
                    "Emergence of a Unipolar world order dominated by the United States.",
                    "Creation of 15 new independent, sovereign nations.",
                    "Global shift of power from Socialist command to Capitalist market models."
                  ]
                }
              ],
              resources: {
                ncert: "resources/political_science/ch1_ncert_solutions.pdf",
                worksheet: "resources/political_science/ch1_practice_worksheet.pdf",
                board: "resources/political_science/ch1_board_papers.pdf",
                ppt: "resources/political_science/ch1_lecture_slides.pptx"
              },
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

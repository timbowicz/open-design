// Screens.jsx — login, dashboard, scenario detail, sim runner, result

const SCENARIOS = [
  { id: "abcde", title: "Triage van een 56-jarige met pijn op de borst", summary: "Werk een ABCDE-beoordeling af in een drukke avonddienst.", category: "spoedeisende hulp", duration: "15 min", level: 2, completed: 1, isNew: true },
  { id: "sepsis", title: "Vroege herkenning van sepsis", summary: "Beoordeel een patiënt met koorts en lage bloeddruk op de afdeling.", category: "interne", duration: "20 min", level: 3, completed: 0 },
  { id: "anaph", title: "Anafylaxie tijdens infusie", summary: "Reageer snel op een acute allergische reactie.", category: "spoedeisende hulp", duration: "10 min", level: 2, completed: 4 },
  { id: "cpr", title: "Reanimatie volwassene", summary: "Volg het BLS-protocol met een collega.", category: "intensive care", duration: "12 min", level: 1, completed: 2 },
  { id: "stroke", title: "Verdenking CVA, FAST-screening", summary: "Beoordeel snel of een patiënt naar de stroke unit moet.", category: "neurologie", duration: "18 min", level: 3, completed: 0 },
  { id: "kid", title: "Kind met benauwdheid", summary: "Differentieer tussen astma, croup en pneumonie.", category: "kindergeneeskunde", duration: "22 min", level: 3, completed: 0, isNew: true },
];

// ---- LOGIN ----
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = React.useState("noa.dijkstra@umcu.nl");
  const [password, setPassword] = React.useState("••••••••");
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      {/* Left: form */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 80px", maxWidth: 560 }}>
        <MeduLockup size={42} />
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 32, color: "#000048", lineHeight: 1.15, marginTop: 56 }}>
          Welkom terug.
        </div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 16, color: "rgba(0,0,72,0.7)", marginTop: 8 }}>
          Log in om je scenario's te hervatten.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 36 }}>
          <Field label="e-mailadres" value={email} onChange={e => setEmail(e.target.value)} placeholder="naam@ziekenhuis.nl" />
          <Field label="wachtwoord" type="password" value={password} onChange={e => setPassword(e.target.value)} hint="vergeten? we sturen je een link." />
          <Button variant="primary" onClick={onLogin} style={{ marginTop: 8, justifyContent: "center" }}>
            inloggen
          </Button>
          <Button variant="ghost" style={{ justifyContent: "center" }}>
            doorgaan met SSO
          </Button>
        </div>

        <div style={{ marginTop: "auto", paddingTop: 64, fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, color: "rgba(0,0,72,0.5)" }}>
          nog geen account? <a href="#" style={{ color: "#141484", fontWeight: 600 }}>vraag een proefperiode aan</a>
        </div>
      </div>

      {/* Right: pink hero with character */}
      <div style={{
        flex: 1,
        background: "#FFE0E0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 64px 0",
        overflow: "hidden",
      }}>
        {/* Soft pattern wash, behind everything */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(../../assets/brand/logos/pattern-pink.svg)",
          backgroundSize: "320px 320px",
          opacity: 0.4,
          pointerEvents: "none",
        }} />

        {/* Copy block, top */}
        <div style={{ position: "relative", maxWidth: 460, zIndex: 2 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "Fieldwork Geo, sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#000048",
            background: "#FFC8C7",
            padding: "6px 12px", borderRadius: 999,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#000048" }} />
            scenario van de week
          </span>
          <div style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 44, color: "#000048", lineHeight: 1.05, letterSpacing: "-0.01em", marginTop: 22 }}>
            speel je verder<br />in de zorg.
          </div>
          <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 17, color: "rgba(0,0,72,0.75)", lineHeight: 1.55, marginTop: 16, maxWidth: 380 }}>
            Realistische simulaties voor zorgprofessionals — train je triage, je communicatie, je beslissingen, in je eigen tempo.
          </div>
        </div>

        {/* Character, bottom-right, feet on bottom edge */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", flex: 1, marginTop: 24 }}>
          <img
            src="../../assets/brand/characters/expert-holding-ipad-01-pink.png"
            alt="medu.game guide met tablet"
            style={{ maxHeight: "85%", maxWidth: "90%", objectFit: "contain", objectPosition: "bottom right" }}
          />
        </div>
      </div>
    </div>
  );
};

// ---- DASHBOARD ----
const DashboardScreen = ({ onOpen, user }) => (
  <div style={{ padding: "32px 40px", maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>
      goedemiddag, {user.name.split(" ")[0].toLowerCase()}
    </div>
    <h1 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 36, color: "#000048", lineHeight: 1.1, margin: "8px 0 0", letterSpacing: "-0.005em" }}>
      Klaar voor je volgende casus?
    </h1>

    {/* Stats */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 28 }}>
      <Card>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(0,0,72,0.6)" }}>scenario's deze week</div>
        <div style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 44, color: "#000048", lineHeight: 1, marginTop: 8 }}>7</div>
        <div style={{ marginTop: 14 }}><ProgressBar value={7} max={10} /></div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 12, color: "rgba(0,0,72,0.6)", marginTop: 8 }}>3 te gaan voor je weekdoel</div>
      </Card>
      <Card>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(0,0,72,0.6)" }}>gemiddelde score</div>
        <div style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 44, color: "#000048", lineHeight: 1, marginTop: 8 }}>87<span style={{ fontSize: 22, color: "rgba(0,0,72,0.4)" }}>%</span></div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 12, color: "#0F6B3F", marginTop: 14, fontWeight: 600 }}>↑ 4% t.o.v. vorige maand</div>
      </Card>
      <Card>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(0,0,72,0.6)" }}>volgende deadline</div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 18, color: "#000048", lineHeight: 1.2, marginTop: 12 }}>BIG-herregistratie</div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 12, color: "rgba(0,0,72,0.6)", marginTop: 4 }}>16 dagen — 4 modules open</div>
        <Button variant="outline" style={{ marginTop: 14, padding: "8px 16px", fontSize: 13 }}>bekijk modules</Button>
      </Card>
    </div>

    {/* Continue */}
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 40, marginBottom: 14 }}>
      <h2 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 22, color: "#000048", margin: 0 }}>Verder waar je gebleven was</h2>
      <a style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, color: "#141484", fontWeight: 600, cursor: "pointer" }}>alle scenario's →</a>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {SCENARIOS.slice(0, 3).map(s => (
        <ScenarioCard key={s.id} scenario={s} onOpen={onOpen} />
      ))}
    </div>

    <h2 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 22, color: "#000048", margin: "40px 0 14px" }}>
      Aanbevolen voor jou
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {SCENARIOS.slice(3, 6).map(s => (
        <ScenarioCard key={s.id} scenario={s} onOpen={onOpen} />
      ))}
    </div>

    <div style={{ height: 60 }} />
  </div>
);

// ---- SCENARIO DETAIL ----
const ScenarioDetailScreen = ({ scenario, onStart, onBack }) => (
  <div style={{ padding: "32px 40px", maxWidth: 980, margin: "0 auto" }}>
    <button onClick={onBack} style={{ background: "transparent", border: 0, cursor: "pointer", color: "#141484", fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6, padding: 0 }}>
      ← terug naar dashboard
    </button>

    {/* Hero */}
    <div style={{
      marginTop: 20,
      background: "#000048",
      borderRadius: 20,
      padding: "40px 48px",
      paddingRight: 280,
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      minHeight: 320,
    }}>
      {/* Pattern wash, very low opacity */}
      <div style={{
        position: "absolute", inset: 0,
        background: "url(../../assets/brand/logos/pattern-blue.svg)",
        backgroundSize: "260px 260px",
        opacity: 0.18,
        pointerEvents: "none",
      }} />
      {/* Cardiologist character on the right, feet on bottom edge */}
      <img
        src="../../assets/brand/characters/cardiologist-point-left.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 24, bottom: 0,
          height: "112%",
          maxHeight: 380,
          objectFit: "contain",
          objectPosition: "bottom right",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <Badge variant="pinkSolid">{scenario.category}</Badge>
        <h1 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 36, lineHeight: 1.15, margin: "16px 0 0", maxWidth: 540 }}>
          {scenario.title}
        </h1>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.55, marginTop: 14, maxWidth: 500 }}>
          {scenario.summary} Tijdens deze simulatie neem je beslissingen in real-time. Je krijgt feedback op timing, prioritering en communicatie.
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
          <Badge variant="pink">{scenario.duration}</Badge>
          <Badge variant="pink">niveau {scenario.level}</Badge>
          <Badge variant="pink">single-player</Badge>
        </div>
      </div>
    </div>

    {/* Brief */}
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginTop: 28 }}>
      <Card>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>casusbrief</div>
        <h3 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 20, color: "#000048", margin: "8px 0 0" }}>De situatie</h3>
        <p style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 15, color: "#000048", lineHeight: 1.6, marginTop: 14 }}>
          Het is 21:40, een drukke avonddienst op de SEH. Een 56-jarige man wordt door zijn vrouw binnengebracht met sinds 30 minuten retrosternale pijn, uitstralend naar de linkerarm. Hij ziet bleek, klam en beoordeelt de pijn met een 7 op 10. Je hebt vijf minuten voor een eerste beoordeling.
        </p>
        <h3 style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 18, color: "#000048", margin: "24px 0 8px" }}>Leerdoelen</h3>
        <ul style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 15, color: "#000048", lineHeight: 1.7, paddingLeft: 18, margin: 0 }}>
          <li>ABCDE-systematiek toepassen onder tijdsdruk</li>
          <li>Differentiaal-diagnose bij pijn op de borst</li>
          <li>Heldere SBAR-overdracht aan de cardioloog</li>
        </ul>
      </Card>

      <Card>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>jouw geschiedenis</div>
        <div style={{ marginTop: 14 }}>
          <ProgressBar value={1} max={3} label="pogingen" showCount />
        </div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, color: "rgba(0,0,72,0.6)", marginTop: 14, lineHeight: 1.6 }}>
          Vorige score: <strong style={{ color: "#000048", fontWeight: 600 }}>76%</strong><br/>
          Best aandachtspunt: tijdige ECG-aanvraag.
        </div>
        <Button variant="primary" onClick={() => onStart(scenario)} style={{ marginTop: 22, width: "100%", justifyContent: "center" }}>
          start simulatie →
        </Button>
        <Button variant="ghost" style={{ marginTop: 6, width: "100%", justifyContent: "center" }}>
          casusbrief downloaden
        </Button>
      </Card>
    </div>
    <div style={{ height: 60 }} />
  </div>
);

// ---- SIM RUNNER ----
const SimRunner = ({ scenario, onFinish, onBack }) => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [revealed, setRevealed] = React.useState(null);

  const steps = [
    {
      vitals: { hr: 112, bp: "146/92", spo2: 94, rr: 22, temp: 36.8 },
      prompt: "De patiënt zit op de brancard en zweet. Wat doe je als eerste?",
      choices: [
        { id: "a", text: "Direct ECG aanvragen", correct: true, feedback: "Goede prioritering — bij retrosternale pijn is het ECG binnen 10 minuten leidend." },
        { id: "b", text: "Eerst uitgebreide anamnese afnemen", correct: false, feedback: "Te traag — ABCDE en ECG eerst, anamnese kan parallel." },
        { id: "c", text: "Pijnstilling toedienen", correct: false, feedback: "Niet als eerste stap. Beoordeel eerst circulatie en doe een ECG." },
      ],
    },
    {
      vitals: { hr: 118, bp: "138/86", spo2: 95, rr: 22, temp: 36.9, ecg: "ST-elevatie II, III, aVF" },
      prompt: "Het ECG toont ST-elevatie inferior. Welke vervolgstap is het belangrijkst?",
      choices: [
        { id: "a", text: "Cardioloog bellen voor PCI-overleg", correct: true, feedback: "Correct — STEMI vraagt om directe overdracht voor primaire PCI." },
        { id: "b", text: "Trombolyse starten op de SEH", correct: false, feedback: "Alleen als PCI niet binnen 90 min beschikbaar is." },
        { id: "c", text: "CT-thorax aanvragen", correct: false, feedback: "Vertraagt de behandeling — bij STEMI direct doorverwijzen." },
      ],
    },
    {
      vitals: { hr: 96, bp: "128/80", spo2: 97, rr: 18 },
      prompt: "Je belt de cardioloog. Hoe open je de SBAR?",
      choices: [
        { id: "a", text: "\"56-jarige man, sinds 40 min POB, ECG inferior STEMI, hemodynamisch stabiel.\"", correct: true, feedback: "Helder en compleet — Situation + Background + Assessment in één zin." },
        { id: "b", text: "\"Ik heb hier iemand met pijn op de borst, kun je komen kijken?\"", correct: false, feedback: "Te vaag voor een spoedoverdracht." },
        { id: "c", text: "\"De patiënt is bang en wil graag een arts spreken.\"", correct: false, feedback: "Belangrijk, maar niet de opening van een SBAR." },
      ],
    },
  ];
  const cur = steps[step];

  const choose = (c) => {
    setRevealed(c);
    setAnswers(a => [...a, c]);
  };
  const next = () => {
    setRevealed(null);
    if (step + 1 >= steps.length) {
      onFinish({ answers: [...answers], scenario });
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 73px)", background: "#FFF4F4", padding: "24px 40px" }}>
      {/* Top progress */}
      <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={onBack} style={{ background: "transparent", border: 0, cursor: "pointer", color: "#141484", fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 14 }}>
          ← afsluiten
        </button>
        <div style={{ flex: 1 }}>
          <ProgressBar value={step + 1} max={steps.length} label={`stap ${step + 1} van ${steps.length}`} />
        </div>
        <Badge variant="pinkSolid">⏱ 3:42</Badge>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 24, maxWidth: 980, margin: "24px auto 0" }}>
        {/* Main */}
        <Card style={{ padding: 32 }}>
          <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>
            {scenario.category}
          </div>
          <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 22, color: "#000048", lineHeight: 1.3, marginTop: 8 }}>
            {cur.prompt}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
            {cur.choices.map(c => {
              const isPicked = revealed?.id === c.id;
              const showFeedback = revealed != null;
              return (
                <Choice
                  key={c.id}
                  label={c.text}
                  correct={c.correct}
                  picked={isPicked}
                  feedback={c.feedback}
                  showFeedback={showFeedback}
                  disabled={revealed != null}
                  onClick={() => choose(c)}
                />
              );
            })}
          </div>

          {revealed && (
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
              <Button variant="primary" onClick={next}>
                {step + 1 >= steps.length ? "afronden →" : "volgende stap →"}
              </Button>
            </div>
          )}
        </Card>

        {/* Vitals */}
        <Card>
          <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>vitalen</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}>
            {Object.entries(cur.vitals).map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(0,0,72,0.06)", paddingBottom: 8 }}>
                <span style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 12, color: "rgba(0,0,72,0.6)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{k}</span>
                <span style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 18, color: "#000048" }}>{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const Choice = ({ label, correct, picked, feedback, showFeedback, disabled, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  let bg = "#fff", border = "rgba(0,0,72,0.1)", fg = "#000048";
  if (showFeedback && picked && correct) { bg = "#E0F4EA"; border = "#0F6B3F"; }
  else if (showFeedback && picked && !correct) { bg = "#FFE0E0"; border = "#A8002B"; }
  else if (showFeedback && correct) { bg = "#E0F4EA"; border = "#0F6B3F"; }
  else if (hovered && !disabled) { bg = "#FFF4F4"; border = "#FFC8C7"; }

  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          textAlign: "left",
          background: bg,
          border: `1.5px solid ${border}`,
          borderRadius: 14,
          padding: "14px 18px",
          fontFamily: "Fieldwork Geo, sans-serif",
          fontSize: 15,
          color: fg,
          fontWeight: 400,
          cursor: disabled ? "default" : "pointer",
          transition: "all 140ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {label}
      </button>
      {showFeedback && picked && (
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, color: correct ? "#0F6B3F" : "#A8002B", padding: "8px 18px 0", lineHeight: 1.5 }}>
          {feedback}
        </div>
      )}
    </div>
  );
};

// ---- RESULT ----
const ResultScreen = ({ run, onRetry, onHome }) => {
  const correct = run.answers.filter(a => a.correct).length;
  const total = run.answers.length;
  const pct = Math.round((correct / total) * 100);
  return (
    <div style={{ minHeight: "calc(100vh - 73px)", padding: "40px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: 720, width: "100%" }}>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 12, color: "#141484", letterSpacing: "0.06em" }}>
          afgerond
        </div>
        <h1 style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 56, color: "#000048", lineHeight: 1.05, margin: "12px 0 0", letterSpacing: "-0.01em" }}>
          mooi gespeeld.
        </h1>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 17, color: "rgba(0,0,72,0.7)", marginTop: 12 }}>
          {run.scenario.title}
        </div>

        <Card style={{ marginTop: 28, padding: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{
              width: 140, height: 140, borderRadius: "50%",
              background: "#FFE0E0",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
              boxShadow: "inset 0 0 0 8px #FFC8C7",
            }}>
              <div style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 500, fontSize: 44, color: "#000048", lineHeight: 1 }}>{pct}%</div>
              <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 11, color: "rgba(0,0,72,0.6)", marginTop: 4, fontWeight: 600 }}>SCORE</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Fieldwork Geo, sans-serif", fontSize: 14 }}>
                <span style={{ color: "rgba(0,0,72,0.6)" }}>juiste keuzes</span>
                <span style={{ color: "#000048", fontWeight: 600 }}>{correct} / {total}</span>
              </div>
              <div style={{ height: 8, background: "#FFE0E0", borderRadius: 999, marginTop: 8, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: "#000048", borderRadius: 999 }} />
              </div>
              <div style={{ marginTop: 18, fontFamily: "Fieldwork Geo, sans-serif", fontSize: 14, color: "#000048", lineHeight: 1.6 }}>
                <strong style={{ fontWeight: 600 }}>Sterk:</strong> snelle ECG-prioritering en heldere SBAR.<br/>
                <strong style={{ fontWeight: 600 }}>Aandachtspunt:</strong> overweeg pijnstilling iets eerder in te zetten.
              </div>
            </div>
          </div>
        </Card>

        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <Button variant="primary" onClick={onRetry}>opnieuw spelen</Button>
          <Button variant="outline" onClick={onHome}>terug naar dashboard</Button>
          <Button variant="ghost" style={{ marginLeft: "auto" }}>deel met team</Button>
        </div>
      </div>
    </div>
  );
};

window.LoginScreen = LoginScreen;
window.DashboardScreen = DashboardScreen;
window.ScenarioDetailScreen = ScenarioDetailScreen;
window.SimRunner = SimRunner;
window.ResultScreen = ResultScreen;
window.SCENARIOS = SCENARIOS;

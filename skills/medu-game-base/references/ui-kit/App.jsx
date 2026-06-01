// App.jsx — top-level state + routing

const App = () => {
  const [screen, setScreen] = React.useState("login");
  const [activeNav, setActiveNav] = React.useState("dashboard");
  const [scenario, setScenario] = React.useState(null);
  const [run, setRun] = React.useState(null);

  const user = { name: "Noa Dijkstra", role: "verpleegkundige · UMCU", initials: "ND" };

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [screen, scenario]);

  if (screen === "login") {
    return <LoginScreen onLogin={() => setScreen("dashboard")} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#FFF4F4" }}>
      <Sidebar
        active={activeNav}
        onNavigate={(id) => { setActiveNav(id); setScreen("dashboard"); }}
        onLogout={() => setScreen("login")}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, background: "#FFF4F4" }}>
        <TopBar user={user} onProfile={() => setScreen("login")} />
        <main style={{ flex: 1 }}>
          {screen === "dashboard" && (
            <DashboardScreen
              user={user}
              onOpen={(s) => { setScenario(s); setScreen("scenario"); }}
            />
          )}
          {screen === "scenario" && scenario && (
            <ScenarioDetailScreen
              scenario={scenario}
              onBack={() => setScreen("dashboard")}
              onStart={(s) => { setScenario(s); setScreen("sim"); }}
            />
          )}
          {screen === "sim" && scenario && (
            <SimRunner
              scenario={scenario}
              onBack={() => setScreen("scenario")}
              onFinish={(r) => { setRun(r); setScreen("result"); }}
            />
          )}
          {screen === "result" && run && (
            <ResultScreen
              run={run}
              onRetry={() => setScreen("sim")}
              onHome={() => setScreen("dashboard")}
            />
          )}
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import "./App.css";
import RadioButtonGroup from "./RadioButtonGroup";
import MrPeepers from "./MrPeepers";

function App() {
  const options = [
    { label: "From a friend or colleague", emoji: "👥️" },
    { label: "Newsletter, blog, or podcast", emoji: "✉️" },
    { label: "Search (Google, Bing, etc.)", emoji: "🔍" },
    { label: "TikTok", emoji: "🎵" },
    { label: "Instagram or Facebook", emoji: "📱" },
    { label: "YouTube", emoji: "🎥" },
    { label: "LinkedIn", emoji: "💼" },
    { label: "Other", emoji: "⌨️" },
  ];

  return (
    <div className="modal-wrapper">
      <div className="survey-wrapper">
        <header>
          <p>4/5</p>
          <h2>How did you hear about us?</h2>
          <p>Optional (but appreciated!)</p>
        </header>
        <RadioButtonGroup
          name="referrers"
          options={options}
          onChange={(value) => console.log(value)}
        />
      </div>

      <MrPeepers />
    </div>
  );
}

export default App;

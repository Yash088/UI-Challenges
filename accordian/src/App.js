import Faqs from "./Faqs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Accordian</h1>
      <Faqs faqContent="I am opened" title="I am a faq" />
    </div>
  );
}

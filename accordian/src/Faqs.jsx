import PropTypes from "prop-types";
import { useState } from "react";
import "./faqs.scss";

const Faqs = ({ faqKey, defaultState = false, faqContent, title }) => {
  const [open, setOpen] = useState(defaultState);

  return (
    <details key={faqKey} open={open || defaultState}>
      <summary
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="summary-container">
          {title}
          <span className="material-symbols-outlined">
            {!open ? "expand_less" : "expand_more"}
          </span>
        </div>
      </summary>
      <div className="faq-content">{faqContent}</div>
    </details>
  );
};

Faqs.propTypes = {
  faqKey: PropTypes.string,
  defaultState: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  faqContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

export default Faqs;

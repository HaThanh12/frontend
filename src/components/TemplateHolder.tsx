import React from "react";

type Template = {
  source: string;
  alt?: string;
};

interface TemplateHolderProps {
  templateData: Template[];
  style: React.CSSProperties;
}

const TemplateHolder: React.FC<TemplateHolderProps> = ({
  templateData,
  style,
}) => {
  return (
    <div className="template-holder" style={style}>
      {templateData.map((template, index) => (
        <div key={index} className="template-item">
          <img src={template.source} alt={template.alt || "template"} />
        </div>
      ))}
    </div>
  );
};
export { TemplateHolder, type Template };

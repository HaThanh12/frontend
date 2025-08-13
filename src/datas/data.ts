type HeaderLink = {
  text: string;
  href: string;
};

type Section = {
  title: string;
  description: string;
  button?: string;
  note?: string;
  highlight?: string;
};

type TrustedBy = {
  title: string;
  logos: string[];
};

type Footer = {
  product: string[];
  integrations: string[];
  company: string[];
  copyright: string;
};

export type DocumentConverterData = {
  headers: HeaderLink[];
  hero: {
    title: string;
    subtitle: string;
  };
  supportSection: Section;
  preserveSection: Section;
  compatibilitySection: Section;
  trustedBy: TrustedBy;
  footer: Footer;
};

export const documentConverterData: DocumentConverterData = {
  headers: [
    { text: "Home", href: "/" },
    { text: "Templates", href: "/templates" },
    { text: "Documentation", href: "/docs" },
  ],
  hero: {
    title: "Document converter",
    subtitle:
      "Effortlessly convert your documents into over 160 formats with <mark>automated management</mark> of multiple document converters.",
  },
  supportSection: {
    title:
      "Support over 160 Formats with <strong>One Unified Solution</strong>",
    description: `
      Unlike many reporting tools, Carbone does not replace your existing design tools.  
      Create documents using the software of your choice: 
      <strong>Microsoft Office, LibreOffice, OnlyOffice, Google Docs, Zoho Docs, WYSIWYG Editors, VSCode, Adobe, Canva, Affinity Designer</strong>, and more.  
      By combining the familiar experience of these tools with Carbone’s advanced features, the possibilities for dynamic document automation are limitless:  
      <strong>Charts</strong>, HTML, Images, Infinite Nested Loops, Barcodes, Pagination, Headers, Footers, Multi-language...
    `,
    button: "Explore our examples",
  },
  preserveSection: {
    title: "Preserve your Existing Data Structure",
    description: `
      When your data source is tightly linked to your report design, you remain entirely dependent on developers’ availability to create or modify reports.  
      Carbone gives you the power to adjust the ordering, grouping, and formatting of your data without requiring any coding or preprocessing steps.  
      This gives you unparalleled freedom to design your reports while seamlessly <mark>using your existing JSON</mark>.
    `,
    note: "Decoupling design from data is a best practice in computer science.",
    button: "Learn More",
  },
  compatibilitySection: {
    title:
      "Guaranteed <strong>Backward Compatibility</strong> of your Templates.",
    description: `
      Do you use tools that break everything with every new release? Not us.  
      The Carbone templating language was imagined in 2011 and is here to stay.  
      Every man-hour invested in report creation must yield maximum ROI.  
      Each new feature is easily integrated without breaking existing ones.  
      A template created with Carbone v2 remains fully compatible with Carbone v7.
    `,
    highlight:
      "<mark>5,000 fully automated tests</mark> and counting ensure robustness for years to come.",
    button: "See our delivery lifecycle",
  },
  trustedBy: {
    title: "Trusted by 600+ paid customers in 40+ countries",
    logos: [
      "Christian Dior",
      "THALES",
      "YOUNITED",
      "Danfoss",
      "CMA CGM",
      "illumina",
      "K PARK",
      "Scalingo",
      "BMW",
      "TELUS",
      "BESTSELLER",
      "Flagship Biologics",
      "INSLY",
      "ninox",
      "sodexo",
    ],
  },
  footer: {
    product: [
      "Quickstart",
      "Docx translator",
      "HTTP API reference",
      "Changelog",
      "Status",
    ],
    integrations: [
      "N8N",
      "Golang SDK",
      "Python SDK",
      "PHP SDK",
      "NodeJS SDK",
      "Javascript SDK",
    ],
    company: ["About us", "Terms of service", "Privacy Policy"],
    copyright: "© 2025 - VNPT Composable Platform",
  },
};

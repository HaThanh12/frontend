type HeaderLink = {
  text: string;
  href: string;
};

type Hero = {
  title: string;
  subtitle: string;
};

export type DocumentConverterData = {
  headers: HeaderLink[];
  hero1: Hero;
  hero2: Hero;
};

export const documentConverterData: DocumentConverterData = {
  headers: [
    { text: "Home", href: "/" },
    { text: "Templates", href: "/templates" },
    { text: "Documentation", href: "/docs" },
  ],
  hero1: {
    title: "Document converter",
    subtitle:
      "Effortlessly convert your documents into over 160 formats with <mark>automated management</mark> of multiple document converters.",
  },
  hero2: {
    title: "Universal Template",
    subtitle:
      "Insert tags using curly braces like <strong>{}</strong> into virtually <mark>any document</mark> (DOCX, ODT,ODS, XLSX, XML, MD, HTML, ...) and Carbone will replace those placeholders with data from your application or database.",
  },
};

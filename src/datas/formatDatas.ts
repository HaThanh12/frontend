import caption4 from '../assets/caption4.png';
import caption2 from '../assets/caption2.png';
import caption3 from '../assets/caption3.png';

export interface FormatsSectionData {
  title: string;
  title2?: string; // optional for the second title
  highlighted: string;
  descriptions: string[];
  buttonText: string;
  img?: string; // kiểu string chứa đường dẫn import
}

export const formatsSectionData: FormatsSectionData = {
  title: 'Support over 160 Formats with',
  highlighted: 'One Unified Solution',
  descriptions: [
    'Unlike many reporting tools, Carbone does not replace your existing design tools.',
    'Create documents using <b>Microsoft Office, LibreOffice, OnlyOffice, Google Docs, Zoho Docs, WYSIWYG Editors, VSCode, Adobe, Canva, Affinity Designer,</b> and more.',
    'By combining the familiar experience of these tools with Carbone\'s advanced features, the possibilities for dynamic document automation are endless: <b>Charts, HTML, Images, Infinite Nested Loops, Barcodes, Pagination, Headers, Footers, Multi-language, ...</b>',
  ],
  img: caption4, // dùng import ảnh
  buttonText: 'Explore our examples',
};

export const formatsSectionData2: FormatsSectionData = {
  title: 'Preserve',
  highlighted: 'your Existing Data Structure',
  descriptions: [
    'When your data source is tightly linked to your report design, you remain entirely dependent on developers\' availability to create or modify reports.',
    'Carbone gives you the power to adjust the <b>ordering, grouping, and formatting</b> of your data without requiring any coding or preprocessing steps.',
    'This gives you unparalleled freedom to design your reports while seamlessly <mark>using your existing JSON</mark> endpoints within your application.',
    'Decoupling design from data is a best practice in computer science.',
  ],
  img: caption2, // dùng import ảnh
  buttonText: 'Learn More',
};

export const formatsSectionData3: FormatsSectionData = {
  title: 'Guaranteed',
  highlighted: 'Backward Compatibility',
  title2: 'of your Templates',
  descriptions: [
    'Do you love tools that break everything with every new release? Not us.',
    'The Carbone templating language was imaginated in 2011 and is here to stay. Every man-hour invested in report creation must yield maximum ROI.',
    'Each new feature is seamlessly integrated without breaking existing ones. A template created with Carbone v2 remains fully compatible with Carbone v7.',
    'Our <mark>5,000 fully automated tests</mark> and counting ensure robustness for years to come.'
  ],
  img: caption3, // dùng import ảnh của bạn
  buttonText: 'See our delivery lifecycle',
};


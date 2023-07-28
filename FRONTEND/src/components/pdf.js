// 👇️ import the pdf document
import ExamplePdf from './fire.pdf.pdf';

function Pdf() {
  return (
    <div>
      <h2>bobbyhadz.com</h2>

      <a
        href={ExamplePdf}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download .pdf file</button>
      </a>
    </div>
  );
}

export default Pdf;

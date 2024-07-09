const PdfViewer = ({ pdfUrl, w, h }) => {
  return (
    <object data={pdfUrl} type="application/pdf" width={w} height={h}>
      <p>
        Your browser does not support PDFs.{" "}
        <a href={pdfUrl}>Download the PDF</a>.
      </p>
    </object>
  );
};

export default PdfViewer;

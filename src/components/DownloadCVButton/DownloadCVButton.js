const DownloadCVButton = () => {
  const downloadPDF = () => {
    window.open('/CV_Andrii_Deineka_Frontend_Developer.pdf', '_blank');
  };

  return (
    <button onClick={downloadPDF} className="btn">Download CV</button>
  )
};

export default DownloadCVButton;
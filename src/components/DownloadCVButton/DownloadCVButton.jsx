const DownloadCVButton = () => {
  const downloadPDF = () => {
    window.location.href = '/CV_Andrii_Deineka_Frontend_Developer.pdf';
  };

  return (
    <button onClick={downloadPDF} className="btn">Download CV</button>
  )
};

export default DownloadCVButton;
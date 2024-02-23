const DownloadCVButton = () => {
  const downloadPDF = () => {
    window.open('https://drive.google.com/file/d/1TYD0Tuqt3Mhkw1tieubLwqWPFVN4zQ_5/view?usp=sharing', '_blank');
  };

  return (
    <button onClick={downloadPDF} className="btn">Download CV</button>
  )
};

export default DownloadCVButton;
import "./ImportComplete.css";
import importlogo from "../../Images/Group1.png";

const ImportComplete = () => {
  return (
    <div className="importcomplete">
      <img src={importlogo} alt="" />
      <span className="import_instr">Import Complete</span>
      <span className="upload">CSV File is Uploaded</span>
    </div>
  );
};

export default ImportComplete;

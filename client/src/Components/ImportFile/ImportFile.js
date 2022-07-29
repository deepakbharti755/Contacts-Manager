import "./ImportFile.css";
import { useState } from "react";
import { parse } from "papaparse";
import importlogo from "../../Images/Group.png";

const ImportFile = () => {
  const [contacts, setContacts] = useState([]);
  return (
    <div
      className="importfile"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        Array.from(e.dataTransfer.files)
          .filter((file) => file.type === "text/csv")
          .forEach(async (file) => {
            const text = await file.text();
            const result = parse(text, { header: true });
            setContacts((existing) => [...existing, ...result.data]);
          });
      }}
    >
      <img src={importlogo} alt="" />
      <span className="instruction">Import File</span>
      <span className="drag">Drag & Drop a CSV File to Upload</span>
      <button className="cancel">Cancel</button>
    </div>
  );
};

export default ImportFile;

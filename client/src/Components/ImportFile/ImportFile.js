import "./ImportFile.css";
import { useEffect, useState } from "react";
import { parse } from "papaparse";
import importlogo from "../../Images/Group.png";
import axios from "axios";

const ImportFile = ({ importfile, importfunct }) => {
  const [contacts, setContacts] = useState([]);
  // useEffect(() => {
  //   const postdata = async () => {
  //     try {
  //       await axios.post("http://localhost:3001/contacts", {
  //         contacts: contacts,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   postdata();
  // }, []);
  return (
    <>
      {importfile === "import" && (
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
          <button className="cancel" onClick={() => importfunct(null)}>
            Cancel
          </button>
        </div>
      )}
      {contacts.length > 0 && (
        <div className="importcomplete">
          <img src={importlogo} alt="" />
          <span className="import_instr">Import Complete</span>
          <span className="upload">CSV File is Uploaded</span>
        </div>
      )}
    </>
  );
};

export default ImportFile;

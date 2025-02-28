import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-regular-svg-icons";

function FileExplorer({ explorer }) {
  const [expand, setExpand] = useState(false);
  const file = <FontAwesomeIcon icon={faFile} style={{ color: "black" }} />;
  const folder = (
    <FontAwesomeIcon
      icon={faFolder}
      style={{ backgroundColor: "yellow", fontWeight: "bolder" }}
    />
  );
  return (
    <div>
      <div>
        <span onClick={() => setExpand(!expand)}>
          {explorer.isFolder ? folder : file}
          <span style={{ paddingLeft: ".4rem" }}>{explorer.name}</span>
        </span>
      </div>
      {explorer.isFolder && expand && (
        <div style={{ paddingLeft: "1rem" }}>
          {explorer.items.map((exp) => {
            return <FileExplorer explorer={exp} />;
          })}
        </div>
      )}
    </div>
  );
}

export default FileExplorer;

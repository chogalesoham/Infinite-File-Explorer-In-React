import React, { useState } from "react";
import folderData from "./data/folderData.js";
import Folder from "./componets/Folder.jsx";
import useTreeTraversal from "./hooks/useTreeTraversal.js";

const App = () => {
  const [fileExplorerData, setFileExplorerData] = useState(folderData);

  const { insertNode } = useTreeTraversal();

  const handelInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(fileExplorerData, folderId, item, isFolder);

    setFileExplorerData(finalTree);
  };

  return (
    <div>
      <Folder
        InsertNode={handelInsertNode}
        fileExplorerData={fileExplorerData}
      />
    </div>
  );
};

export default App;

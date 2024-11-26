import React, { useState } from "react";

const Folder = ({ fileExplorerData, InsertNode }) => {
  console.log(fileExplorerData);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handelNewFolder = (e, folder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: folder,
    });
    setExpand(true);
  };

  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      InsertNode(fileExplorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (fileExplorerData.isFolder) {
    return (
      <div className="m-4 cursor-pointer">
        <div className=" flex items-center justify-start gap-4 ">
          <span onClick={() => setExpand(!expand)}>
            📁 {fileExplorerData.name}
          </span>
          <span className=" flex gap-2">
            <button
              onClick={(e) => handelNewFolder(e, true)}
              className=" bg-white text-black text-sm px-1 rounded-md flex items-center justify-center border-none outline-none"
            >
              Folder+
            </button>
            <button
              onClick={(e) => handelNewFolder(e, false)}
              className=" bg-white text-black text-sm px-1 rounded-md flex items-center justify-center border-none outline-none"
            >
              file+
            </button>
          </span>
        </div>
        {showInput.visible && (
          <div className="m-5">
            <span>{showInput.isFolder ? "📁 " : "📃 "}</span>
            <input
              className=" text-black px-2 py-[2px]"
              onKeyDown={addNewFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              type="text"
              autoFocus
            />
          </div>
        )}
        <div className={expand ? " block mx-6 transition" : " hidden"}>
          {fileExplorerData.items.map((item, idx) => (
            <Folder InsertNode={InsertNode} key={idx} fileExplorerData={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" m-4">
        <span>📃{fileExplorerData.name}</span>{" "}
      </div>
    );
  }
};

export default Folder;

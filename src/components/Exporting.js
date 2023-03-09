import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const Exporting = (props) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const createNewJson = () => {
    let newJson = [];
    props.data.forEach((tool) => {
      let newTool = {};
      newTool["name"] = tool.name;
      newTool["tooltypes"] = "";
      tool.tool_types.forEach((t) => {
        newTool["tooltypes"] = newTool["tooltypes"].concat(t.name + ", ")
      })
      newTool["tooltypes"] = newTool["tooltypes"].slice(0, -2);
      newTool["institutes"] = "";
      tool.institutes.forEach((i) => {
        newTool["institutes"] = newTool["institutes"].concat(i.name + ", ")
      })
      newTool["institutes"] = newTool["institutes"].slice(0, -2);
      newTool["description"] = tool.description;
      newTool["publications"] = "";
      tool.publications.forEach((pub) => {
        newTool["publications"] = newTool["publications"].concat(pub.details + ", ")
      })
      newTool["publications"] = newTool["publications"].slice(0, -2);
      newTool["citations"] = tool.citation_count;
      newTool["topics"] = "";
      tool.topics.forEach((t) => {
        newTool["topics"] = newTool["topics"].concat(t.term + ", ")
      });
      newTool["topics"] = newTool["topics"].slice(0, -2);
      newTool["functions"] = "";
      tool.functions.forEach((f) => {
        newTool["functions"] = newTool["functions"].concat(f.term + ", ")
      });
      newTool["functions"] = newTool["functions"].slice(0, -2);
      newTool["maturity"] = tool.maturity;
      newTool["platforms"] = "";
      tool.platforms.forEach((p) => {
        newTool["platforms"] = newTool["platforms"].concat(p.name + ", ")
      })
      newTool["platforms"] = newTool["platforms"].slice(0, -2);
      newJson.push(newTool);
    });

    console.log(newJson);

    return newJson;
  }

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(createNewJson());
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "tools" + fileExtension);
  };

  return (
    <>
      <button onClick={exportToExcel}>Export xlsx</button>
    </>
  );
};

export default Exporting;

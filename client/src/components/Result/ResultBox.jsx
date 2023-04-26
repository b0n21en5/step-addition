import React from "react";
import { Box } from "@material-ui/core";
import "./resultbox.css";

const ResultBox = ({ result }, ref) => {
  return (
    <Box className="outerBox" ref={ref}>
      <Box className="innerBox">
        <div className="jsonContainer">
          <div className="yellow">{"{"}</div>
          {result.length ? (
            result.map((p, i) => {
              return (
                <div className="jsonResult" key={i}>
                  <div className="rdRose">"step{i + 1}"</div>
                  <div className="yellow">{`: { "carryString": `}</div>
                  <div className="orange">{`\u00A0"${p.carryString}"`}</div>
                  <div className="yellow">, "sumString": </div>
                  <div className="orange">{`\u00A0"${p.sumString}"`}</div>
                  <div className="yellow">{`\u00A0}${
                    i + 1 === result.length ? "" : ","
                  }`}</div>
                </div>
              );
            })
          ) : (
            <div style={{ color: "red" }}>{result.message}</div>
          )}
          <div className="yellow">{"}"}</div>
        </div>
      </Box>
    </Box>
  );
};

export default React.forwardRef(ResultBox);

import React from "react";
import "./index.css";

/**
 * 模仿浏览器窗口组件
 */
interface Props {
  children: any;
  style?: any;
  className?: any;
}

const BrowserWindow: React.FC<Props> = ({ children,style,className }) => {
  return (
    <div className={"browser-window-container " +  className} style={style}>
      <div className="row">
        <div className="column left">
          <span className="dot" style={{ background: "#ED594A" }}></span>
          <span className="dot" style={{ background: "#FDD800" }}></span>
          <span className="dot" style={{ background: "#5AC05A" }}></span>
        </div>
        <div className="middle">
          <input type="text" value="http://localhost:3000" disabled />
        </div>
        <div className="column right">
          <div style={{ float: "right" }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default BrowserWindow;

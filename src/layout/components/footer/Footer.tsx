import React from "react";
import "./footer.scss";
import logo from "../../../assert/logo/W3Schools_logo.svg";
import imageBackground from "./img/background_in_space.png";
import image from "./img/lynx_landing.png";

const NavFooter: Array = [
  { name: "spaces" },
  { name: "upgrade" },
  { name: "newsletter" },
  { name: "get certificate" },
  { name: "report error" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer w-full flex items-center justify-center">
      <div className="footer-content">
        <div className="footer-content-header ">
          <div className="content-header-logo">
            <img src={logo} title="W3Schools" width={"49px"} />
          </div>
          {/* {NavFooter.map((item: any) => {
            return (
              <div>
                <button
                  className="content-header-item uppercase text-bold"
                  style={{ color: "#fff4a3" }}
                >
                  {item.name}
                </button>
              </div>
            );
          })} */}
        </div>
      </div>
      <div></div>
    </footer>
    // <footer className="footer">
    //   <div className="footer-box">
    //     <ul>
    //       <li>
    //         <img src={logo} title="W3Schools" width={"49px"} />
    //       </li>
    //       {NavFooter.map((item: any) => {
    //         return (
    //           <li>
    //             <button className="" style={{ color: "#fff4a3" }}>
    //               {item.name}
    //             </button>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </footer>
  );
};

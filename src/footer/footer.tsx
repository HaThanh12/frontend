import { Container, gridClasses } from "@mui/material";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-divtong"
        style={{
          maxWidth: "1520px",
          marginRight: "auto",
          marginLeft: "auto",
          width: "100%",
          // alignContent: 'center',
          // alignItems: 'center',
          // justifyContent: 'center',
          // justifyItems: 'center',
        }}
      >
        <div className="footer-divlon">
          <div>
            <h3>Product</h3>
            <ul>
              <li>Quickstart</li>
              <li>Documentation</li>
              <li>HTTP API Reference</li>
              <li>Changelog</li>

              <li>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_210)">
                    <g clipPath="url(#clip1_13_210)">
                      <path
                        d="M8.09375 16.2188C12.512 16.2188 16.0938 12.637 16.0938 8.21875C16.0938 3.80047 12.512 0.21875 8.09375 0.21875C3.67547 0.21875 0.09375 3.80047 0.09375 8.21875C0.09375 12.637 3.67547 16.2188 8.09375 16.2188Z"
                        fill="#78B159"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_13_210">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.09375 0.21875)"
                      />
                    </clipPath>
                    <clipPath id="clip1_13_210">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.09375 0.21875)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                Status
              </li>
            </ul>
          </div>
          <div>
            <h3>Integrations</h3>
            <ul>
              <li>N8N</li>
              <li>Golang SDK</li>
              <li>Python SDK</li>
              <li>PHP SDK</li>
              <li>NodeJS SDK</li>
              <li>Javascript SDK</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Terms of service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-composable-doc">
            <img src="./images/Composable_doc 1.png" alt="" />
          </div>
        </div>

        <div>
          Copyright © 2025 - Made with love and passion in Vietnam{" "}
          <img
            style={{ width: "18px", height: "12px" }}
            src="./images/vietnam-flag.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}

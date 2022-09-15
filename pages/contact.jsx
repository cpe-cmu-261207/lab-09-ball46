import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function contact() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3">📱Contact Me</p>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <div className="d-flex justify-content-center gap-3">
            <div>
              <img
                src="/myface.jpg"
                class="rounded-circle"
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div class="vstack gap-2">
              <div class="d-flex ">
                <div class="fw-semibold" style={{ minWidth: "100px" }}>
                  Name
                </div>
                <span class="text-muted">Charncol Panusupanirun</span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "76px" }}>
                  Nickname
                </div>
                <span class="text-muted">Ball</span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "75px" }}>
                  Address
                </div>
                <span class="text-muted">
                  137 ถนนวังโค้ง ตำบลเวียงเหนือ อำเภอเมือง จังหวัดลำปาง 52000
                </span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "75px" }}>
                  Facebook
                </div>
                <span class="text-muted">
                  <a
                    href="https://www.facebook.com/ball.panu.9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/ball.panu.9/
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="fw-semibold" style={{ minWidth: "50px" }}>
                  Email
                </div>
                <span class="text-muted">
                  <a href="mailto: charnchol_pa@cmu.ac.th">
                    charnchol_pa@cmu.ac.th
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="fw-semibold" style={{ minWidth: "50px" }}>
                  Phone
                </div>
                <span class="text-muted">0951343136</span>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}

import React from "react";

export default function Skill() {
  return (
    <div>
      <div class=" mx-auto m-3 d-flex justify-content-center fs-3">
        My skills
      </div>
      <div class="hstack mx-auto justify-content-center">
        <div
          class="text-bg-light card mb-3 mx-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/code.png"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Programming</h5>
                <p class="card-text text-muted">
                  ผมร๊ากการเขียนโค้ดมาก ผมสามารถเขียนโค้ดภาษา C++
                  ได้ในระดับหนึ่ง และอยู่ในช่วงศึกษาการทำหน้าเว็บเพจขอรับกระผม
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-bg-light card mb-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/Hobby.jpg"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Novels</h5>
                <p class="card-text text-muted">
                  งานอดิเรกที่ผมชอบมากที่สุดคือการอ่านนวนิยาย
                  ผมเริ่มมีงานอดิเรกนี้ตอนประมาณ ม.3
                  และตอนนี้ผมอ่านมันทุกวันไม่ต่างจากกิจวัตรประจำวันอันหนึ่งที่ต้องทำโดยไม่รู้ตัว
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-bg-light card mb-3 mx-auto shadow justify-content-center"
        style={{ maxWidth: "675px" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/Table-Tennis.jpg"
              class="img-fluid rounded-start"
              style={{ objectfit: "cover", width: "100%", height: "140px" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body text-bg-light">
              <h5 class="card-title">Table tennis</h5>
              <p class="card-text fw-bold">
                ผมเป็นสายที่ไม่ค่อยได้ออกกำลังกายมากนัก
                แต่มีกีฬาชนิดหนึ่งที่ผมชอบเล่นมากพอสมควร นั่นก็คือปิงปองนั่นเอง
                มันดูป็นกีฬาที่ดูเคลื่อนไหวไม่มาก แต่ก็เหนื่อยใช่เล่นเลย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

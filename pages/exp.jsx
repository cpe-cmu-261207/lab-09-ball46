import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function exp() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3">📋 Project Experience</p>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/Scratch.png"
                class="img-fluid rounded-start"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Scratch Project</h5>
                <p class="card-text text-muted">
                  ผมได้ใช้ Scratch ในการทำ Project แรกตอนเทอมแรกของปี 1
                  เพื่อสร้างเกมขึ้นมาเกมหนึ่ง
                  มันทำให้ผมเข้าใจพื้นฐานการเขียนโค้ดอย่างเป็นลำดับขั้นตอนเป็นอย่างมาก
                  ปล.ถึงเกมแรกที่ทำออกมาจะห่วยนิดนึงก็เถอะ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">C++ Project</h5>
                <p class="card-text text-muted">
                  สิ่งที่ผมได้เขียนจากภาษา C++
                  คือโปรแกรมห้องสมุดโปรแกรมหนึ่งแบบออฟไลน์ ตอนปี 1 เทอม 2
                  มันเป็นโปรแกรมที่ผมรู้สึกภูมิใจกับมันไม่น้อย
                  เพราะผมแทบจะใช้ความรู้ทุกอย่างที่เรียนมาเขียนลงไปทั้งหมด
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/c++.jpg"
                class="img-fluid rounded-end"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}

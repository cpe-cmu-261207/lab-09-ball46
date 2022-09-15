import React from "react";

export default function intro() {
  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
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
        <div>
          <p className="display-5 mb-3 ">Charnchol Panusupanirun</p>
          <p className="text-muted">
            สวัสดีพ่อแม่พี่น้องทุกคนที่เข้ามาอ่านนะคร๊าบ ผมชื่อชาญชล
            กำลังศึกษาอยู่ที่มหาวิทยาลัยเชียงใหม่ คณะวิศวะกรรมศาสตร์
            สาขาคอมพิวเตอร์
            ผมที่ช๊อบชอบใช้คอมพิวเตอร์รองลงมาจากการอ่านนิยายจึงเป็นเหตุผลในการเข้ามาเรียนสาขานี้
            และตอนนี้กำลังศึกษาอยู่ปีที่ 2 นะครับผม
          </p>
        </div>
      </div>
    </div>
  );
}

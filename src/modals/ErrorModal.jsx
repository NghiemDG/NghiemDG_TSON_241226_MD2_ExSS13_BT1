import React from "react";

export default function ErrorModal() {
  return (
    <div className="overlay" hidden>
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Cảnh báo</h5>
          <i className="fas fa-xmark" />
        </div>
        <div className="modal-body-custom">
          <p>Tên công việc không được phép để trống.</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light">Đóng</button>
        </div>
      </div>
    </div>
  );
}

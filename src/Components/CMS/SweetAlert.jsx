// SweetAlert.js

import React from 'react';
import Swal from 'sweetalert2';

const SweetAlert = ({ title, text, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else {
        onCancel();
      }
    });
  };

  return (
    <div>
      <button onClick={handleConfirm}>Delete</button>
    </div>
  );
};

export default SweetAlert;

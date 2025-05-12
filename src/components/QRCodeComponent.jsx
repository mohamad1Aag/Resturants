import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeComponent() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan the QR Code</h2>
      <QRCode value="https://resturants-fkmb.vercel.app/" />
    </div>
  );
}

export default QRCodeComponent;

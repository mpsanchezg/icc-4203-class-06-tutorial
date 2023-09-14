import QRCode from "react-qr-code";

const QrCode = () => {
  const value = "https://10.33.0.43:5173/";

  return (
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={value}
      viewBox={`0 0 256 256`}
    />
  );
};

export default QrCode;

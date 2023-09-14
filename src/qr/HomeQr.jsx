import PropTypes from "prop-types";

import QrCode from "./components/QrCodeGenerator";
import QrScan from "./components/QrScan";

const HomeQr = ({ cameraEnabled }) => {
  return (
    <>
      <QrCode />
      { cameraEnabled ? (
        <QrScan />
      ) : (
        <p>Se requiere permiso para escanear un QR</p>
      )}
    </>
  );
};

HomeQr.propTypes = {
  cameraEnabled: PropTypes.bool,
};

export default HomeQr;

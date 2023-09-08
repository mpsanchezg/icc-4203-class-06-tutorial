import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

const QrScan = () => {
  const [data, setData] = useState("No result");
  const [qrReaderError, setQrReaderError] = useState(null);

  useEffect(() => {
    console.info(qrReaderError)
  }, [qrReaderError]);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            console.log("QR SCAN", result);
            setData(result?.text);
          }

          if (error) {
            if (error.message != qrReaderError) {
              console.log("ERROR");
              console.log(error.message);
              setQrReaderError(error.message);
            }
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default QrScan;

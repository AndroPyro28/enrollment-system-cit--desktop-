import React, { useEffect, useState } from 'react'
import QRCODE from "qrcode"

export const useGenerateQrcode = (value:string) => {

    const [qrCode, setQrcode] = useState<string>()

    useEffect(() => {
        const generateQr = async () => {
            const result = await QRCODE.toDataURL(value, {width: 300}); // generate a qr code with a prefered text and width of 300px
            setQrcode(result)
        }
        generateQr()
    }, [value])

  return (
    qrCode
  )
}
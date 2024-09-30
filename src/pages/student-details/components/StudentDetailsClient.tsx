import { Button } from "@/components/ui/button";
import { useGenerateQrcode } from "@/hooks/useQrcode";
import { FormUploadExcelStudentsSchema } from "@/schema/students";
import { ScanQrCode } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const StudentDetailsClient = () => {
    const params = useParams()

    const qrUrl = useGenerateQrcode(params?.id!)

    const fullName = "John Doe"
    const schoolYear = "2024 - 2025"
    const gradeLvl = "7"
    const section = "Amethyst"

    return (
        <div className="flex flex-col items-center space-y-5 border   p-5 rounded-xl">
            <div className="w-10 h-10 rounded-full border border-blue-400 flex justify-center items-center">
                <ScanQrCode className="size-5 text-blue-950"/>
            </div>

                <div className="text-center">
                    <h1 className="font-semibold text-xl">Student's QR code</h1>
                    <h2 className="text-zinc-600 text-sm">You can download and send this qr code.</h2>
                </div>
            <div className="p-3 border rounded-md">
                <a href={qrUrl} download><img src={qrUrl} className="w-[200px]" alt="qcode-image"/></a>
            </div>

            <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">Student Details</h1>

                <div className="flex flex-col text-center space-y-3 ">

                    <div className="flex flex-col">
                        <div className="font-semibold">
                            {fullName}
                        </div>
                        <div className="text-zinc-600 text-sm">
                            Student
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-semibold">
                            {schoolYear}
                        </div>
                        <div className="text-zinc-600 text-sm">
                            School Year
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-semibold">
                            Grade {gradeLvl}
                        </div>
                        <div className="text-zinc-600 text-sm">
                            Grade Level
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-semibold">
                            {section}
                        </div>
                        <div className="text-zinc-600 text-sm">
                            Section
                        </div>
                    </div>
                </div>
            </div>

            <Button className="self-end">Enroll</Button>
        </div>
    );
};

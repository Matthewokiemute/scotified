import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

interface FormDetails {
  myName: string;
  contact: string;
  course: string;
  email: string;
  day: string;
  how: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const formDetails: FormDetails = req.body;

  try {
    const authentication = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth: authentication,
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            formDetails.myName,
            formDetails.contact,
            formDetails.course,
            formDetails.email,
            formDetails.day,
            formDetails.how,
          ],
        ],
      },
    });

    res.status(200).json({
      status: true,
      data: response.data,
      message: "Successfully submitted",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: (error as Error)?.message || "Something went wrong 🥺" });
  }
}

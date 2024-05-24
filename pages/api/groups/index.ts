import type { NextApiRequest, NextApiResponse } from "next";
import { IGroup, createGroup, getGroups } from '@/app/lib/mysql';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGroup[]>,
) {

  const { body, query, method } = req;

  switch (method) {
    case "GET":
      const groups = getGroups().then(
        (data) => {
          res.status(200).json(data);
        }
      )
      break;
    case "POST":
      const name = body.name;
      createGroup(name).then(
        (data) => {
          res.status(200).json(data);
        }
      )
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  
  // Get data from your database
  
}

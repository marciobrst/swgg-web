import type { NextApiRequest, NextApiResponse } from "next";
import type { Group } from "../../../interfaces";
import { IGroup, createGroup, readById, updateGroup } from '@/app/lib/mysql';


export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Group>,
) {
  const { body, query, method } = req;
  const id = parseInt(query.id as string, 10);
  const name = body.name as string;
  const area_conhecimento = body.area_conhecimento as string;
  const linha_pesquisa = body.linha_pesquisa as string;

  switch (method) {
    case "GET":
      readById(id).then(
        (data) => {
          res.status(200).json(data);
        }
      )
      break;
    case "PUT":
      updateGroup(id, name, area_conhecimento, linha_pesquisa).then(
        (data) => {
          res.status(200).json(data);
        }
      )
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

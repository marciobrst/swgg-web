import mysql, { OkPacket } from 'mysql2'

import { RowDataPacket } from "mysql2"

//https://dev.to/larswaechter/using-mysql-in-nodejs-with-typescript-ida

export interface IGroup extends RowDataPacket {
    id?: number
    name: string
    area_conhecimento: string
    linha_pesquisa: string
}

function getConnection() {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: 'admin',
    database: process.env.MYSQL_DATABASE,
    password: 'admin',
    debug: true,
  });
}

export async function getGroups(): Promise<IGroup[]> {
  
    try {
        
        return new Promise((resolve, reject) => {
          getConnection().query<IGroup[]>("SELECT * FROM groups", (err: any, res: any) => {
              if (err) reject(err)
              else resolve(res)
            })
          })
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch group data.');
    }
  }

  export async function readById(user_id: number): Promise<IGroup | undefined> {
    return new Promise((resolve, reject) => {
      getConnection().query<IGroup[]>(
        "SELECT * FROM groups WHERE id = ?",
        [user_id],
        (err: any, res: any) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      )
    })
  }

  export async function createGroup(name: String): Promise<IGroup> {
    return new Promise((resolve, reject) => {
      getConnection().query<OkPacket>(
        "INSERT INTO groups (name) VALUES(?)",
        [name],
        (err: any, res: any) => {
          if (err) reject(err)
          else
            readById(res.insertId)
              .then(group => resolve(group!))
              .catch(reject)
        }
      )
    })
  }
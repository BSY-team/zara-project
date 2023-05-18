import { Request, Response } from 'express';
const conn=require ('../database')

export const getAll = (req: Request, res: Response): void => {
    const sql: string = `SELECT * FROM product`;
    conn.query(sql, (error: any, results: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  };

export const getAllWomenProducts = (req: Request, res: Response): void => {
  const sql: string = `SELECT * FROM product WHERE category = "FEMME"`;
  conn.query(sql, (error: any, results: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
};
export const getAllmenProducts = (req: Request, res: Response): void => {
  const sql: string = `SELECT * FROM product WHERE category = "HOMME"`;
  conn.query(sql, (error: any, results: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
};


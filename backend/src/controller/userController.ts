import { Request, Response } from 'express';
import {connection} from '../database';
import  bcrypt from 'bcryptjs' ;
export const signupUser = (req: Request, res: Response): void => {
    const {
        email, password,name,lastName
    } = req.body;
    const  hash = bcrypt.hashSync(password, 8);
    const sql: string = `INSERT  INTO users (email, password, name, lastName) VALUES (? ,?,?,?)`;
    connection.query(sql,[ email, hash,name,lastName], (error: any, results: any) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json({
            message:"user created successfully"
        });
      }
    });
  };

export const getUser = async (req: Request, res: Response)=>{
  try {
    const {email} = req.params; 
    const sql: string = `SELECT idusers,name,email,lastName FROM users WHERE email = ?`;
      connection.query(sql,[email], (error: any, results: any) => {
        if (error) {
          res.status(500).json(error);
        } else {
          console.log(results)
          res.status(200).json(results[0]);
        }
      });
  } catch (error) {
      console.log(error);
  }
} 
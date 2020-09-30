import express, { Request, Response } from "express";
import * as UnitService from "./units.service";
import { Unit } from "./unit.interface";
import { Units } from "./units.interface";

export const unitsRouter = express.Router();

unitsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const units: Units = await UnitService.findAll();
  
      res.status(200).send(units);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });
  
  // GET units/:id
  
  unitsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const item: Unit = await UnitService.find(id);
  
      res.status(200).send(item);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });
  
  
  // POST units/
  
  unitsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: Unit = req.body.item;
  
      await UnitService.create(item);
  
      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });
  
  // PUT units/
  
  unitsRouter.put("/", async (req: Request, res: Response) => {
    try {
      const item: Unit = req.body.item;
  
      await UnitService.update(item);
  
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
  // DELETE units/:id
  
  unitsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await UnitService.remove(id);
  
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
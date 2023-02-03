import { Request, Response } from "express";
import { SUCCESS_STATUS, BAD_REQUEST } from "../core/constant";
import {
  GetAttendance,
  CreateAttendance,
  DeleteAttendance,
  UpdateAttendance
} from "../repository/AttendanceRepository";

class AttendanceHandler {
  public async GetAttendance(_req: Request, res: Response): Promise<Response> {
    const data = await GetAttendance();
    if (data) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async CreateAttendance(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    data.entry_time = new Date(data.entry_time);
    const new_attendance = await CreateAttendance(data);
    if (new_attendance) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async UpdateAttendance(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const data = req.body;
    const update_attendance = await UpdateAttendance(id, data);
    if (update_attendance) {
      return res.status(SUCCESS_STATUS).send({ update_attendance });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async DeleteAttendance(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const delete_person = await DeleteAttendance(id);
    if (delete_person) {
      return res.status(SUCCESS_STATUS).send({ delete_person });
    } else {
      return res.status(BAD_REQUEST);
    }
  }
}

export default AttendanceHandler;

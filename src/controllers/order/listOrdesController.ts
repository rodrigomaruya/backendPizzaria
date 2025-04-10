import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/listOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrderService();
    const order = await listOrdersService.execute();
    res.json(order);
  }
}

export { ListOrdersController };

import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/listByCategoryService";
class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listByCategory = new ListByCategoryService();
    const product = await listByCategory.execute({ category_id });
    res.json(product);
  }
}

export { ListByCategoryController };

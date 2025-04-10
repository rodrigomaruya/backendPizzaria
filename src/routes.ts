import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";

import { CreateProductController } from "./controllers/product/createProductController";
import { ListByCategoryController } from "./controllers/product/listByCategoryController";

import { CreateOrderController } from "./controllers/order/createOrderController";
import { AddItemController } from "./controllers/order/addItemController";
import { RemoveItemController } from "./controllers/order/removeItemController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { SendOrderController } from "./controllers/order/sendOrderController";
import { ListOrdersController } from "./controllers/order/listOrdesController";
import { DetailOrderController } from "./controllers/order/detailOrderController";
import { FinishOrderController } from "./controllers/order/finishOrderController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// Rotas users
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//--Category

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//-Product

// router.post(
//   "/product",
//   isAuthenticated,
//   upload.single("file"),
//   new CreateProductController().handle
// );
router.post("/product", isAuthenticated, new CreateProductController().handle);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//-Order

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { router };

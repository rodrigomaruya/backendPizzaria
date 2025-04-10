import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const numberTable = await prismaClient.order.findFirst({
      where: {
        table: table,
      },
    });
    if (numberTable) {
      return { message: "Essa mesa já esta em uso!" };
    }

    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });

    return order;
  }
}

export { CreateOrderService };

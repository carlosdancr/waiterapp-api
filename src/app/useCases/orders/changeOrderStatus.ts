import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;

  await Order.findByIdAndUpdate(orderId, { status });

  res.sendStatus(204);
}

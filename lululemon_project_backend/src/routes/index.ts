import {Router} from "express";

import order from "./order";
import payment from "./payment";
import orderStatus from "./orderStatus";
import paymentStatus from "./paymentStatus";
import paymentType from "./paymentType";
import billing from "./billing";
import shipping from "./shipping";

const routes = Router()

routes.use('/order', order)
routes.use('/orderStatus', orderStatus)
routes.use('/payment', payment)
routes.use('/paymentStatus', paymentStatus)
routes.use('/paymentType', paymentType)
routes.use('/billing', billing)
routes.use('/shipping', shipping)

export default routes
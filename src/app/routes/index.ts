import { Router } from "express"
import { PlantRouter } from "../modules/Plant/Plant.routes"
import { orderRouter } from "../modules/Order/order.routes"
import { visitorRoute } from "../modules/CountVisitor/countVisitor.routes"


const router = Router()

const moduleRoutes = [
    {
        path: '/product',
        route: PlantRouter
    },
    {
        path : '/order',
        route : orderRouter
    },
    {
        path : '/visitor',
        route : visitorRoute
    }
 ]

 moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
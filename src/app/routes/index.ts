import { Router } from "express"
import { PlantRouter } from "../modules/Plant/Plant.routes"


const router = Router()

const moduleRoutes = [
    {
        path: '/product',
        route: PlantRouter
    },
 ]

 moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
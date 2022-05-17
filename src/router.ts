import {Router } from "express"
import { AuthenticateUserController } from "./controller/AuthenticateUserControllers"
import { CreateMessageController } from "./controller/CreateMessageController"
import { GetLast3MessageController } from "./controller/GetLast3MessagesController"
import { ProfileUserController } from "./controller/ProfileUserController"
import { ensureAuthenticate } from "./middleware/ensureAuthenticate"

const router = Router()
router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages",ensureAuthenticate, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessageController().handle)
router.get("/profile",ensureAuthenticate, new ProfileUserController().handle)


export { router }

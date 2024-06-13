import AuthController from './Auth'
import PlacementController from './Placement'

const tryCatchAsyncHandler = (handlerFunction: any) => (...args: any) => {
  const nextFunction = args[args.length - 1]
  return Promise.resolve(handlerFunction(...args)).catch(nextFunction)
}

const applyTryCatchAsyncHandler = (controller: any) => {
  for (const key in controller) {
    controller[key] = tryCatchAsyncHandler(controller[key])
  }
}

applyTryCatchAsyncHandler(AuthController)
applyTryCatchAsyncHandler(PlacementController)

export {
  AuthController,
  PlacementController
}
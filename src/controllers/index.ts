import AuthController from './Auth'

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

export { AuthController }
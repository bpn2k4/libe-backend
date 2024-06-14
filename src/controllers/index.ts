import AuthController from './Auth'
import PlacementController from './Placement'

/**
 * Wraps an asynchronous handler function with a try-catch block to handle errors.
 * @param handlerFunction - The asynchronous function to be wrapped.
 * @returns A function that executes the handlerFunction and catches any errors, passing them to the next function.
 */
const tryCatchAsyncHandler = (handlerFunction: any) => (...args: any) => {
  const nextFunction = args[args.length - 1]
  return Promise.resolve(handlerFunction(...args)).catch(nextFunction)
}

/**
 * Applies the tryCatchAsyncHandler to all functions within a given controller.
 * @param controller - The controller whose functions will be wrapped with error handling.
 */
const applyTryCatchAsyncHandler = (controller: any) => {
  for (const key in controller) {
    controller[key] = tryCatchAsyncHandler(controller[key])
  }
}

// Apply error handling to all functions in the controller
applyTryCatchAsyncHandler(AuthController)
applyTryCatchAsyncHandler(PlacementController)

export {
  AuthController,
  PlacementController
}

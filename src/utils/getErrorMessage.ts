export const getErrorMessage = (error: unknown) => {
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return errorMessage;
};

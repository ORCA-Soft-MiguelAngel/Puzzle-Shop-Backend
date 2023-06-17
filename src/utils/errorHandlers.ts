export const handleMongoError = (error: any) => {
  if ("code" in error && (error.code === 11000 || error.code === 11001)) {
    const field = Object.keys(error.keyValue)[0];
    return `An element with that ${field} already exists.`;
  }
  return error.message;
};

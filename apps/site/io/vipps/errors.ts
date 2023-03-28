export class FailedFetchingCharges extends Error {
  constructor(id: number | string) {
    super(`Failed to fetch charges for agreement with id ${id}`)
  }
}

export class FailedCaptureError extends Error {
  constructor(id: number | string) {
    super(`Failed to capture charge for agreement with id ${id}`)
  }
}

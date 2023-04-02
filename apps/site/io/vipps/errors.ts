export class FetchingChargesError extends Error {
  constructor(id: number | string) {
    super(`Failed to fetch charges for agreement with id ${id}`)
  }
}

export class CapturingChargeError extends Error {
  constructor(id: number | string) {
    super(`Failed to capture charge for agreement with id ${id}`)
  }
}

export class PostingAgreementError extends Error {
  constructor(message: string, status: number) {
    super(
      `Failed to post agreement. Received with status ${status} and message "${message}"`,
    )
  }
}

export class FetchingAgreementError extends Error {
  constructor(id: string, message: string, status: number) {
    super(
      `Failed to fetch agreement with id ${id}. Received with status ${status} and message "${message}"`,
    )
  }
}

export class StoppingAgreementError extends Error {
  constructor(id: string, status: number) {
    super(`Failed to stop agreement with id ${id}. Received status ${status}`)
  }
}

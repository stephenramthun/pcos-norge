declare type Agreement = {
  id: string
  status: "ACTIVE" | "PENDING" | "EXPIRED" | "STOPPED" | "UPDATING"
  start?: string | null
  stop?: string | null
  paidDate?: Date | null
}

declare type VippsAgreement = {
  id: string
  status: AgreementStatus
  start: string
  stop: string
  pricing: {
    currency: "NOK"
    amount: number
  }
}

declare type AgreementResponseBody = {
  vippsConfirmationUrl: string
  agreementId: string
  chargeId: string
}

declare type AgreementRequestBody = {
  interval: {
    unit: "YEAR"
    count: number
  }
  initialCharge: {
    amount: number
    description: string
    transactionType: "RESERVE_CAPTURE"
  }
  pricing: {
    type: "LEGACY"
    amount: number
    currency: "NOK"
  }
  merchantRedirectUrl: string
  merchantAgreementUrl: string
  productName: string
}

declare type ChargeStatus =
  | "PENDING"
  | "DUE"
  | "RESERVED"
  | "CHARGED"
  | "PARTIALLY_CAPTURED"
  | "FAILED"
  | "CANCELLED"
  | "PARTIALLY_REFUNDED"
  | "REFUNDED"
  | "PROCESSING"

declare type ChargeResponseBody = {
  id: string
  amount: number
  status: ChargeStatus
  history: {
    occurred: string
    event: "CREATE" | "RESERVE" | "CAPTURE" | "CANCEL"
  }[]
}

declare type UserData = {
  agreement: Agreement | null
  subscriptions: string[]
}

declare type ErrorResponse = {
  status: number
  details: string
}

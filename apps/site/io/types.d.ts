declare type ChargeResponseBody = {
  chargeId: string
}

declare type ChargeRequestBody = {
  amount: number
  description: string
  transactionType: "DIRECT_CAPTURE" | "RESERVE_CAPTURE"
  due: string
  retryDays: number
}

declare type Agreement = {
  id: string
  status: "ACTIVE" | "PENDING" | "EXPIRED" | "STOPPED"
  start?: string
  stop?: string
}

declare type AgreementResponseBody = {
  vippsConfirmationUrl: string
  agreementId: string
  chargeId: string | null
}

declare type AgreementRequestBody = {
  interval: {
    unit: "YEAR"
    count: number
  }
  initialCharge: {
    amount: number
    description: string
    transactionType: "DIRECT_CAPTURE" | "RESERVE_CAPTURE"
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

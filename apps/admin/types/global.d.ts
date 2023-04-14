declare type User = User & AdditionalFields

declare type VippsSession = Session & {
  user: Session["user"] & Partial<AdditionalFields>
}

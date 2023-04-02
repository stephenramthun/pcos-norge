export class MembershipPrice {
  private static price = 30_000

  static get asØre(): number {
    return MembershipPrice.price
  }

  static get asKroner(): number {
    return MembershipPrice.price / 100
  }
}

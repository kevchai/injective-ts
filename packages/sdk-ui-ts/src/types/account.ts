import { SubaccountTransfer } from '@injectivelabs/sdk-ts/dist/client/exchange/types/account'
import { Token } from './token'

export interface UiSubaccountBalance {
  totalBalance: string
  availableBalance: string
  denom: string
}

export interface UiSubaccountBalanceWithToken
  extends Omit<
    UiSubaccountBalance,
    'totalBalance' | 'denom' | 'availableBalance'
  > {
  totalBalance: string // BigNumberInWei
  availableBalance: string // BigNumberInWei
}

export interface UiSubaccount {
  subaccountId: string
  balances: UiSubaccountBalance[]
}

export interface UiSubaccountTransfer
  extends Omit<SubaccountTransfer, 'amount'> {
  amount: string
  denom: string
}

export interface UiSubaccountTransferWithToken extends UiSubaccountTransfer {
  token: Token
}
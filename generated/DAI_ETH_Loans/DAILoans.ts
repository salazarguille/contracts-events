// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CollateralDeposited extends ethereum.Event {
  get params(): CollateralDeposited__Params {
    return new CollateralDeposited__Params(this);
  }
}

export class CollateralDeposited__Params {
  _event: CollateralDeposited;

  constructor(event: CollateralDeposited) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CollateralWithdrawn extends ethereum.Event {
  get params(): CollateralWithdrawn__Params {
    return new CollateralWithdrawn__Params(this);
  }
}

export class CollateralWithdrawn__Params {
  _event: CollateralWithdrawn;

  constructor(event: CollateralWithdrawn) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get withdrawalAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LoanLiquidated extends ethereum.Event {
  get params(): LoanLiquidated__Params {
    return new LoanLiquidated__Params(this);
  }
}

export class LoanLiquidated__Params {
  _event: LoanLiquidated;

  constructor(event: LoanLiquidated) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get liquidator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get collateralOut(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokensIn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LoanRepaid extends ethereum.Event {
  get params(): LoanRepaid__Params {
    return new LoanRepaid__Params(this);
  }
}

export class LoanRepaid__Params {
  _event: LoanRepaid;

  constructor(event: LoanRepaid) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPaid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get payer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get totalOwed(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LoanTakenOut extends ethereum.Event {
  get params(): LoanTakenOut__Params {
    return new LoanTakenOut__Params(this);
  }
}

export class LoanTakenOut__Params {
  _event: LoanTakenOut;

  constructor(event: LoanTakenOut) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountBorrowed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LoanTermsSet extends ethereum.Event {
  get params(): LoanTermsSet__Params {
    return new LoanTermsSet__Params(this);
  }
}

export class LoanTermsSet__Params {
  _event: LoanTermsSet;

  constructor(event: LoanTermsSet) {
    this._event = event;
  }

  get loanID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get interestRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get collateralRatio(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get maxLoanAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get duration(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get termsExpiry(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class PriceOracleUpdated extends ethereum.Event {
  get params(): PriceOracleUpdated__Params {
    return new PriceOracleUpdated__Params(this);
  }
}

export class PriceOracleUpdated__Params {
  _event: PriceOracleUpdated;

  constructor(event: PriceOracleUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldPriceOracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newPriceOracle(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DAILoans__loansResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get loanTerms(): DAILoans__loansResultValue0LoanTermsStruct {
    return this[1].toTuple() as DAILoans__loansResultValue0LoanTermsStruct;
  }

  get termsExpiry(): BigInt {
    return this[2].toBigInt();
  }

  get loanStartTime(): BigInt {
    return this[3].toBigInt();
  }

  get collateral(): BigInt {
    return this[4].toBigInt();
  }

  get lastCollateralIn(): BigInt {
    return this[5].toBigInt();
  }

  get principalOwed(): BigInt {
    return this[6].toBigInt();
  }

  get interestOwed(): BigInt {
    return this[7].toBigInt();
  }

  get borrowedAmount(): BigInt {
    return this[8].toBigInt();
  }

  get status(): i32 {
    return this[9].toI32();
  }

  get liquidated(): boolean {
    return this[10].toBoolean();
  }
}

export class DAILoans__loansResultValue0LoanTermsStruct extends ethereum.Tuple {
  get borrower(): Address {
    return this[0].toAddress();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get interestRate(): BigInt {
    return this[2].toBigInt();
  }

  get collateralRatio(): BigInt {
    return this[3].toBigInt();
  }

  get maxLoanAmount(): BigInt {
    return this[4].toBigInt();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }
}

export class DAILoans__getCollateralInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class DAILoans extends ethereum.SmartContract {
  static bind(address: Address): DAILoans {
    return new DAILoans("DAILoans", address);
  }

  getBorrowerLoans(borrower: Address): Array<BigInt> {
    let result = super.call(
      "getBorrowerLoans",
      "getBorrowerLoans(address):(uint256[])",
      [ethereum.Value.fromAddress(borrower)]
    );

    return result[0].toBigIntArray();
  }

  try_getBorrowerLoans(borrower: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getBorrowerLoans",
      "getBorrowerLoans(address):(uint256[])",
      [ethereum.Value.fromAddress(borrower)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  loans(loanID: BigInt): DAILoans__loansResultValue0Struct {
    let result = super.call(
      "loans",
      "loans(uint256):((uint256,(address,address,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint8,bool))",
      [ethereum.Value.fromUnsignedBigInt(loanID)]
    );

    return result[0].toTuple() as DAILoans__loansResultValue0Struct;
  }

  try_loans(
    loanID: BigInt
  ): ethereum.CallResult<DAILoans__loansResultValue0Struct> {
    let result = super.tryCall(
      "loans",
      "loans(uint256):((uint256,(address,address,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint8,bool))",
      [ethereum.Value.fromUnsignedBigInt(loanID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as DAILoans__loansResultValue0Struct
    );
  }

  priceOracle(): Address {
    let result = super.call("priceOracle", "priceOracle():(address)", []);

    return result[0].toAddress();
  }

  try_priceOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("priceOracle", "priceOracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lendingPool(): Address {
    let result = super.call("lendingPool", "lendingPool():(address)", []);

    return result[0].toAddress();
  }

  try_lendingPool(): ethereum.CallResult<Address> {
    let result = super.tryCall("lendingPool", "lendingPool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lendingToken(): Address {
    let result = super.call("lendingToken", "lendingToken():(address)", []);

    return result[0].toAddress();
  }

  try_lendingToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("lendingToken", "lendingToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalCollateral(): BigInt {
    let result = super.call(
      "totalCollateral",
      "totalCollateral():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalCollateral(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCollateral",
      "totalCollateral():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  loanIDCounter(): BigInt {
    let result = super.call("loanIDCounter", "loanIDCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_loanIDCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "loanIDCounter",
      "loanIDCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collateralToken(): Address {
    let result = super.call(
      "collateralToken",
      "collateralToken():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_collateralToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collateralToken",
      "collateralToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCollateralInfo(loanID: BigInt): DAILoans__getCollateralInfoResult {
    let result = super.call(
      "getCollateralInfo",
      "getCollateralInfo(uint256):(uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(loanID)]
    );

    return new DAILoans__getCollateralInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_getCollateralInfo(
    loanID: BigInt
  ): ethereum.CallResult<DAILoans__getCollateralInfoResult> {
    let result = super.tryCall(
      "getCollateralInfo",
      "getCollateralInfo(uint256):(uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(loanID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DAILoans__getCollateralInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }
}

export class DepositCollateralCall extends ethereum.Call {
  get inputs(): DepositCollateralCall__Inputs {
    return new DepositCollateralCall__Inputs(this);
  }

  get outputs(): DepositCollateralCall__Outputs {
    return new DepositCollateralCall__Outputs(this);
  }
}

export class DepositCollateralCall__Inputs {
  _call: DepositCollateralCall;

  constructor(call: DepositCollateralCall) {
    this._call = call;
  }

  get borrower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get loanID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositCollateralCall__Outputs {
  _call: DepositCollateralCall;

  constructor(call: DepositCollateralCall) {
    this._call = call;
  }
}

export class WithdrawCollateralCall extends ethereum.Call {
  get inputs(): WithdrawCollateralCall__Inputs {
    return new WithdrawCollateralCall__Inputs(this);
  }

  get outputs(): WithdrawCollateralCall__Outputs {
    return new WithdrawCollateralCall__Outputs(this);
  }
}

export class WithdrawCollateralCall__Inputs {
  _call: WithdrawCollateralCall;

  constructor(call: WithdrawCollateralCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCollateralCall__Outputs {
  _call: WithdrawCollateralCall;

  constructor(call: WithdrawCollateralCall) {
    this._call = call;
  }
}

export class CreateLoanWithTermsCall extends ethereum.Call {
  get inputs(): CreateLoanWithTermsCall__Inputs {
    return new CreateLoanWithTermsCall__Inputs(this);
  }

  get outputs(): CreateLoanWithTermsCall__Outputs {
    return new CreateLoanWithTermsCall__Outputs(this);
  }
}

export class CreateLoanWithTermsCall__Inputs {
  _call: CreateLoanWithTermsCall;

  constructor(call: CreateLoanWithTermsCall) {
    this._call = call;
  }

  get request(): CreateLoanWithTermsCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as CreateLoanWithTermsCallRequestStruct;
  }

  get responses(): Array<CreateLoanWithTermsCallResponsesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      CreateLoanWithTermsCallResponsesStruct
    >();
  }

  get collateralAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateLoanWithTermsCall__Outputs {
  _call: CreateLoanWithTermsCall;

  constructor(call: CreateLoanWithTermsCall) {
    this._call = call;
  }
}

export class CreateLoanWithTermsCallRequestStruct extends ethereum.Tuple {
  get borrower(): Address {
    return this[0].toAddress();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get consensusAddress(): Address {
    return this[2].toAddress();
  }

  get requestNonce(): BigInt {
    return this[3].toBigInt();
  }

  get amount(): BigInt {
    return this[4].toBigInt();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get requestTime(): BigInt {
    return this[6].toBigInt();
  }
}

export class CreateLoanWithTermsCallResponsesStruct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get consensusAddress(): Address {
    return this[1].toAddress();
  }

  get responseTime(): BigInt {
    return this[2].toBigInt();
  }

  get interestRate(): BigInt {
    return this[3].toBigInt();
  }

  get collateralRatio(): BigInt {
    return this[4].toBigInt();
  }

  get maxLoanAmount(): BigInt {
    return this[5].toBigInt();
  }

  get signature(): CreateLoanWithTermsCallResponsesSignatureStruct {
    return this[6].toTuple() as CreateLoanWithTermsCallResponsesSignatureStruct;
  }
}

export class CreateLoanWithTermsCallResponsesSignatureStruct extends ethereum.Tuple {
  get signerNonce(): BigInt {
    return this[0].toBigInt();
  }

  get v(): i32 {
    return this[1].toI32();
  }

  get r(): Bytes {
    return this[2].toBytes();
  }

  get s(): Bytes {
    return this[3].toBytes();
  }
}

export class TakeOutLoanCall extends ethereum.Call {
  get inputs(): TakeOutLoanCall__Inputs {
    return new TakeOutLoanCall__Inputs(this);
  }

  get outputs(): TakeOutLoanCall__Outputs {
    return new TakeOutLoanCall__Outputs(this);
  }
}

export class TakeOutLoanCall__Inputs {
  _call: TakeOutLoanCall;

  constructor(call: TakeOutLoanCall) {
    this._call = call;
  }

  get loanID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountBorrow(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TakeOutLoanCall__Outputs {
  _call: TakeOutLoanCall;

  constructor(call: TakeOutLoanCall) {
    this._call = call;
  }
}

export class RepayCall extends ethereum.Call {
  get inputs(): RepayCall__Inputs {
    return new RepayCall__Inputs(this);
  }

  get outputs(): RepayCall__Outputs {
    return new RepayCall__Outputs(this);
  }
}

export class RepayCall__Inputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RepayCall__Outputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }
}

export class LiquidateLoanCall extends ethereum.Call {
  get inputs(): LiquidateLoanCall__Inputs {
    return new LiquidateLoanCall__Inputs(this);
  }

  get outputs(): LiquidateLoanCall__Outputs {
    return new LiquidateLoanCall__Outputs(this);
  }
}

export class LiquidateLoanCall__Inputs {
  _call: LiquidateLoanCall;

  constructor(call: LiquidateLoanCall) {
    this._call = call;
  }

  get loanID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LiquidateLoanCall__Outputs {
  _call: LiquidateLoanCall;

  constructor(call: LiquidateLoanCall) {
    this._call = call;
  }
}

export class SetPriceOracleCall extends ethereum.Call {
  get inputs(): SetPriceOracleCall__Inputs {
    return new SetPriceOracleCall__Inputs(this);
  }

  get outputs(): SetPriceOracleCall__Outputs {
    return new SetPriceOracleCall__Outputs(this);
  }
}

export class SetPriceOracleCall__Inputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }

  get newPriceOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPriceOracleCall__Outputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }
}

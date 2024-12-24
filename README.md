# true-money-wallet-gift
🧧 ชำระเงินด้วยซองอังเปา ทรูวอเล็ต (TypeScript)

```
npm i true-money-wallet-gift
```

```typescript
import TruewalletGift, { TruewalletGiftError } from "true-money-wallet-gift";

const example = async () => {
    try {
        const redeemed = await TruewalletGift(
            "เบอร์โทรศัพท์ที่รับตัง",
            "https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxx"
        );
        console.log(
            `รับซองจากคุณ : ${redeemed.gift_owner} \n` + 
            `เป็นจำนวนเงิน : ${redeemed.gift_amount}`
        );
    } catch (error: any) {
        if (error instanceof TruewalletGiftError) {
            console.log(error.message);
        }
    }
}
example();
```

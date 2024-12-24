import TruewalletGift, { TruewalletGiftError } from "true-money-wallet-gift";

const example = async () => {
    try {
        const redeemed = await TruewalletGift(
            "เบอร์โทรศัพท์ที่รับตัง",
            "https://gift.truemoney.com/campaign/?v=xxxxxxxxxxxxxxxxxxxxxx"
        );
        console.log(
            `เจ้าของซอง : ${redeemed.gift_owner} \n` + 
            `จำนวนเงิน : ${redeemed.gift_amount}`
        );
    } catch (error: any) {
        if (error instanceof TruewalletGiftError) {
            console.log(error.message);
        }
    }
}

example();
// 随机生成32位字符串
export default function (len = 32) {
    const $char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const maxPos = $char.length;
    let str = "";
    for (let i = 0; i < len; i++) {
        str += $char.charAt(Math.floor(Math.random() * maxPos))

    }
    return str

}
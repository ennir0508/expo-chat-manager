/**
 * 現在日時を取得する
 */
export const now = () => {
    return new Date();
}

/**
 * 本日の日付を取得する
 * @returns {string} e.g. 2022-10-01
 */
export const today = (): string => {
    return date2string(now());
}

/**
 * Date型の値を文字列として返却する
 * @param {Date} date 変換前日付
 * @param {string} [deli=`-`] 区切り文字
 * @return {string} 文字列型日付。e.g. 2022-10-01, 2022/01/10
 */
export const date2string = (date: Date, deli: string = "-"): string => {
    return `${date.getFullYear()}${deli}${("00" + date.getMonth()).slice(-2)}${deli}${("00" + date.getDate()).slice(-2)}`;
}

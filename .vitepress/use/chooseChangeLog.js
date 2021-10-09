/**
 *
 * @param {*} headers md headers数组
 * @param {*} tagret 返回大于tagret的版本记录 目前只取主版本号 版本号格式为：x.x.x
 * @returns 大于或等于tagret主版本号的md数组对象
 */
export function useChangelog(headers = [], tagret = '') {
  let locked = null; // 上锁
  const major = tagret.split('.')[0]; // 目标主版本
  const logArr = [];
  for (let item of headers) {
    if (item.level === 2) {
      const itemVersion = item.title.match(/\[(\S*)\]/)[1].split('.')[0];
      if (Number(major || 0) <= Number(itemVersion || 0)) {
        locked = false;
      } else {
        locked = true;
      }
      if (!major) {
        locked = false;
      }
    }
    if (!locked) logArr.push(item);
  }
  return {
    logArr,
  };
}

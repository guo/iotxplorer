export const NARROW_WIDTH_HOME = 1279;
export const NARROW_WIDTH = 768;
const MIN_SUB_LENGTH = 6;

export function ellipsisText(s, width) {
  if (s.length >= 60) {
    const length = s.length;
    const newLen = Math.floor(width / length) - 5;
    return `${s.substr(0, 8)}...${s.substr(length - 5, 5)}`;
  }

  if (width > NARROW_WIDTH_HOME) {
    return s;
  }
  const length = s.length;
  const newLen = Math.floor(width / length) - 5;
  const subLen = newLen >= MIN_SUB_LENGTH ? newLen : MIN_SUB_LENGTH;
  if (length > 13) {
    return `${s.substring(0, subLen)}...${s.substring(
      length - subLen,
      length
    )}`;
  }
  return s;
}

export function singleColEllipsisText(s, width, isHome) {
  if (width > NARROW_WIDTH && isHome && s) {
    const length = s.length;
    const newLen = Math.floor(width / length) - 6;
    const subLen = newLen >= MIN_SUB_LENGTH ? newLen : MIN_SUB_LENGTH;
    return `${s.substring(0, subLen)}...${s.substring(
      length - subLen,
      length
    )}`;
  }
  if (width <= 600 && s) {
    const length = s.length;
    const newLen = Math.floor(width / length) + 10;
    const subLen = newLen >= MIN_SUB_LENGTH ? newLen : MIN_SUB_LENGTH;
    return `${s.substring(0, subLen)}...${s.substring(
      length - subLen,
      length
    )}`;
  }
  return s;
}

export function hideColClass(width) {
  return width >= NARROW_WIDTH;
}

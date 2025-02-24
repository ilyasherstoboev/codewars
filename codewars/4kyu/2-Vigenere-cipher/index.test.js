import { describe, expect, it } from "vitest";
import VigenereCipher from './index.js'

describe("Tests", () => {
  it("test", () => {
    var abc, key;
    abc = "abcdefghijklmnopqrstuvwxyz";
    key = "password"
    const c = new VigenereCipher(key, abc);

    expect(c.encode('codewars')).toBe('rovwsoiv');
    expect(c.decode('rovwsoiv')).toBe('codewars');

    expect(c.encode('waffles')).toBe('laxxhsj');
    expect(c.decode('laxxhsj')).toBe('waffles');

    expect(c.encode('CODEWARS')).toBe('CODEWARS');
    expect(c.decode('CODEWARS')).toBe('CODEWARS');
  });
});
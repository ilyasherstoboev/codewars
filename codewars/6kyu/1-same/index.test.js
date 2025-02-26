import { describe, it, expect } from "vitest";
import { comp } from './index'

describe("Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

    expect(comp(a1, a2)).toBeTruthy();
  });
});

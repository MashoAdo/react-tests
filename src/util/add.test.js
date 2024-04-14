import { expect, test } from "vitest";
import AddNum from "./add";

test("add", () => {
 expect(AddNum(2,3)).toBe(5);
}
);
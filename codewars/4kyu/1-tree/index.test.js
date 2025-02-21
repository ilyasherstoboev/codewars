import { Node, treeByLevels } from './index'
import { describe, it, expect } from "vitest";

describe("Tests suite", function() {
  it("null", function() {
    const res = treeByLevels(null);
		expect(res).toEqual([]);
	});

  it('1', () => {
		const treeOne =
      new Node(2,
        new Node(8,
          new Node(1),
          new Node(3)
        ),
        new Node(9,
          new Node(4),
          new Node(5)
        )
		);

    const res = treeByLevels(treeOne);
		expect(res).toEqual([2,8,9,1,3,4,5]);
  })

  it('2', () => {
		const treeOne = new Node(1,
			new Node(8,
				null,
				new Node(3)
			),
			new Node(4,
				null,
				new Node(5,
					null,
					new Node(7)
				)
			)
		);

    const res = treeByLevels(treeOne);
		expect(res).toEqual([1,8,4,3,5,7]);
  })
});
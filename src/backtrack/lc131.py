from typing import List


class Solution:
    s: str
    path: List[str]
    ans: List[List[str]]
    candidates: List[int]

    def partition(self, s: str) -> List[List[str]]:
        self.s = s
        self.path = []
        self.ans = []
        self.backtrack(0)
        return self.ans

    def backtrack(self, idx: int) -> None:
        if idx >= len(self.s):
            self.ans.append(self.path[:])
            return

        for i in range(idx + 1, len(self.s) + 1):
            if self.equalToReverse(self.s[idx:i]):
                self.path.append(self.s[idx:i])
                self.backtrack(i)
                self.path.pop()

    def equalToReverse(self, item: str) -> bool:
        return item == item[::-1]


solution = Solution()
ans = solution.partition("a")
print(ans)

# bfs 需要队列
# 某节点加入队列时, 立即标记该节点已访问
from typing import List, Tuple

ans: int = 0

step: List[List[int]] = [[0, 1], [1, 0], [0, -1], [-1, 0]]  # y, x

rowNum, colNum = map(int, input().strip().split(" "))

visit: List[List[bool]] = [[False for _ in range(colNum)] for _ in range(rowNum)]

grid: List[List[int]] = []

for _ in range(rowNum):
    row = list(map(int, input().strip().split(" ")))
    grid.append(row)


def rico() -> None:
    global ans

    def bfs(y: int, x: int) -> Tuple[int, bool]:
        ret = 0
        isolated = True

        queue: List[Tuple[int, int]] = []

        queue.append((y, x))
        # 某节点加入队列时, 立即标记该节点已访问
        visit[y][x] = True

        while len(queue) > 0:
            head = queue.pop(0)
            ret += 1

            headY = head[0]
            headX = head[1]

            if headY == 0 or headY == rowNum - 1 or headX == 0 or headX == colNum - 1:
                isolated = False

            for item in step:
                nextY = headY + item[0]
                nextX = headX + item[1]

                if (
                    nextY >= 0
                    and nextY < rowNum
                    and nextX >= 0
                    and nextX < colNum
                    and grid[nextY][nextX] == 1
                    and not visit[nextY][nextX]
                ):

                    queue.append((nextY, nextX))
                    # 某节点加入队列时, 立即标记该节点已访问
                    visit[nextY][nextX] = True

        return (ret, isolated)

    for y in range(rowNum):
        for x in range(colNum):
            if grid[y][x] == 1 and not visit[y][x]:
                ret, isolated = bfs(y, x)
                if isolated:
                    ans += ret


rico()
print(ans)

const nodeNum: number = 3;

// 初始化
const parentIdx = Array.from({ length: nodeNum + 1 }, (_, idx) => idx);
// parentIdx [0, 1, 2, 3]

const sizes = Array.from({ length: nodeNum + 1 }, (_, idx) =>
  idx === 0 ? 0 : 1,
);
// sizes [0, 1, 1, 1]

export function union(idxA: number, idxB: number) {
  const rootA = find(idxA);
  const rootB = find(idxB);
  parentIdx[rootA] = rootB;
}

// 合并优化: 将节点数量较少的树合并到节点数量较多的树
export function perfUnion(idxA: number, idxB: number) {
  let rootA = find(idxA);
  let rootB = find(idxB);
  // 将节点数量较少的树合并到节点数量较多的树
  if (sizes[rootA] < sizes[rootB]) {
    [rootA, rootB] = [rootB, rootA];
  }

  // sizes[rootA] >= sizes[rootB]
  parentIdx[rootB] = rootA;
  sizes[rootA] += sizes[rootB];
}

export function find(idx: number): number {
  // 根节点的父节点 == 根节点
  const pIdx = parentIdx[idx];
  if (pIdx == idx) {
    return idx;
  }
  return find(pIdx);
}

// 查找时压缩
export function perfFind(idx: number): number {
  const pIdx = parentIdx[idx];
  if (pIdx == idx) {
    return idx;
  }
  // 路径压缩
  const root = perfFind(pIdx);
  parentIdx[idx] = root;
  return root;
}

// 删除叶子节点
export function deleteLeaf(idx: number) {
  const root = find(idx);
  sizes[root] -= 1;
  parentIdx[idx] = idx;
}

// 移动叶子节点: 将 idxA 移动到 idxB 所属的树
export function moveLeaf(idxA: number, idxB: number) {
  const rootA = find(idxA);
  const rootB = find(idxB);
  if (rootA == rootB) {
    return;
  }
  sizes[rootA] -= 1;
  sizes[rootB] += 1;
  parentIdx[idxA] = rootB;
}

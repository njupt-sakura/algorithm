#include <numeric>
#include <vector>

using namespace std;

class Solution {
 public:
  int lastStoneWeightII(vector<int>& stones) {
    auto sum = accumulate(stones.begin(), stones.end(), 0);
    auto target = sum / 2;
    auto dp = vector(stones.size() + 1, vector(target + 1, 0));
  }
};

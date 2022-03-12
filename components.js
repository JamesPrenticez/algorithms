import {
  AirportConnections,
  ApartmentHunting,
  BalancedBrackets,
  BinarySearch,
  BoggleBoard,
  BranchSums,
  BreadthFirst,
  BSTConstruction,
  BSTTraversal,
  BubbleSort,
  CalendarMatching,
  CeasarCipherEncryptor,
  ContinuousMedian,
  DepthFirstSearch,
  DiskStacking,
  FindClosestValueBST,
  FindLoop,
  FindThreeLargestNumbers,
  FourNumberSum,
  GroupAnagrams,
  HeapSort,
  InsertionSort,
  InterweavingStrings,
  InvertBinaryTree,
  IterativeInorderTraversal,
  Kadanes,
  KnapsackProblem,
  KnutheMorrisPratt,
  LargestRange,
  LevenshteinDistance,
  LinkedListConstruction,
  LongestCommonSubSequence,
  LongestIncreasingSubsequence,
  LongestPalidronmicSubString,
  LongestStringChain,
  LongestSubstringWithoutDuplication,
  LRUCache,
  MaxPathSum,
  MaxProfitWithKTransactions,
  MaxSubsetSumNoAdjacent,
  MaxSumIncreasingSubsequence,
  MergeLinkedList,
  MergeSort,
  MinHeapConstruction,
  MinMaxStackConstruction,
  MinNumberOfCoinsForChange,
  MinNumberOfJumps,
  MinRewards,
  MoveElementToEnd,
  MultiStringSearch,
  NthFibonacci,
  NumberOfBinaryTreeTopologies,
  NumberOfWayToMakeChange,
  NumbersInPi,
  PalidromeCheck,
  PalindromePartitioningMinCuts,
  PatternMatcher,
  Permutations,
  Powerset,
  ProductSum,
  QuickSelect,
  QuickSort,
  RectangleMania,
  RemoveNthNodeFromEnd,
  ReverseLinkedList,
  RiverSizes,
  SameBST,
  SearchForRange,
  SearchInSortedMatrix,
  SelectionSort,
  ShiftedBinarySearch,
  SingleCycleCheck,
  SmallestDifference,
  SmallestSubstringContaining,
  SubArraySort,
  SuffixTrieConstruction,
  TopologicalSort,
  TwoNumberSum,
  UnderscorigySubString,
  ValidateBST,
  WaterArea,
  YoungestCommonAncestor,
  ZigZagTraverse,
} from './components/index'

export const components = [
  {
    id: 1,
    name: "Two Number Sort",
    component: <TwoNumberSum />
  },
  {
    id: 2,
    name: "Find Closest Value BST",
    component: <FindClosestValueBST />
  },
  {
    id: 3,
    name: "Branch Sums",
    component: <BranchSums />
  },
  {
    id: 4,
    name: "Depth First Search",
    component: <DepthFirstSearch />
  },
  {
    id: 5,
    name: "Linked List Construction",
    component: <LinkedListConstruction />
  },
  {
    id: 6,
    name: "NthFibonacci",
    component: <NthFibonacci />
  },
  {
    id: 7,
    name: "Product Sum",
    component: <ProductSum />
  },
  {
    id: 8,
    name: "Binary Search",
    component: <BinarySearch />
  },
  {
    id: 9,
    name: "Find Three Largest Numbers",
    component: <FindThreeLargestNumbers />
  },
  {
    id: 10,
    name: "Bubble Sort",
    component: <BubbleSort />
  },
  {
    id: 11,
    name: "Insertion Sort",
    component: <InsertionSort />
  },
  {
    id: 12,
    name: "Selection Sort",
    component: <SelectionSort />
  },
  {
    id: 13,
    name: "PalidromeCheck",
    component: <PalidromeCheck />
  },
  {
    id: 14,
    name: "Ceasar Cipher Encryptor",
    component: <CeasarCipherEncryptor />
  },
  {
    id: 15,
    name: "Smallest Difference",
    component: <SmallestDifference />
  },
  {
    id: 16,
    name: "Move Element To End",
    component: <MoveElementToEnd />
  },
  {
    id: 17,
    name: "BST Construction",
    component: <BSTConstruction />
  },
  {
    id: 18,
    name: "Validate BST",
    component: <ValidateBST />
  },
  {
    id: 19,
    name: "BST Traversal",
    component: <BSTTraversal />
  },
  {
    id: 20,
    name: "Invert Binary Tree",
    component: <InvertBinaryTree />
  },
  {
    id: 21,
    name: "Max Subset Sum No Adjacent",
    component: <MaxSubsetSumNoAdjacent />
  },
  {
    id: 22,
    name: "Number Of Way To Make Change",
    component: <NumberOfWayToMakeChange />
  },
  {
    id: 23,
    name: "Min Number Of Coins For Change",
    component: <MinNumberOfCoinsForChange />
  },
  {
    id: 24,
    name: "Levenshtein Distance",
    component: <LevenshteinDistance />
  },
  {
    id: 25,
    name: "Kadanes Algorithm",
    component: <Kadanes />
  },
  {
    id: 26,
    name: "Single Cycle Check",
    component: <SingleCycleCheck />
  },
  {
    id: 27,
    name: "Breadth First",
    component: <BreadthFirst />
  },
  {
    id: 28,
    name: "River Sizes",
    component: <RiverSizes />
  },
  {
    id: 29,
    name: "Youngest Common Ancestor",
    component: <YoungestCommonAncestor />
  },
  {
    id: 30,
    name: "Min Heap Construction",
    component: <MinHeapConstruction />
  },
  {
    id: 31,
    name: "Remove Nth Node From End",
    component: <RemoveNthNodeFromEnd />
  },
  {
    id: 32,
    name: "Permutations",
    component: <Permutations />
  },
  {
    id: 33,
    name: "Powerset",
    component: <Powerset />
  },
  {
    id: 34,
    name: "Search In Sorted Matrix",
    component: <SearchInSortedMatrix />
  },
  {
    id: 35,
    name: "Min Max Stack Construction",
    component: <MinMaxStackConstruction />
  },
  {
    id: 36,
    name: "Balanced Brackets",
    component: <BalancedBrackets />
  },
  {
    id: 37,
    name: "Longest Palidronmic SubString",
    component: <LongestPalidronmicSubString />
  },
  {
    id: 38,
    name: "Group Anagrams",
    component: <GroupAnagrams />
  },
  {
    id: 39,
    name: "Suffix Trie Construction",
    component: <SuffixTrieConstruction />
  },
  {
    id: 40,
    name: "Four Number Sum",
    component: <FourNumberSum />
  },
  {
    id: 41,
    name: "Sub Array Sort",
    component: <SubArraySort />
  },
  {
    id: 42,
    name: "Largest Range",
    component: <LargestRange />
  },
  {
    id: 43,
    name: "Min Rewards",
    component: <MinRewards />
  },
  {
    id: 44,
    name: "Zig Zag Traverse",
    component: <ZigZagTraverse />
  },
  {
    id: 45,
    name: "Same BST",
    component: <SameBST />
  },
  {
    id: 46,
    name: "Max Path Sum",
    component: <MaxPathSum />
  },
  {
    id: 47,
    name: "Max Sum Increasing Subsequence",
    component: <MaxSumIncreasingSubsequence />
  },
  {
    id: 48,
    name: "Longest Common Sub Sequence",
    component: <LongestCommonSubSequence />
  },
  {
    id: 49,
    name: "Min Number Of Jumps",
    component: <MinNumberOfJumps />
  },
  {
    id: 50,
    name: "Water Area",
    component: <WaterArea />
  },
  {
    id: 51,
    name: "Knapsack Problem",
    component: <KnapsackProblem />
  },
  {
    id: 52,
    name: "Disk Stacking",
    component: <DiskStacking />
  },
  {
    id: 53,
    name: "Numbers In Pi",
    component: <NumbersInPi />
  },
  {
    id: 54,
    name: "Topological Sort",
    component: <TopologicalSort />
  },
  {
    id: 55,
    name: "Boggle Board",
    component: <BoggleBoard />
  },
  {
    id: 56,
    name: "Continuous Median",
    component: <ContinuousMedian />
  },
  {
    id: 57,
    name: "Find Loop",
    component: <FindLoop />
  },
  {
    id: 58,
    name: "Reverse Linked List",
    component: <ReverseLinkedList />
  },
  {
    id: 59,
    name: "Merge Linked List",
    component: <MergeLinkedList />
  },
  {
    id: 60,
    name: "Interweaving Strings",
    component: <InterweavingStrings />
  },
  {
    id: 61,
    name: "Shifted Binary Search",
    component: <ShiftedBinarySearch />
  },
  {
    id: 62,
    name: "Search For Range",
    component: <SearchForRange />
  },
  {
    id: 63,
    name: "Quick Select",
    component: <QuickSelect />
  },
  {
    id: 64,
    name: "Quick Sort",
    component: <QuickSort />
  },
  {
    id: 65,
    name: "Heap Sort",
    component: <HeapSort />
  },
  {
    id: 66,
    name: "Longest Substring Without Duplication",
    component: <LongestSubstringWithoutDuplication />
  },
  {
    id: 67,
    name: "Underscorigy SubString",
    component: <UnderscorigySubString />
  },
  {
    id: 68,
    name: "Pattern Matcher",
    component: <PatternMatcher />
  },
  {
    id: 69,
    name: "Multi String Search",
    component: <MultiStringSearch />
  },
  {
    id: 70,
    name: "Apartment Hunting",
    component: <ApartmentHunting />
  },
  {
    id: 71,
    name: "Calendar Matching",
    component: <CalendarMatching />
  },
  {
    id: 72,
    name: "Iterative Inorder Traversal",
    component: <IterativeInorderTraversal />
  },
  {
    id: 73,
    name: "Max Profit With K Transactions",
    component: <MaxProfitWithKTransactions />
  },
  {
    id: 74,
    name: "Palindrome Partitioning Min Cuts",
    component: <PalindromePartitioningMinCuts />
  },
  {
    id: 75,
    name: "Longest String Chain",
    component: <LongestStringChain />
  },
  {
    id: 76,
    name: "Knuthe Morris Pratt",
    component: <KnutheMorrisPratt />
  },
  {
    id: 77,
    name: "Rectangle Mania",
    component: <RectangleMania />
  },
  {
    id: 78,
    name: "LRU Cache",
    component: <LRUCache />
  },
  {
    id: 79,
    name: "Number Of Binary Tree Topologies",
    component: <NumberOfBinaryTreeTopologies />
  },
  {
    id: 80,
    name: "Merge Sort",
    component: <MergeSort />
  },
  {
    id: 81,
    name: "Smallest Substring Containing",
    component: <SmallestSubstringContaining />
  },
  {
    id: 82,
    name: "Longest Increasing Subsequence",
    component: <LongestIncreasingSubsequence />
  },
  {
    id: 83,
    name: "Airport Connections",
    component: <AirportConnections />
  },
]


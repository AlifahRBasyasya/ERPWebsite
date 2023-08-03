function sortDesc(arr) {
  // Check array length
  if (arr.length <= 1) {
    return arr;
  }

  // Use quick sort method
  const pivot = arr.pop();
  let biggerArr = [];
  let smallerArr = [];

  for (let el of arr) {
    if (el > pivot) {
      biggerArr.push(el);
    } else {
      // Smaller than or equal to pivot
      smallerArr.push(el);
    }
  }

  // Continue recursively
  return [...sortDesc(biggerArr), pivot, ...sortDesc(smallerArr)];
}

function maxSubArray(arr, size) {
  if (size > arr.length) {
    // Invalid sub array size
    return -1;
  }

  // Calculate first sum of sub array
  let maxSum = 0;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  // Calculate next sub array
  let currSum = maxSum;
  for (let i = size; i < arr.length; i++) {
    currSum += arr[i] - arr[i - size];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}

function objectSum(obj) {
  let sum = 0;

  // Check input type
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  // Get object values
  let values = Object.values(obj);
  for (let val of values) {
    // Add if value is even number
    if (typeof val === "number" && val % 2 === 0) {
      sum += val;
    }
    // Recursive if value is an object
    else if (typeof val === "object" || val !== null) {
      sum += objectSum(val);
    }
  }

  return sum;
}

// Utility function to check array equality
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, idx) => val === b[idx])
  );
}


// Unit Testing
describe("Test Sort Array Function", () => {
  const res = sortDesc([1, 2, 4, 3, 5, 3, 2, 1]);
  const truth = [5, 4, 3, 3, 2, 2, 1, 1];
  it("should return the same length", () => {
    expect(res.length).toBe(truth.length);
  });
  it("should return the same element at every indexes", () => {
    expect(arrayEquals(res, truth)).toBe(true);
  });
});

describe("Test Max Sub Array Function", () => {
  it("should return 700", () => {
    expect(maxSubArray([100, 200, 300, 400], 2)).toBe(700);
  });
  it("should return 39", () => {
    expect(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });
  it("should return 5", () => {
    expect(maxSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });
  it("should return -1", () => {
    expect(maxSubArray([1, 2, 3], 5)).toBe(-1);
  });
});

describe("Test Sum Object Function", () => {
  it("should return 6", () => {
    expect(objectSum({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    })).toBe(6);
  });
  it("should return 12", () => {
    expect(objectSum({
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 4}, ee: 'car'}
    })).toBe(12);
  });
  it("should return 0", () => {
    expect(objectSum(null)).toBe(0);
  });
});

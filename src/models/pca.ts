export function applyPCA(samples: number[]) {
  // Fake PCA logic to simulate failure
  const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
  return samples.map(v => v - mean * 1.5); // made values worse intentionally
}

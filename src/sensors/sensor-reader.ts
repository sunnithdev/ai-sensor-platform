export async function getSensorData() {
  const start = performance.now();

  const samples = Array.from({ length: 20 }, () =>
    Math.random() * 10 + Math.random()
  );

  const latency = performance.now() - start;

  console.log("Latency observed:", latency.toFixed(4), "ms");
  return samples;
}

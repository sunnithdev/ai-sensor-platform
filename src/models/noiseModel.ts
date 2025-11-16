export function basicNoiseReducer(samples: number[]) {
  // Very rough prototype for noise reduction
  return samples.map((v, i) => {
    const prev = samples[i - 1] ?? v;
    const next = samples[i + 1] ?? v;
    return (prev + v + next) / 3; // moving average
  });
}

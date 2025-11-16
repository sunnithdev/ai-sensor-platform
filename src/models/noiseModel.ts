import { basicNoiseReducer } from "./noiseModel";
import fft from "fft-js";

export function fftNoiseFilter(samples: number[]) {
  const phasors = fft.fft(samples);
  // remove high-frequency noise
  const filtered = phasors.map((x, i) =>
    i > phasors.length * 0.8 ? [0, 0] : x
  );
  return fft.ifft(filtered).map(x => x[0]);
}

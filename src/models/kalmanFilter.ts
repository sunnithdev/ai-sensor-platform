export class KalmanFilter {
  q = 0.01;
  r = 0.1;
  x = 0;
  p = 1;

  filter(value: number) {
    // predict
    this.p += this.q;

    // update
    const k = this.p / (this.p + this.r);
    this.x += k * (value - this.x);
    this.p *= 1 - k;

    return this.x;
  }
}

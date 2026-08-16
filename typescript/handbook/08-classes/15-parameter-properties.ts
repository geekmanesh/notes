class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {}

  get getZ() {
    return this.z;
  }
  get getY() {
    return this.y;
  }
}

const params = new Params(1, 2, 3);

console.log(params.x, params.getY, params.getZ);

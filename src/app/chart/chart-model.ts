// chart-model.ts
export class ChartModel {
  constructor(
    public id: number,
    public labels: string[],
    public data: number[],
    public color: string
  ) {}
}

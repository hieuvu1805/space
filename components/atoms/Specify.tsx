import formatNumber from "@helpers/formatNumber"

export enum SpecifyType {
  M = "m",
  KG = "kg",
}

export type SpecifyProps = {
  name: string
  type: SpecifyType
  val1: number
  val2: number
}

export default function Specify({ name, type, val1, val2 }: SpecifyProps) {
  return (
    <div className="flex justify-between border-b">
      <span className="uppercase">{name}</span>
      <span>
        <span className="ml-1 mr-1">{`${formatNumber(val1)} ${type}`}</span>/
        <span className="ml-1 text-gray-400">
          {`${formatNumber(val2)} ${type === "m" ? "ft" : "lb"}`}
        </span>
      </span>
    </div>
  )
}

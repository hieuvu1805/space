import Specify, { SpecifyProps } from "@components/atoms/Specify"

type OverviewProps = {
  title?: string
  items: SpecifyProps[]
}

export default function Overview({ title = "overview", items }: OverviewProps) {
  return (
    <>
      <p className="font-bold uppercase">{title}</p>
      <div className="ml-5 sm:ml-14 xl:ml-24">
        {items.map((item) => (
          <Specify key={item.name} {...item} />
        ))}
      </div>
    </>
  )
}

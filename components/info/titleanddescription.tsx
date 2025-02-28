interface Props {
  title: string;
  description: string;
}

export default function TitleAndDescription({ title, description }: Props) {
  return (
    <section className="flex flex-col gap-2 items-center md:items-start">
      <h1 className="text-4xl font-bold">{ title }</h1>
      <p className="pl-4">{ description }</p>
    </section>
  )
}
type Questions = {
  numeric: string
  title: string
  text: string
}

export default function CardQuestionsSpaceX(props: Questions) {
  return (
    <div className="ml-8">
      <div className="mt-8 flex w-3/5 items-center rounded bg-white text-black">
        <div className="p-4">
          <p className="rounded-full bg-orange-400 px-6 py-4 text-2xl">
            {props.numeric}
          </p>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <h1 className="text-xl font-bold">{props.title}</h1>
          </div>
          <div>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

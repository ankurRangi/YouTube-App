export default function VideoCard(props: any) {
  return (
    <div className="pl-3">
      <img src={props.image} className="rounded-xl" alt="" />
      <div className="grid grid-cols-12">
        <div className="col-span-1 pt-2 pl-1">
          <img className={'rounded-full w-10 h-10'} src={props.logo} alt="" />
        </div>

        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-600 text-base">{props.channel}</div>
          <div className="col-span-11 text-gray-600 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  )
}

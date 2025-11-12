type LightSwitchProps = {
  enabled: boolean;
  onToggle: () => void;
}

type SwitchProps = {
  enabled: boolean
}

function Switch({enabled}: SwitchProps) {
  if (enabled) {
    return (
      <>
        <div className="absolute -top-3 h-7 w-7 bg-gray-100 rounded-t-lg"></div>
        <div className="absolute top-3 h-6 w-7 bg-gray-300"></div>
      </>
    )
  } else {
    return (
      <>
        <div className="absolute -bottom-3 h-7 w-7 bg-gray-100 rounded-b-lg"></div>
        <div className="absolute bottom-3 h-6 w-7 bg-gray-300 "></div>
      </>
    )
  }
}

export default function LightSwitch(props: LightSwitchProps) {
  return (
    <div onClick={() => props.onToggle()} className="flex justify-center items-center h-64 w-40 rounded-xl bg-gray-200 border-3 border-gray-300">
      <div className="flex justify-center relative h-16 w-8 bg-white border-3 border-gray-300 rounded-md">         
        <Switch enabled={props.enabled}></Switch>
      </div>
    </div>
  );
}
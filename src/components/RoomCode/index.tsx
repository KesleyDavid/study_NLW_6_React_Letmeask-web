import imgCopy from '../../assets/images/copy.svg';

import { Button } from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Button onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={imgCopy} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </Button>
  )
}
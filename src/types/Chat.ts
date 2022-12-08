import { IMessage } from "./Message"

export interface IChat{
  id:string
  messages:Array<IMessage>
}
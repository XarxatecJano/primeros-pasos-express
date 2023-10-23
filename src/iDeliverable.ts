export interface IDeliverable{
    deliver():void,
    return():void,
    isDelivered():boolean,
    compareTo(objectToCompare:IDeliverable):IDeliverable
}
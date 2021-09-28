import { CarImage } from './carimage';
export interface CarDetails{
    carId:number,
    brandId:number,
    colorId:number,
    carImageId:number,
    brandName:string,
    colorName:string,
    modelYear:number,
    dailyPrice:number,
    description:string,
    carImages:CarImage[]
}
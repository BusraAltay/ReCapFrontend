import { RentalDetails } from './rentaldetails';
import { ResponseModel } from './responseModel';

export interface RentalDetailsResponseModel extends ResponseModel{
    data:RentalDetails[];
}
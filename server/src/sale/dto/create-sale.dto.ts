import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSaleDto {
    @IsString()
    public projectName: string

    @IsNumber()
    public unit: number
}

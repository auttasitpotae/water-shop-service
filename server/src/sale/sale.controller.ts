import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  public create(@Body() createSaleDto: CreateSaleDto[]) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  public findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
